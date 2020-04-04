import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestForm from "./pages/TestForm";
import Nav from "./components/Nav";
import Map from "./pages/Map"
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';


function App() {
  return (
    <Router>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Nav />
        <Switch>
          {/* <Route exact path={["/", "/map"]}>
            <Map />
          </Route> */}
          {/* <Route exact path="/users/:id">
            <User />
          </Route> */}
          <Route exact path={["/TestForm"]}>
            <TestForm />
          </Route>
        </Switch>
      </MuiPickersUtilsProvider>
    </Router>
  );
}

export default App;
