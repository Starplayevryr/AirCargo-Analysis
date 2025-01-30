import React from 'react';
import { Link } from 'react-router-dom';
import './DNavbar.css'; // Custom CSS for styling
import { FaPlane, FaUserCircle, FaBell } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="dnavbar">
      <div className="dnavbar-brand">
        <Link to="/" className="dnavbar-logo">
          <FaPlane className="dnavbar-icon" /> 𝙰𝚒𝚛𝙲𝚊𝚛𝚐𝚘 𝙲𝚘𝚗𝚗𝚎𝚌𝚝
        </Link>
      </div>
      <ul className="dnavbar-menu">
        <li>
          <Link to="/notifications" className="dnavbar-link">
            <FaBell /> Notifications
          </Link>
        </li>
        <li>
          <Link to="/profile" className="dnavbar-link">
            <FaUserCircle /> Admin Profile
          </Link>
        </li>
        <li>
          <Link to="/logout" className="dnavbar-link">
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
