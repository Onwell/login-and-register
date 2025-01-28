import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';  // Make sure the path is correct

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', true);
    navigate('/dashboard');
  };

  return (
    <div className="container">
      {/* Logo at the top */}
      <img src={logo} alt="Logo" className="logo" />

      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/register">Register here</a>.
      </p>
    </div>
  );
}

export default Login;
