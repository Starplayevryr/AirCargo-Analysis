import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css'; // Import custom CSS file for the sidebar
import { FaTachometerAlt, FaUser, FaPlane, FaRoute, FaBox, FaMapMarkedAlt, FaTicketAlt, FaUsers, FaClipboard, FaBell, FaCog, FaSignOutAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';  // Import SweetAlert2

const Sidebar = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Function to handle logout
  const handleLogout = () => {
    // Show SweetAlert confirmation before logging out
    Swal.fire({
      title: 'Are you sure?',
      text: "You will be logged out from your session!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout!',
    }).then((result) => {
      if (result.isConfirmed) {
        // Clear any authentication tokens, user info, etc. from localStorage or cookies
        localStorage.removeItem('authToken'); // Example, modify based on how you store tokens
        sessionStorage.removeItem('authToken'); // Example, modify based on how you store tokens

        // Navigate to the login page
        navigate('/login');
        
        // Show success alert after logout
        Swal.fire(
          'Logged out!',
          'You have been logged out successfully.',
          'success'
        );
      }
    });
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="sidebar bg-dark text-white p-3" style={{ width: '250px' }}>
        <h3 className="text-center sidebar-title mb-4">Admin Panel</h3>
        <ul className="list-unstyled">
          <li>
            <Link to="/dashboard" className="sidebar-link text-white">
              <FaTachometerAlt className="sidebar-icon" /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/cust" className="sidebar-link text-white">
              <FaUsers className="sidebar-icon" /> Customers
            </Link>
          </li>
          <li>
            <Link to="/passengers" className="sidebar-link text-white">
              <FaUsers className="sidebar-icon" /> Passengers
            </Link>
          </li>
          <li>
            <Link to="/cargo" className="sidebar-link text-white">
              <FaBox className="sidebar-icon" /> Cargo
            </Link>
          </li>
          <li>
            <Link to="/flights" className="sidebar-link text-white">
              <FaPlane className="sidebar-icon" /> Flights
            </Link>
          </li>
          <li>
            <Link to="/route" className="sidebar-link text-white">
              <FaRoute className="sidebar-icon" /> Routes
            </Link>
          </li>
          <li>
            <Link to="/flights" className="sidebar-link text-white">
              <FaPlane className="sidebar-icon" /> Aircraft
            </Link>
          </li>
          <li>
            <Link to="/airport" className="sidebar-link text-white">
              <FaMapMarkedAlt className="sidebar-icon" /> Airports
            </Link>
          </li>
          <li>
            <Link to="/booking" className="sidebar-link text-white">
              <FaTicketAlt className="sidebar-icon" /> Tickets
            </Link>
          </li>
          <li>
            <Link to="/employees" className="sidebar-link text-white">
              <FaUsers className="sidebar-icon" /> Employees
            </Link>
          </li>
          
          <li>
            <Link to="/logs" className="sidebar-link text-white">
              <FaCog className="sidebar-icon" /> AuditLogs
            </Link>
          </li>
          {/* Logout */}
          <li>
            <button className="sidebar-link text-white" onClick={handleLogout}>
              <FaSignOutAlt className="sidebar-icon" /> Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Main content area */}
      <div className="content-area flex-grow-1 p-3">
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default Sidebar;
