import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login, selectIsLoggedIn } from '../../features/authSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import "./form.css"

function Form() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const connexionError = document.getElementById("connexion-error");
  
    const isLoggedIn = useSelector(selectIsLoggedIn);
  
    const handleFormSubmit = async (e) => {
      e.preventDefault();
      const action = await dispatch(login({ username, password, rememberMe }));
  
      if (action.payload && action.payload.status === 200) {
        connexionError.classList.add('dp-none');
  
        if (rememberMe) {
          dispatch(rememberToken(action.payload.token));
        } else {
          localStorage.removeItem('jwtToken');
        }

      } else {
        connexionError.classList.remove('dp-none');
        connexionError.classList.add('dp-block');
        console.log('La connexion a échoué');
      }
    };

    useEffect(() => {
      if (isLoggedIn) {
        navigate('/user');
      }
    }, [isLoggedIn, navigate]);

  return (
    <section className="sign-in-content">
      <FontAwesomeIcon className="sign-in-icon" icon={faUserCircle} />
      <h1>Sign In</h1>
      <form onSubmit={handleFormSubmit}>
        <div id="connexion-error" className="dp-none id-error">
          <p>Indentifiants incorrects.</p>
        </div>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label><input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label><input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}/><label htmlFor="remember-me">Remember me</label>
        </div>
        <button type="submit" className="sign-in-button">Sign In</button>
      </form>
    </section>
  )
}

export default Form;