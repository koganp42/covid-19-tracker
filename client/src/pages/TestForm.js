import React, { Fragment, useState, useEffect } from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {
  Avatar, Button, Container, CssBaseline, makeStyles, Typography, Grid, Link
} from '@material-ui/core';
import {
  CoronavirusTextField, CoronavirusRadio, FieldList
} from "../components/FormComponents/FormFields";
import { Redirect } from "react-router-dom";
import { CoronavirusDatePicker } from "../components/FormComponents/datePickers/DatePicker";

//import API routes 
import API from "../utils/API"

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
  const [personState, setPersonState] = useState(   {
    firstName: "",
    lastName: "",
    age: 0,
    dateOfBirth: new Date(),
    sex: "female",
    lat: 0,
    lon: 0,
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
    PeopleId: 0
  });

  const [loggedIn, setLoggedIn] = useState(false);
  let UserId;
  useEffect(
    () => {
      UserId = parseInt(localStorage.getItem('currentUserId'))
      setLoggedIn((UserId != NaN));
      //if (loggedIn){
      setPersonState({ ...personState, UserId });
      setIllnessState({ ...illnessState, UserId })
      getPeople();
      //setIllnessState({ ...illnessState, UserId });
      getUserLocation();
      //}
    },
    [personState.UserId],
  );

  

  // const [redirect, setRedirect] = useState(null);
  // API.authenticateUser(userInfo)
  //     .then(response=>{
  //       if (response.status === 200){
  //         console.log("Logged in!"); 
  //         console.log(response);
  //         console.log(redirect);
  //         return response; 
  //         // setRedirect({redirect: '/map'}); 
  //         //set state to logged in 
  //         // this.props.updateUser({
  //       //     loggedIn: true,
  //       //     username: response.data.email
  //       // })
  //         //update sate to redirect page
  //         // this.setState({redirectTo: '/map'})
  //       }
  //     })
  //     .catch(err=>{
  //       console.log(err); 
  //       console.log("Error Logging In"); 
  //       setRedirect("/login"); 
  //     }); 


  const formSubmit = (e) => {
    e.preventDefault();
    createNewPerson();
  }

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setPersonState({ ...personState, lat: position.coords.latitude, lon: position.coords.longitude });
      })
    }

  };

  // Part of this could be used to redirect on login depending on whether they've filled out the form.
  const getPeople = () => {
    API.getPeople()
      .then( result => {
        const me = result.data.filter(({UserId})=> UserId === personState.UserId)[0];
        console.log(me);
        if (me) {setPersonState(me)};
      });
      API.getIllness()
      .then( result => {
        const me = result.data.filter(({UserId})=> UserId === illnessState.UserId)[0];
        console.log(me);
        if (me) {setIllnessState(me)};
      });
  }

  const createNewPerson = () => {
    API.createPerson(personState)
      .then(result => {
        createNewIllness();
        console.log(result)
        return result;
      }
      )
      .catch(function (err) {
        console.log(err);
      })
  }

  const createNewIllness = () => {

    API.createIllness(illnessState)
      .then(
        (result) => {
          console.log(`4th function:`);
          console.log(result);
          return result;
        }
      )
      .catch(function (err) {
        console.log(err);
      })
  }



  const classes = useStyles();

  const fields = FieldList;

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
            handleChange={(date, stringDate) => handleInputChange(key, stringDate, field.context)}
          />);
        case "radio":
          return (<CoronavirusRadio
            key={key}
            field={field}
            value={value}
            handleChange={(e) => {
              const { id, value } = e.target;
              handleInputChange(key, value, field.context);
            }}
          />)
        default:
          break;
      }

    })
  }

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>

        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Please enter your test result and some relevant personal information that will help researchers track the spread of coronavirus.
        </Typography>
        <form className={classes.form} noValidate>
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
          {/* Commenting the following out to be used in a later version */}
          {/* <Grid container justify="flex-end">
                      <Grid item>
                          <Link href="#" variant="body2">
                              Already have an account? Sign in
                          </Link>
                      </Grid>
                  </Grid> */}
        </form>
      </div>
    </Container>
  );
}