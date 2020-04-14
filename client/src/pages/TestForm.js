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


///////////Refactor all api calls to use req.user.id

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
  let UserId;
  const [personState, setPersonState] = useState({
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
    UserId: 0
  });



  const [redirect, setRedirect] = useState(null);

  const checkAuth = () => {
    API.checkAuthentication()
        .then(response=>{
          if (response.status === 200){
            console.log("Logged in!"); 
            console.log(response);
            UserId = response.data.id;
            setPersonState({ ...personState, UserId });
            setIllnessState({ ...illnessState, UserId })
            return response;            
          }
        })
        .catch(err=>{
          console.log(err); 
          console.log("Error Logging In"); 
          setRedirect("/login"); 
        }); 
  }
  // checkAuth();

  const getPeople = () => {
    API.getPeople()
      .then(result => {
        const currentUser = result.data.filter(({ UserId }) => UserId === personState.UserId)[0];
        //console.log(me);
        if (currentUser) { setPersonState(currentUser) };
      });
    API.getIllness()
      .then(result => {
        const currentUser = result.data.filter(({ UserId }) => UserId === illnessState.UserId)[0];
        //console.log(me);
        if (currentUser) { setIllnessState(currentUser) };
      });
  }
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setPersonState({ ...personState, lat: position.coords.latitude, lon: position.coords.longitude });
      })
    }
  };

  useEffect(
    () => {

      checkAuth();
      getPeople();
      getUserLocation();
    },
    [personState.UserId],
  );

  const formSubmit = (e) => {
    e.preventDefault();
    createNewPerson();
    setRedirect({redirect: '/map'});
  }

  const createNewPerson = () => {
    API.createPerson(personState)
      .then(result => {
        createNewIllness();
        console.log(result);
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
    </Container>) }
    </div>
  );
}