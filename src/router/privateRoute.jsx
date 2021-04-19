import React from "react";

import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const loginLocalStorage = window.localStorage.getItem("login");
console.log("loginLocalStorage",loginLocalStorage);

const PrivateRoute = ({path,component:Component,login,...rest}) => {
    console.log("PrivateRoute",login);
    return (
<Route path={path} {...rest} render={props =>{
    if (login === true){
        return <Component {...props} {...rest} />
    }
return <Redirect to ="/formLogin"/>
}}/>
    );
}
const mapStateToProps = (state) => {
    return { login: state.clickLogin.login };
  };
  export default connect(mapStateToProps, )(PrivateRoute);
