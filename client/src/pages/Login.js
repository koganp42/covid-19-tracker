import React, {useState} from 'react';
import { makeStyles , Grid} from '@material-ui/core/styles';
import { Button } from "@material-ui/core"
import TextField from '@material-ui/core/TextField';

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

  //   const handleInputChange= ()=>{
//     dispatch({type: "handleSearchInput", "searchInput": searchInput.current.value}); 
//   }

  const handleChange= (event)=>{
    const name= event.target.name; 
    const value = event.target.value; 
    console.log(value); 
    setUserInfo({...userInfo, [name]: value}); 
    console.log(userInfo); 
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
      <Button variant="contained">Enter</Button>
    </form>
  );
}