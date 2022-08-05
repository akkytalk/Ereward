import { Fragment } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";
import "./App.css";
import Login from "./Auth/Login";

import Layout from "./Components/layout/Layout";

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />

          <Route path="/" component={Layout} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
