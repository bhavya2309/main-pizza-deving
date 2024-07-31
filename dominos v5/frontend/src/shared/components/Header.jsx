/* eslint-disable react/prop-types */
import Logo from '../widgets/Logo'
import {Menu} from 'lucide-react'
import './styles/header.css'

export const Header = ({setShowLogin}) => {
  return (
    <>
      <div className="header">
        <div className="left-side">
          <div className="logo">
            <Menu size={28} color="#ffffff" />
            <Logo />
          </div>
        </div>
        <div className="right-side">
        
          <button className="signup-btn" onClick={() => setShowLogin(true)}>Sign Up</button>
        </div>
            
      </div>
    </>
  )
}
