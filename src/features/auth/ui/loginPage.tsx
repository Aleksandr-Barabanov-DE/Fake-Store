import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../model/authSlice';
import { useNavigate } from 'react-router-dom';
import './loginPage.scss';
import Swal from 'sweetalert2';

const LoginPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (username && password) {
      dispatch(login({ username, password }));
  
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: activeTab === 'login' ? 'Logged in successfully' : 'Registered successfully',
        showConfirmButton: false,
        timer: 1500,
      });
  
      setTimeout(() => {
        navigate('/');
      }, 1500); 
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all fields',
      });
    }
  };

  return (
    <div className="loginPageContainer">
      <div className="authContainer">
        <div className="tabs">
          <button
            className={activeTab === 'login' ? 'active' : ''}
            onClick={() => setActiveTab('login')}
          >
            Log in
          </button>
          <button
            className={activeTab === 'register' ? 'active' : ''}
            onClick={() => setActiveTab('register')}
          >
            Register
          </button>
        </div>

        {activeTab === 'login' ? (
          <div className="form">
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
            <button onClick={handleSubmit}>Login</button>
          </div>
        ) : (
          <div className="form">
            <h2>Register</h2>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Create Username"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create Password"
            />
            <button onClick={handleSubmit}>Register</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;