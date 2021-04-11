import React,{useEffect} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FormLogin from "../login/formLogin";
import Data from "../component/data";
import Home from "./home";
import PrivateRote from "./privateRoute"
import "../App.css";
export default function Login() {

  return (
    <div>
      <div className="header">
        <h1>TMDB</h1>

        <div />
        <Router>
          <div className="login">
            <Link to="/formLogin" style={{ color: "black" }}>
              {" "}
              Login
            </Link>
            <Link to="/1" style={{ color: "gold" }}>
              {" "}
              Movies{" "}
            </Link>
            <Link to="/" style={{ color: "red" }}>
              {" "}
              Home{" "}
            </Link>
            <Switch>
              <Route exact path="/" component={Home}></Route>
             <Route path="/formLogin">
                <FormLogin />
              </Route>
              <PrivateRote exact path="/1" component={Data}></PrivateRote>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}
