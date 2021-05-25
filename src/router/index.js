import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FormLogin from "../login/formLogin";
import Data from "../component/data";
import Home from "./home";
import SignUp from "../login/sign up";
import { logOutAction } from "../redux/actions/index";
import { connect } from "react-redux";
import PrivateRote from "./privateRoute";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {},
  },
}));

function Login(props) {
  const classes = useStyles();

  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  useEffect(() => {
    const update = () => {
      const newHeight = window.innerHeight / 10;
      setHeight(newHeight);
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", update);
  }, []);
  console.log(height);
  return (
    <div>
      <div
        className="header"
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <h1>TMDB</h1>

        {props.login === true && (
          <Box mt={-2} ml={170}>
            <Button
              className={classes.root}
              variant="outlined"
              color="black"
              onClick={() => {
                props.logOut();
              }}
            >
              logOut
            </Button>{" "}
          </Box>
        )}
        <div />
        <Router>
          <div>
            {props.login === false && (
              <Link to="/formLogin" style={{ color: "black" }}>
                <Box mt={-2} ml={170}>
                <Button
                  variant="outlined"
                  color="black"
                  className={classes.root}
                >
                  Login
                </Button>
                </Box>
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
                {/* <Container
                  // className="d-flex align-items-center justify-content-center"
                  // style={{ minHeight: "100vh" }}
                >
                  <div className="w-100" style={{ maxWidth: "400px" }}>
              
                  </div>
                </Container> */}
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
