import React, { useState, useEffect } from "react";
import { Input, Button } from "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { propTypes } from "react-bootstrap/esm/Image";
import { isLogged } from "../redux/actions";
import { useHistory } from "react-router-dom";
// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAd4nLyB4l3zvqJm0GQdauJI3GNR2bIWrY",
//   authDomain: "movies-78e6e.firebaseapp.com",
//   projectId: "movies-78e6e",
//   storageBucket: "movies-78e6e.appspot.com",
//   messagingSenderId: "802011977066",
//   appId: "1:802011977066:web:b5d8da5e959d54e2f44113",
//   measurementId: "G-SES33B1CEE",
// };
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

 

  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  // let auth = null;
  // if (firebase.apps.length === 0) {
  //   firebase.initializeApp(firebaseConfig);
  // }
  // auth = firebase.auth();
  // firebase.initializeApp(firebaseConfig);
  // const signInWithEmailAndPasswordHandler = (email, password) => {
  //   console.log(
  //     "🚀 ~ file: formLogin.jsx ~ line 27 ~ signInWithEmailAndPasswordHandler ~ email",
  //     email
  //   );
  //   console.log(firebase.apps);
  //   firebase
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .catch((error) => {
  //       // setError("Error signing in with password and email!");
  //       console.error("Error signing in with password and email", error);
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     });
  // };
  const isLogin =
    inputEmail === "yontand@gmail.com" && inputPassword === "123456";
  // signInWithEmailAndPasswordHandler("yontand@gmail.com", "123456");
  // alert("login")

  return (
    <div className = "divFormLogin">
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            onChange={(e) => setInputEmail(e.target.value)}
            type="email"
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
            onChange={(e) => setInputPassword(e.target.value)}
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
          props.isLogged(isLogin);
        }}
        // type="submit"
        className="btn btn-primary"
      >
        Submit
      </button>
    </div>
  );
}
export default connect(mapStateToProps, { isLogged })(FormLogin);
