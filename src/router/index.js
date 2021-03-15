import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FormLogin from "../login/formLogin";
import App from '../App.js'
export default function login() {
  return (
    <Router>
      <div className="login" >
        <Link to="/formLogin" style = {{color:"black"}}> Login</Link>
        <Switch>
          <Route path = '/formLogin'>
            <FormLogin/>
          </Route>
          <Route exact={true} path = '/'>
            <App/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
