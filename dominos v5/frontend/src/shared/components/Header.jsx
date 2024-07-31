import React, { useState } from 'react';
import Logo from '../widgets/Logo';
import { Menu } from 'lucide-react';
import { OAuth } from '../services/oauth.js';
import './styles/header.css';

export const Header = ({ setShowLogin }) => {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    const usercred = await OAuth();
    setUser(usercred.user);
  };

  return (
    <div className="header">
      <div className="left-side">
        <div className="logo">
          <Menu size={28} color="#ffffff" />
          <Logo />
        </div>
      </div>
      <div className="right-side">
        {!user ? (
          <button className="signup-btn" onClick={handleLogin}>Sign Up</button>
        ) : (
          <div className="user-info">
            <img src={user.photoURL} alt={user.displayName} className="user-avatar" />
            <span className="user-name">{user.displayName}</span>
          </div>
        )}
      </div>
    </div>
  );
};
