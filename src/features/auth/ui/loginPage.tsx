import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../model/authSlice';
import { useNavigate } from 'react-router-dom';
import './loginPage.scss'

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      dispatch(login({ username, password }));
      navigate('/');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="container">
      <div className='login-container'>
        <h2>Log in</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>

  );
};

export default LoginPage;
