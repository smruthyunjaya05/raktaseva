// components/LoginPage.jsx
import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in...', username, password);
  };

  const handleForgotPassword = () => {
    const userEmail = prompt('Please enter your registered email address:');
    
    // Assuming you have a function to send a verification email, you can call it here.
    // For demonstration purposes, let's just log the email.
    console.log('Verification email sent to:', userEmail);

    alert('Verification email sent successfully to your registered email.');
  };

  return (
    <div id="login">
      <div id="fields">
        <h3>Login</h3>
        <div className="inp-grp">
          <label htmlFor="name">User ID</label>
          <input type="text" id="name" />
        </div>
        <div className="inp-grp">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="inp-grp">
          <button onClick={handleForgotPassword} className="forgot-password">
            Forgot Password
          </button>
        </div>
        <div className="inp-grp">
          <button onClick={handleLogin}>Login</button>
        </div>
       
       
      </div>
    </div>
  );
};

export default LoginPage;
