import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import firebaseConfig from "./firebase";
import { useHistory } from "react-router-dom";
import { propTypes } from "react-bootstrap/esm/Image";
import { isLogged } from "../redux/actions";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const mapStateToProps = (state) => {
  return { login: state.clickLogin.login };
};

function SignUp(props) {
  const classes = useStyles();
  let history = useHistory();
  useEffect(() => {
    if (props.login === true) {
      history.push("/1");
    }
  }, [props.login]);
  const [inputEmail, setEmail] = useState("");
  const [inputPassword, setPassword] = useState("");
  const [inputVerifyPassword, setVerifyPassword] = useState("");
  const verify = inputPassword !== inputVerifyPassword;
  console.log("verify", verify);
  if (firebase.apps.length === 0) {
    try {
      firebase.initializeApp(firebaseConfig);
    } catch (err) {
      console.error("Firebase initialization error raised", err.stack);
    }
  }
  function createWithEmailAndPasswordHandler() {
    if (verify == false) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(inputEmail, inputPassword)
        .catch((error) => {
          console.error("Error signing in with password and email", error);
        })
        .then((res) => {
          if (res) {
            props.isLogged(true);
          }
          console.log("res", res);
        });
    }
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              value={inputEmail}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              value={inputPassword}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              onChange={(e) => setVerifyPassword(e.target.value)}
              value={inputVerifyPassword}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="VerifyPassword"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {verify && <div style={{color:"red"}} >The passwords do not match</div>}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item></Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
          <Button
            onClick={() => {
              createWithEmailAndPasswordHandler();
            }}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up{" "}
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}
export default connect(mapStateToProps, { isLogged })(SignUp);
