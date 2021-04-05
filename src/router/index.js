import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FormLogin from "../login/formLogin";
import Data from '../component/data'
import Home from './home'
import '../App.css'
export default function login() {
  return (
<div>

    <div className="header">
    
    <h1>TMDB</h1>
    
    <div/>
    <Router>
      <div className="login" >
        <Link to="/formLogin" style = {{color:"black"}}> Login</Link>
        <Switch>
        <Route exact path="/">
                {" "}
                <Home />{" "}
              </Route>
          <Route path = '/formLogin'>
            <FormLogin/>
          </Route>
          <Route exact={false} path = '/1'>
            <Data/>
          </Route>
        </Switch>
      </div>
    </Router>
</div>
</div>
  );
}
