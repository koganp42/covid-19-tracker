import React, { Fragment, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import CoronavirusDatePicker from '../components/FormComponents/DatePickers/datePicker';
import CoronavirusTextField from '../components/FormComponents/TextField';

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

  const [userState, setUserState] = useState({
    email: "",
    password: ""

  });

  //////////// Reminder to create a function for converting dob to age
  const [personState, setPersonState] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    dateOfBirth: "2018/10/10",
    sex: "female",
    // lat: 0,
    // long: 0,
    smoking: "never",
    preExistingConditions: "false",
    listPreExistingConditions: "",
    sick: "positive"
  });

  const [illnessState, setIllnessState] = useState({
    tested: "false",
    dateOfTest: "",
    dateOfOnset: "",
    symptoms: "",
    hospitalized: "false",
    dateOfHospitalization: "",
    intensiveCare: "false",
    death: "false",
    dateOfRecovery: ""
  })

  // Split into 3 different tables
  //Handles updating component state when the user types into the input field
  const handleUserInputChange = event => {
    const { name, value } = event.target;
    setUserState({ ...userState, [name]: value })
  };
  const handlePersonInputChange = event => {
    const { name, value } = event.target;
    setPersonState({ ...personState, [name]: value })
  };
  // const handleIllnessInputChange = event => {
  //   const { name, value } = event.target;
  //   setIllnessState({ ...illnessState, [name]: value })
  // };
  const handleDateOfBirthChange = date => {
    console.log(date)
    //setPersonState({ ...personState, dateOfBirth: date })
  };


  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
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

          <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">What was the result of your test for Coronavirus?</FormLabel>
                <RadioGroup aria-label="sick" name="sick" value={personState.sick} onChange={handlePersonInputChange}>
                  <FormControlLabel value="negative" control={<Radio />} label="Negative" />
                  <FormControlLabel value="positive" control=
                    {<Radio />} label="Postive" />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={personState.firstName}
                onChange={handlePersonInputChange}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={personState.lastName}
                onChange={handlePersonInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={userState.email}
                onChange={handleUserInputChange}
              />
            </Grid>
            <CoronavirusTextField
              name="password"
              value={userState.password}
              handleChange={() => {handleUserInputChange()}}
            />
            {/* <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={userState.password}
                onChange={handleUserInputChange}
              />
            </Grid> */}

            <Grid item xs={12}>
              <CoronavirusDatePicker 
              selectedDate={personState.dateOfBirth} handleDateChange={handleDateOfBirthChange} 
              label={"Please Enter Your Date Of Birth"}>
              </CoronavirusDatePicker>
            </Grid>

            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Sex</FormLabel>
                <RadioGroup aria-label="sex" name="sex" value={personState.sex} onChange={handlePersonInputChange}>
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Smoking History</FormLabel>
                <RadioGroup aria-label="smoking" name="smoking" value={personState.smoking} onChange={handlePersonInputChange}>
                  <FormControlLabel value="never" control=
                    {<Radio />} label="Never Smoked" />
                  <FormControlLabel value="current" control={<Radio />} label="Currently Smoke" />
                  <FormControlLabel value="former" control={<Radio />} label="Used to Smoke" />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Do You Have Any Pre-Existing Medical Conditions?</FormLabel>
                <RadioGroup aria-label="preExistingConditions" name="preExistingConditions" value={personState.preExistingConditions} onChange={handlePersonInputChange}>
                  <FormControlLabel value="false" control={<Radio />} label="No" />
                  <FormControlLabel value="true" control=
                    {<Radio />} label="Yes" />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="listPreExistingConditions"
                label="If you answered yes to the prior questions, please list your pre-existing medical conditions:"
                name="listPreExistingConditions"
                value={personState.listPreExistingConditions}
                onChange={handlePersonInputChange}
              />
            </Grid>

          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
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
