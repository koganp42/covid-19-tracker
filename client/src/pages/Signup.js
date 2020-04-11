import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Redirect} from "react-router-dom"; 
import {
    Avatar, Button, Container, CssBaseline, makeStyles, Typography, Grid, TextField, Checkbox, FormLabel, 
    FormControlLabel, Box
} from '@material-ui/core';
// import {
//     CoronavirusTextField, FieldList
// } from "../components/FormComponents/FormFields";

//import API routes 
import API from "../utils/API";

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

export default function Signup() {
    const [redirect, setRedirect] = useState( null); 
    const classes = useStyles();
    
    const [userState, setUserState] = useState({
        email: "",
        password: "",
        admin: false,
        adminPassword: ""
    });

    const [adminDisplay, setAdminDisplay] = useState(true)

    const handleChange = (event) => {
        setUserState({ ...userState, [event.target.name]: event.target.checked });
        setAdminDisplay(!adminDisplay)
      };
    
    const formSubmit = (e) => {
        e.preventDefault();
        API.createUser(userState)
        .then(response=>{
            if (response.status === 200){
              console.log("User created!");  
            }
          })
          .catch(err=>{
            console.log(err); 
            console.log("Error Logging In"); 
            setRedirect(null); 
            console.log(redirect); 
          }).then(response => {
              API.authenticateUser(userState)
              .then(response=>{
                if (response.status === 200){
                  console.log("Logged in!"); 
                  setRedirect("/testForm"); 
                }
              })
              .catch(err=>{
                console.log(err); 
                console.log("Error Logging In"); 
                setRedirect(null); 
                console.log(redirect); 
              }); 
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
                <Typography component="h1" variant="h6">
                    Sign up to contribute to the coronavirus test results tracker!
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>

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
                                onChange={e => setUserState({...userState, email: e.target.value})}
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
                                value={userState.password}
                                autoComplete="current-password"
                                onChange={e => setUserState({...userState, password: e.target.value})}
                            />
                        </Grid>
                        <Grid item>
                        <FormLabel component="legend">Are you an Administrator?</FormLabel>
                        
                        <FormControlLabel
                            control={<Checkbox
                                 name="admin"
                                 onChange={handleChange} />}
                            label="Yes, I am an Admin"
                        />

                        </Grid>
                        <Grid item xs={12} display="none">
                            <TextField
                                disabled={adminDisplay}
                                variant="outlined"
                                required
                                fullWidth
                                name="adminPassword"
                                label="Admin Password"
                                type="adminPassword"
                                id="adminPassword"
                                // value={userState.password}
                                // autoComplete="current-password"
                                onChange={e => setUserState({...userState, adminPassword: e.target.value})}
                                
                            />
                        </Grid>
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
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link to="/Login" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>) }
    </div>
    );
}