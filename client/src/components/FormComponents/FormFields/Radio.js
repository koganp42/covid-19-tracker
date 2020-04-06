import React from 'react';
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Radio,
    RadioGroup
} from '@material-ui/core';


export const CoronavirusRadio = ({ field, value, handleChange }) => {
    const getOptions = () => {
        //loops through field options and returns a form control
        return field.options.map(option => {
            return (<FormControlLabel
                value={option.value}
                control={<Radio />}
                label={option.label}
            />)
        })
    }
    return (
        <Grid item xs={12}>
            <FormControl component="fieldset">
                <FormLabel component="legend">
                    {field.label}
                </FormLabel>
                <RadioGroup
                    aria-label={field.id}
                    name={field.id}
                    value={value}
                    onChange={handleChange}
                >
                    {getOptions()}
                </RadioGroup>
            </FormControl>
        </Grid>
    )
}