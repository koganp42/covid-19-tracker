import React from 'react';
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

  return (
    <form className={classes.root} noValidate autoComplete="off">
        <h2>Login</h2>
      <TextField id="standard-basic" label="email" />
      <TextField id="standard-basic" label="password" />
      <Button variant="contained">Enter</Button>
    </form>
  );
}