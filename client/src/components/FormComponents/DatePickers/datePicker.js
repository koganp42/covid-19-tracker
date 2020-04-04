import React, { Fragment } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";

function CoronavirusDatePicker(props) {
  return (
    <Fragment>

      <KeyboardDatePicker
        clearable
        label={props.label}
        value={props.selectedDate}
        placeholder="2018/10/10"
        onChange={props.handleDateChange}
        format="yyyy/MM/dd"
      />

    </Fragment>
  );
}

export default CoronavirusDatePicker;