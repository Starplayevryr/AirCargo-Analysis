import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar'; // Adjust path based on your folder structure
import Home from './components/Home';
import './components/Navbar.css'; // Adjust path based on your folder structure
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Register from './components/Register'; // Register component
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Passengers from './components/Passengers';
import Contact from './components/Contact';
import CargoComponent from './components/Cargo';
import EmployeeComponent from './components/Employee';
import FlightComponent from './components/Flight';
import RouteMap from './components/Route';
import AirportPage from './components/Airport';
import BookingComponent from './components/Booking';
import CustomerPage from './components/Customer';
import AboutUs from './components/About';
import AuditLogPage from './components/AuditLogs';
// Example of Home and Contact pages




const App = () => {
  return (
    <Router>
      <div>
       

        <Routes>
          {/* Define routes for Home and Contact */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/passengers" element={<Passengers/>}/>
          <Route path="/cust" element={<CustomerPage/>}/>
          <Route path = "/cargo" element={<CargoComponent/>}/>
          <Route path = "/employees" element={<EmployeeComponent/>}/>
          <Route path = "/flights" element ={<FlightComponent/>}/>
          <Route path = "/route" element ={<RouteMap/>}/>
          <Route path = "/airport" element ={<AirportPage/>}/>
          <Route path = "/booking" element ={<BookingComponent/>}/>
          <Route path = "/logs" element ={<AuditLogPage/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
