import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import firebaseConfig from "./firebase";
import {useHistory} from "react-router-dom"
import { propTypes } from "react-bootstrap/esm/Image";
import { isLogged } from "../redux/actions";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const mapStateToProps = (state) => {
  return { login: state.clickLogin.login };
};

function SignUp(props) {
    let history = useHistory();
    useEffect(()=>{

        if(props.login === true){
          history.push("/1");
        
        }
    
      },[props.login])
  const [inputEmail, setEmail] = useState("");
  const [inputPassword, setPassword] = useState("");
  const [inputVerifyPassword, setVerifyPassword] = useState("");


  if (firebase.apps.length === 0) {
    try {
      firebase.initializeApp(firebaseConfig);
    } catch (err) {
      console.error("Firebase initialization error raised", err.stack);
    }
  }
  function createWithEmailAndPasswordHandler() { 
      if(inputPassword==inputVerifyPassword){

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
    <div className="divSignUp">
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={inputEmail}
            required
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={inputPassword}
            required
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">verify Password</label>
          <input
            onChange={(e) => setVerifyPassword(e.target.value)}
            value={inputVerifyPassword}
            required
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
      </form>
      <button
        onClick={() => {
            createWithEmailAndPasswordHandler();
          // props.isLogged(isLogin);
        }}
        // type="submit"
        className="btn btn-primary"
      >
sign up      </button>
    </div>
  );
}
export default connect(mapStateToProps, { isLogged })(SignUp);
