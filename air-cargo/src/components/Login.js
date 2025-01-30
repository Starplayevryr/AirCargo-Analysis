import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';  // Import SweetAlert2
import './Login.css';  // Import the updated styles
import Navbar from './Navbar';
import Dashboard from './Dashboard';
const Login = () => {
  const [admin_id, setAdminId] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
      admin_id,
      username,
      password,
    };

    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.status === 200) {
        // Show success message using SweetAlert2
        Swal.fire({
          title: 'Login Successful!',
          text: data.message,
          icon: 'success',
          confirmButtonText: 'OK',
        });

        // Redirect after successful login
        navigate('/dashboard');
      } else {
        // Show error message using SweetAlert2
        Swal.fire({
          title: 'Login Failed!',
          text: data.error,
          icon: 'error',
          confirmButtonText: 'Try Again',
        });
      }
    } catch (error) {
      console.error('Error:', error);

      // Show error message if there's a network issue
      Swal.fire({
        title: 'Login Failed!',
        text: 'Network error. Please try again later.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <div
      className="container mt-5 login-container"
     
    >
         <Navbar /> {/* Include the Navbar component */}
      <div className="card shadow-lg">
        <div className="card-body">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="admin_id" className="form-label">Admin ID</label>
              <input
                type="text"
                className="form-control"
                id="admin_id"
                value={admin_id}
                onChange={(e) => setAdminId(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
