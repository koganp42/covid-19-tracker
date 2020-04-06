import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestForm from "./pages/TestForm";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import Map from "./pages/Map";
import Header from "./components/Header"
import Footer from "./components/Footer"


function App() {
  return (
    <Router>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div>
      <Header />
        <Switch>
          <Route exact path={["/", "/map"]}>   
            <Map />
            <Footer />
          </Route>
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
