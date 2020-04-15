import React, { useState, useEffect } from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {
  Avatar, Button, Container, CssBaseline, makeStyles, Typography, Grid,
} from '@material-ui/core';
import {
  CoronavirusTextField, CoronavirusRadio, FieldList
} from "../components/FormComponents/FormFields";
import { Redirect } from "react-router-dom";
import { CoronavirusDatePicker } from "../components/FormComponents/DatePicker/DatePicker";

//import API routes 
import API from "../utils/API"


///////////Refactor all api calls to use req.user.id

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  
}));

export default function TestForm() {
  //////////// Reminder to create a function for converting dob to age
  const classes = useStyles();
  let UserId;
  const [locationState, setLocationState] = useState({
    lat: 0,
    lon: 0
  })
  const [personState, setPersonState] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    dateOfBirth: new Date(),
    sex: "female",
    smoking: "never",
    preExistingConditions: "false",
    listPreExistingConditions: "",
    sick: "false",
    UserId: 0
  });
  // const [formFields, setFormFields] = useState([]);
  const [illnessState, setIllnessState] = useState({
    tested: "false",
    dateOfTest: new Date(),
    dateOfOnset: new Date(),
    symptoms: "",
    hospitalized: "false",
    dateOfHospitalization: new Date(),
    intensiveCare: "false",
    death: "false",
    dateOfRecovery: new Date(),
    UserId: 0
  });

  const [userDataFailState, setUserDataFailState] = useState(null);
  const [redirect, setRedirect] = useState(null);

  const checkAuth = () => {
    //getUserLocation();
    API.checkAuthentication()
        .then(response=>{
          if (response.data){
            console.log("Logged in!"); 
            UserId = response.data.id;
            getUserData(UserId);
            return response;            
          }
          else {
            setRedirect("/login"); 
          }
        })
        .catch(err=>{
          console.log(err); 
          console.log("Error Logging In"); 
          setRedirect("/login");
        }); 
  }

            ///////// Passed the user id from checkAuth(), getUserData sets the person and illness foreign keys to it. Then checks the db to see if that user has filled out the form before and populates the fields accordingly if so. If the current user hasn't filled out the form before, it sets userDataFailState to true. This will be used in the formSubmit to determine whether to use a post or a put call.  
  const getUserData = (id) => {
    setPersonState({ ...personState, UserId: id});
    setIllnessState({ ...illnessState, UserId: id});
    API.getPerson(id)
      .then(result => {
        if(result.data === null){
          setUserDataFailState(true);
          return 
        }
        setUserDataFailState(false);
        setPersonState({...(result.data)});
      }).catch(function (err) {
        console.log(err);
      });
    API.getIllness(id)
      .then(result => {
        if(result.data === null){
          return result
        }
        setIllnessState({...illnessState, ...result.data});
      }).catch(function (err) {
        console.log(err);
      });
      
  }
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position);
        setLocationState({ lat: position.coords.latitude, lon: position.coords.longitude });
      })
    }
  };

            ///////// Use effect for setting user's location in state, then runs checkAuth to validate user and then retrieves their prior survey answers if they exist. /////////
  useEffect(
    () => {
      getUserLocation()
      checkAuth();
    },
    [],
  );
            ///////// Use effect triggered any time the date of birth is changed, converts that date to age and sets it in state. /////////
  useEffect(
    () => {
      convertDateOfBirth(personState.dateOfBirth);
    },
    [personState.dateOfBirth],
  );

          ///////// On form submission, the user's information is either saved or updated depending on whether the prior getUserData() function retrieved a null 
  const formSubmit = async (e) => {
    e.preventDefault();
    //await getUserLocation();
    if(userDataFailState === true){
      createNewPerson();
    } else {
      updatePerson();
    }
    //setRedirect({redirect: '/map'});
  }

  ///////    The following four functions follow the same pattern of either creating or updating the person table 
  ///////    and then calling the second function for creating or updating the illness table. 
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const createNewPerson = () => {
    API.createPerson({...personState, ...locationState})
      .then(result => {
        createNewIllness();
        return result;
      }
      )
      .catch(function (err) {
        console.log(err);
      })
  }

  const createNewIllness = () => {
    API.createIllness(illnessState)
      .then(result => {
          setRedirect('/map');
          return result;
        }
      )
      .catch(function (err) {
        console.log(err);
      })
  }

  const updatePerson = () => {
    let UserId = personState.UserId;
    console.log(UserId);
    API.updatePerson(UserId, {...personState, ...locationState})
      .then(result => {
        updateIllness();
        return result;
      }
      )
      .catch(function (err) {
        console.log(err);
      })
  }
  const updateIllness = () => {
    let UserId = illnessState.UserId;
    console.log(UserId);
    API.updateIllness(UserId, illnessState)
      .then(result => {
          setRedirect('/map');
          return result;
        }
      )
      .catch(function (err) {
        console.log(err);
      })
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  const convertDateOfBirth = (dateString) => {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    parseFloat(age);
    setPersonState({ ...personState, age: age });
    return age;
  }

  // Function for updating the person and illness states when their respective fields are changed. 
  const handleInputChange = (key, value, context) => {
    switch (context) {
      case "person":
        setPersonState({ ...personState, [key]: value })
        break;
      case "illness":
        setIllnessState({ ...illnessState, [key]: value })
        break;
      default:
        console.log(`unexpected context type: ${context}`);
    }
  }

  // Pulling in the list of questions from Fieldlist.js.
  const fields = FieldList;
  // Mapping the array by input type and generating the form questions accordingly.
  const getFormFields = () => {
    return fields.map(field => {
      const key = field.id;
      const value = (field.context === "person") ? personState[key] : illnessState[key];

      switch (field.fieldType) {
        case "input":
          return (<CoronavirusTextField
            key={key}
            field={field}
            value={value}
            handleChange={(e) => {
              const { id, value } = e.target;
              handleInputChange(id, value, field.context);
            }}
          />);
        case "date":
          return (<CoronavirusDatePicker
            key={key}
            field={field}
            value={value}
            // Must pass in date as the first property here in order to expose the formatted date (or stringDate)
            handleChange={(date, stringDate) => 
              handleInputChange(key, stringDate, field.context)
            }
          />);
        case "radio":
          return (<CoronavirusRadio
            key={key}
            field={field}
            value={value}
            handleChange={(e) => {
              const { value } = e.target;
              handleInputChange(key, value, field.context);
            }}
          />)
        default:
          break;
      }

    })
  }

  return (
    <div>
    { redirect !== null ? ( <Redirect to= {redirect}/>) : (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>

        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Please enter your test result and some relevant personal information that will help researchers track the spread of coronavirus.
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>

            {getFormFields()}

          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={formSubmit}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container> 
     ) }
    </div>
  );
}