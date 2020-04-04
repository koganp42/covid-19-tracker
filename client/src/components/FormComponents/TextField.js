import React, { Fragment, useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

function CoronavirusTextField(props) {
    const fieldList = [
        {
            name: "password",
            type: "password"

        }
    ]

    const [field, setField] = useState()

    useEffect(()=>{
        console.log(field)
        const fieldArr= fieldList.filter(({ name })=> name === props.name);

        const thisField = fieldArr[0];

        //setField(thisField);
    },[field]);

    return (
        <Grid item xs={12}>
        <TextField
          variant="outlined"
          required
          fullWidth
          name={field.name}
          label={field.label}
          type={field.type}
          id={field.id}
          autoComplete={field.autoComplete}
          value={props.value}
          onChange={props.handleChange}
        />
      </Grid>
    );
  }
  
  export default CoronavirusTextField;