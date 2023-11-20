import React from "react";
//import Login from "./Components/Login"; 
import "../Styles/login.css"

const Login = () => {

    return (
        <div className="loginContainer">
            <h3>LOGIN</h3>
          <div>
            <input type="email" name="email" placeholder="email" />
          </div>
          <div> 
            <input type="password" name="password" placeholder="password" />
          </div>
          <button>Login</button>
          <button className = 'link'>want to register?</button>
          </div>
    )

}

export default Login