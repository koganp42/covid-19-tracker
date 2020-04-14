import React from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { KeyboardDatePicker } from "@material-ui/pickers";

const useStyles = makeStyles({
  root: {
    WebkitTextSizeAdjust: 20,
    padding: 20
  },
});

export const CoronavirusDatePicker = ({field, value, handleChange}) => {
  const classes = useStyles();
  return (
    <Grid item xs={field.xs || 12} sm={field.sm || 12}>
      <KeyboardDatePicker
      classes={{
        root: classes.root
      }}
        clearable
        format="yyyy/MM/dd"
        label={field.label}
        onChange={handleChange}
        disableFuture={true}
        placeholder="2019/12/01"
        value={value}
      />
    </Grid>
  );
}
