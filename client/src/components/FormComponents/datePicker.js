import React, { Fragment, useState } from "react";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

function CoronaDatePicker(props) {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <Fragment>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        variant="inline"
        label="Basic example"
        value={selectedDate}
        onChange={handleDateChange}
      />
      </MuiPickersUtilsProvider>
    </Fragment>
  );
}

export default CoronaDatePicker;