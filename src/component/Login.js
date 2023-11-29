
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';


 
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
 
  const handleLogin = () => {
    // Check if the username is 'shubham' and the password is '123'
    if (username === 'manisha' && password === '123') {
      // Redirect to the admin panel
      console.log('Login successful for admin');
    
    } else {
      // Handle unsuccessful login
      console.log('Invalid credentials');
    }
  };
 
  return (
    <div className="login-container">
      <h2>Login</h2>
      <label>Username:</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
     
      <Link to="/Home">
      <button onClick={handleLogin}>Login</button>
      </Link>
    </div>
  );
};
 
export default Login;
 