import React, {useState, useEffect} from 'react';
import {responsiveFontSizes } from "@material-ui/core"
import API from "../utils/API"; 
import {Redirect, Link} from "react-router-dom"; 
import {
  Avatar, Button, Container, CssBaseline, makeStyles, Typography, Grid,  TextField
} from '@material-ui/core';
// import {useLoggedInContext} from "../utils/GlobalState"; 

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

export default function BasicTextFields() {
  const classes = useStyles();
  const [userInfo, setUserInfo]= useState({email: "", password: ""});  
  const [redirect, setRedirect] = useState( null); 
  // const [state, dispatch] = useLoggedInContext(); 

  useEffect(()=>{ 
    console.log("Check check"); 
    API.checkAuthentication()
        .then(response=>{
            console.log(response);
            if (response.data) {
                console.log("logged in"); 
                setRedirect(null); 
                console.log(redirect); 
            } else {
                console.log("Not logged in!"); 
                setRedirect(null); 
                console.log(redirect); 
            }
        })
        .catch(err=>console.log(err)); 
}, [redirect])

  const handleChange= (event)=>{
    const name= event.target.name; 
    const value = event.target.value; 
    setUserInfo({...userInfo, [name]: value});  
  }

  const handleSubmit= (event)=>{
    event.preventDefault(); 
    API.authenticateUser(userInfo)
      .then(response=>{
        if (response.status === 200){
          console.log("Logged in!"); 
          console.log(response); 
          setRedirect("/map"); 
          console.log(redirect); 
          // setRedirect({redirect: '/map'}); 
          //set state to logged in 
          // this.props.updateUser({
        //     loggedIn: true,
        //     username: response.data.email
        // })
          //update sate to redirect page
          // this.setState({redirectTo: '/map'})
        }
      })
      .catch(err=>{
        console.log(err); 
        console.log("Error Logging In"); 
        setRedirect(null); 
        console.log(redirect); 
      }); 

  }

  return (
    <div>
      { redirect !== null ? ( <Redirect to= {redirect}/>) : (
        <Container component="main" maxWidth="sm">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>

                </Avatar>
                <Typography component="h1" variant="h6">
                    Log In
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                        <TextField 
                          value= {userInfo.email} 
                          name="email"
                          onChange={handleChange}
                          id="standard-basic" 
                          label="Email" 
                          variant="outlined"
                          fullWidth
                        />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                        <TextField 
                          value= {userInfo.password} 
                          name="password"
                          onChange={handleChange}
                          id="standard-basic" 
                          label="Password" 
                          variant="outlined"
                          fullWidth
                        />
                        </Grid>

                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                    {/* Commenting the following out to be used in a later version */}
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link to="/Signup" variant="body2">
                                Don't Have An Accout? Sign Up Here
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
          ) }
    </div>
    
  );
}







