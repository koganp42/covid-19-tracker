import React, { Fragment, useState } from "react";
import { DatePicker } from "@material-ui/pickers";

function CoronaDatePicker(props) {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <Fragment>
      <DatePicker
        variant="inline"
        label="Basic example"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </Fragment>
  );
}

export default CoronaDatePicker;