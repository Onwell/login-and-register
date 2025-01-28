import React from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // For simplicity, simulate a successful registration
    alert('Registration successful!');
    navigate('/');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px'}} className="container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Full Name:</label>
          <input type="text" required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" required />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <a href="/">Login here</a>.
      </p>
    </div>
  );
}

export default Register;
