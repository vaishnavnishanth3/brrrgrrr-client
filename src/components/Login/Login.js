import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
          const user = JSON.parse(localStorage.getItem('user'));
          if (user) {
              setLoggedIn(true)
          };
        }, []
    );

  async function handleLogin (e) {
      e.preventDefault();
      try {
          const response = await axios.post('http://localhost:3001/account/login', { email, password} );
          const userData = response.data;
          localStorage.setItem('user', JSON.stringify({ userData }));
          setLoggedIn(true);
      } catch (error) {
          console.error('Login error: ', error.response.data.message);
          setMessage(error.response.data.message);
      };
  };

  if (loggedIn) {
    navigate('/account');
    return null;
  };

  return (
      <div className="account">
          <div className="column1"></div>
              <div className="column2">
                  <div className="login-component">
                      <h2> {message || 'Log In to save your crazy food crush?!!'} </h2>
                        <form onSubmit={handleLogin}>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button type="submit"> Submit </button>
                        </form>
                      <h4>
                          Don't have an account?{' '}
                          <Link to="/account/signup">
                            <h2> Sign Up </h2>
                          </Link>
                      </h4>
                  </div>
            </div>
      </div>
  );
};

export default Login;