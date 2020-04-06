import React from "react";
import Grid from '@material-ui/core/Grid';
import { KeyboardDatePicker } from "@material-ui/pickers";

export const CoronavirusDatePicker = ({field, value, handleChange}) => {
  return (
    <Grid item xs={field.xs || 12} sm={field.sm || 12}>
      <KeyboardDatePicker
        clearable
        format="yyyy/MM/dd"
        label={field.label}
        onChange={handleChange}
        placeholder="2019/12/01"
        value={value}
      />
    </Grid>
  );
}