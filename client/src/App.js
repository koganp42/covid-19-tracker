
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestForm from "./pages/TestForm";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import Map from "./pages/Map";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import {LoggedInProvider} from "./utils/GlobalState"; 

//Redux
import { Provider } from 'react-redux'
import store from './store';

require('dotenv').config();


function App() {
  return (
    <Provider store={store}>
    {/* <LoggedInProvider> */}
    <Router>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div>
      <Header />
        <Switch>
          <Route exact path={["/", "/login"]}>   
            <Login />
          </Route>
          <Route exact path={["/map"]}>   
            <Map />
            <Footer />
          </Route>
          {/* <Route exact path="/users/:id">
            <User />
          </Route> */}
          <Route exact path={["/testForm"]}>
            <TestForm />
          </Route>
          <Route exact path={["/signup"]}>
            <Signup />
          </Route>
          
        </Switch>
        </div>
      </MuiPickersUtilsProvider>
    </Router>
    {/* </LoggedInProvider>  */}
    </Provider>
  );
}

export default App;
