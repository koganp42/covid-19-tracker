import React from "react";
import { Grid, TextField } from '@material-ui/core';

export const CoronavirusTextField = ({field, value, handleChange}) => {
    return (
        <Grid item xs={field.xs || 12} sm={field.sm || 12}>
        <TextField
          autoComplete={field.autoComplete}
          autoFocus={field.autoFocus || false}
          fullWidth = {field.fullWidth}
          id={field.id}
          label={field.label}
          name={field.name}
          onChange={handleChange}
          required = {field.required}
          type={field.type}
          value={value}
          variant="outlined"
        />
      </Grid>
    );
  }