import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
// import CoronaDatePicker from '../components/FormComponents/datePicker';
import { InlineDatePicker } from "@material-ui/pickers";


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
  const [formObject, setFormObject] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: 0,
    userSex: "female",
    smokerValue: "never",
    testResultValue: "positive"
  })
  //Handles updating component state when the user types into the input field
  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
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
          Sign up
              </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={formObject.firstName}
                onChange={handleInputChange}
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
                value={formObject.lastName}
                onChange={handleInputChange}
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
                value={formObject.email}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formObject.password}
                onChange={handleInputChange}
              />
            </Grid>
            
            <Grid item xs={12}>
              <InlineDatePicker></InlineDatePicker>
            </Grid>
            
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Sex</FormLabel>
                <RadioGroup aria-label="sex" name="userSex" value={formObject.userSex} onChange={handleInputChange}>
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Smoking History</FormLabel>
                <RadioGroup aria-label="smoker" name="smokerValue" value={formObject.smokerValue} onChange={handleInputChange}>
                  <FormControlLabel value="never" control=
                    {<Radio />} label="Never Smoked" />
                  <FormControlLabel value="current" control={<Radio />} label="Currently Smoke" />
                  <FormControlLabel value="former" control={<Radio />} label="Used to Smoke" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">What was the result of your test for Coronavirus?</FormLabel>
                <RadioGroup aria-label="smoker" name="testResultValue" value={formObject.testResultValue} onChange={handleInputChange}>
                  <FormControlLabel value="positive" control=
                    {<Radio />} label="Postive" />
                  <FormControlLabel value="negative" control={<Radio />} label="Negative" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">What was the result of your test for Coronavirus?</FormLabel>
                <RadioGroup aria-label="testResultValue" name="testResultValue" value={formObject.testResultValue} onChange={handleInputChange}>
                  <FormControlLabel value="positive" control=
                    {<Radio />} label="Postive" />
                  <FormControlLabel value="negative" control={<Radio />} label="Negative" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
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
