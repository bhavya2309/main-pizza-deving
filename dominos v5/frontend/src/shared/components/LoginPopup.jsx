/* eslint-disable react/prop-types */
import { useState } from 'react'
import './styles/loginpopup.css'
import { CircleX } from 'lucide-react'
const LoginPopup = ({setShowLogin}) => {
  const [currState, setCurrState] = useState("Login")
  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <CircleX className='pointer' onClick={() => setShowLogin(false)}/>
        </div>
        <div className="login-popup-inputs">
          {
            currState === "Login" ? <></> : 
            <input type="text" placeholder="Username" required/>
          }
          <input type="email" placeholder="Email" required/>
          <input type="password" placeholder="Password" required/>
        </div>
        <button>{currState === "Sign Up" ? "Create account": "Login" }</button>
        <div className="login-popup-condition">
          <input type="checkbox" required/>
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {
          currState === "Login" ? <p>Create a new account ? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>:
          <p>Already have an account ? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        }
        
      </form>
    </div>
  )
}

export default LoginPopup
