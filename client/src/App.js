import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestForm from "./pages/TestForm";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/map"]}>
            <Map />
          </Route>
          {/* <Route exact path="/users/:id">
            <User />
          </Route> */}
          <Route exact path={["/testform"]}>
            <TestForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
