import React from 'react'
import "../Styles/register.css"

const Resgistration = () => {
  return (
    <div className="registerContainer">
            <h3>Registration</h3>
          <div>
            <input type="email" name="email" placeholder="email" />
          </div>
          <div> 
            <input type="password" name="password" placeholder="password" />
          </div>
          <button>Register</button>
          <button className = 'link'>want to login?</button>
          </div>
  )
}

export default Resgistration