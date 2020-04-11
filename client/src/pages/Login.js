import React, {useState, useEffect} from 'react';
import { makeStyles , Grid} from '@material-ui/core/styles';
import { Button, responsiveFontSizes } from "@material-ui/core"
import TextField from '@material-ui/core/TextField';
import API from "../utils/API"; 
import {Redirect} from "react-router-dom"; 
// import {useLoggedInContext} from "../utils/GlobalState"; 

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
          localStorage.setItem("currentUserId", response.data.id)
          setRedirect("/testForm"); 
          // console.log(redirect); 
          // console.log(userInfo);
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
          <form className={classes.root} noValidate autoComplete="off">
              <h2>Login</h2>
            <TextField 
              value= {userInfo.email} 
              name="email"
              onChange={handleChange}
              id="standard-basic" 
              label="email" 
              type="email"
            />
            <TextField 
              value= {userInfo.password} 
              name="password"
              onChange={handleChange}
              id="standard-basic" 
              label="password" 
              type="password"
            />
            <Button onClick={handleSubmit} variant="contained">Enter</Button>
          </form>) }
    </div>
    
  );
}