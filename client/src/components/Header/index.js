import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import API from '../../utils/API';
import {Redirect} from "react-router-dom"; 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 5,

  },
  menuButton: {
    marginRight: theme.spacing(2),
    
  },
  title: {
    flexGrow: 1,
  },
  toolBar: {
    background: 'linear-gradient(45deg, #6c63ff 30%, #92e8f8 90%)',

  },
  link: {
    margin: 15,
  }
}));

export default function ButtonAppBar() {

  


  const classes = useStyles();
  const [redirect, setRedirect] = useState( null); 

  useEffect(()=>{ 
    setRedirect(null); 
    console.log("navbar to check logout"); 

}, [redirect])

  const handleLogout = function(){
    API.logOut()
      .then(response=>{
        console.log("logout");
        localStorage.setItem("currentUserId", null); 
        setRedirect("/login"); 
      })
      .catch(err=>console.log(err)); 
  }

  return (
    <div>
      { redirect !== null ? ( <Redirect to= {redirect}/>) : (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar className={classes.toolBar}>

              <Typography variant="h6" className={classes.title}>
                Covid-19 Tracker
              </Typography>
              <Button href="/Map">Go to Map</Button>
              <Button href="/TestForm">Go to Form</Button>
              <Button href="/Login" onClick={handleLogout}>Log Out</Button>
              {/* <Link className={classes.link} to="/TestForm">Back to Form</Link>
              <Link className={classes.link} onClick={handleLogout}>Log Out</Link> */}
              

            </Toolbar>
          </AppBar>
        </div>)
      }
    </div>
  );
}

