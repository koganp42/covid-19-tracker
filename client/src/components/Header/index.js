import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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

  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>

          <Typography variant="h6" className={classes.title}>
            Covid-19 Tracker
          </Typography>

          <Button 
          color="inherit"
          href="/TestForm"
          >Back to Form</Button>

        </Toolbar>
      </AppBar>
    </div>
  );
}

