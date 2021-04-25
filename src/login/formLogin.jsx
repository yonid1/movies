import React, { useState, useEffect } from "react";
import { Input, Button } from "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link ,useHistory } from "react-router-dom";
import firebaseConfig from './firebase'
import { propTypes } from "react-bootstrap/esm/Image";
import { isLogged } from "../redux/actions";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const mapStateToProps = (state) => {
  return { login: state.clickLogin.login };
};
const loginLocalStorage = window.localStorage.getItem("login");
function FormLogin(props) {
  console.log("props.login",props.login);
  useEffect(()=>{

    if(props.login === true){
      history.push("/1");
    
    }

  },[props.login])
  let history = useHistory();

 
  const [user,setUser]= useState("")
  const [inputEmail, setEmail] = useState("");
  const [inputPassword, setPassword] = useState("");
  if (firebase.apps.length === 0) {
    
    try {
      firebase.initializeApp(firebaseConfig)
  } catch (err) {
      console.error("Firebase initialization error raised", err.stack)
  }
  }
  function signInWithEmailAndPasswordHandler  () {
  
    firebase
      .auth()
      .signInWithEmailAndPassword(inputEmail, inputPassword)
      .catch((error) => {
        console.error("Error signing in with password and email", error);
      })
      .then((res) => {
        if(res){
          props.isLogged(true)
        }
        console.log("res",res);
      });
  };

  return (
    <div  >
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value ={inputEmail}
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
            value ={inputPassword}
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
          signInWithEmailAndPasswordHandler()
          // props.isLogged(isLogin);
        }}
        // type="submit"
        className="btn btn-primary"
      >
        log in
      </button>
     <h5> not have an account</h5> <Link to = "/signup"> sign up</Link> 
    </div>
  );
}
export default connect(mapStateToProps, { isLogged })(FormLogin);
