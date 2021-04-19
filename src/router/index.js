import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FormLogin from "../login/formLogin";
import Data from "../component/data";
import Home from "./home";
import SignUp from "../login/sign up"
import { logOutAction } from "../redux/actions/index";
import { connect } from "react-redux";
import PrivateRote from "./privateRoute";
import "../App.css";
import { Container } from "react-bootstrap";

function Login(props) {
  return (
    <div>
      <div className="header">
        <h1>TMDB</h1>

        <div />
        {props.login === true && (
          <button
            onClick={() => {
              props.logOut();
            }}
          >
            logOut
          </button>
        )}
        <Router>
          <div className="login">
            {props.login === false && (
              <Link to="/formLogin" style={{ color: "black" }}>
                {" "}
                Login
              </Link>
            )}
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
              <Route exact path="/SignUp" component={SignUp}></Route>
              
              <Route path="/formLogin">
                <Container
                       className="d-flex align-items-center justify-content-center"
                       style={{ minHeight: "100vh" }}
                >
                  <div className="w-100" style={{ maxWidth: "400px" }}>
                    
                <FormLogin />
                  </div>
                </Container>

              </Route>
              <PrivateRote exact path="/1" component={Data}></PrivateRote>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { login: state.clickLogin.login };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut() {
      dispatch(logOutAction());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
