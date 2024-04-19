import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

  async function handleLogin (e) {
      e.preventDefault();
      try {
          const response = await axios.post('http://localhost:3001/account/login', { email, password} );
          const userData = response.data;
          localStorage.setItem('user', JSON.stringify({ userData }));
          document.querySelectorAll('h2')[0].innerHTML="Logged In Successfully!!";
          setEmail('');
          setPassword('');
          setTimeout(() => {
            navigate('/account');
        }, 1500);
      } catch (error) {
          console.error('Login error: ', error.response.data.message);
          setMessage(error.response.data.message);
      };
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