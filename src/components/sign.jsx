import React, { useState } from 'react';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Implement sign-up logic here
    console.log('Signing up...', username, email, password);
  };

  return (
    <div id="sign">
    <div id="fields">
    <h3>Sign Up</h3>
        <div className="inp-grp">
            <label for="name">User ID</label>
            <input type="text" id="name"/>
        </div>
        <div className="inp-grp">
            <label for="email">Email</label>
            <input type="email" id="email"/>
        </div>
        <div className="inp-grp">
            <label for="password">Password</label>
            <input type="password" id="password"/>
        </div>
        <div className="inp-grp">
            <button>Sign Up</button>
        </div>
    </div>
</div>
  );
};

export default SignUpPage;
