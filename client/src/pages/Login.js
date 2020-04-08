import React, {useState} from 'react';
import { makeStyles , Grid} from '@material-ui/core/styles';
import { Button, responsiveFontSizes } from "@material-ui/core"
import TextField from '@material-ui/core/TextField';
import API from "../utils/API"; 

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();
  const [userInfo, setUserInfo]= useState({email: "", password: ""});  

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
      }); 

  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
        <h2>Login</h2>
      <TextField 
        value= {userInfo.email} 
        name="email"
        onChange={handleChange}
        id="standard-basic" 
        label="email" 
      />
      <TextField 
        value= {userInfo.password} 
        name="password"
        onChange={handleChange}
        id="standard-basic" 
        label="password" 
      />
      <Button onClick={handleSubmit} variant="contained">Enter</Button>
    </form>
  );
}