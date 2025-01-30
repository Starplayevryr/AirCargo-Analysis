import React from 'react';
import './AboutUs.css'; // Assuming your CSS is stored here
import Navbar from './Navbar';

const AboutUs = () => {
  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      
      <div className="about-us-background">
        <div className="container mt-5">
            <br/>
          <h1>About Us</h1>

          {/* Company Details Section */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">About Air Cargo</h5>
                  <p className="card-text">
                    Air Cargo is an aviation company that provides both passenger and freight air transportation services. In addition to offering air transportation, Air Cargo partners or forms alliances with other airlines to improve its reach. To enhance operational efficiency, customer experience, and profitability, the company focuses on:
                  </p>
                  <ul>
                    <li><strong>Regular Passengers:</strong> Identifying frequent customers to provide special offers.</li>
                    <li><strong>Busiest Routes:</strong> Analyzing which routes are the most popular, helping the company optimize aircraft scheduling.</li>
                    <li><strong>Ticket Sales:</strong> Monitoring ticket sales to gauge demand and make data-driven decisions regarding pricing, promotions, and service offerings.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <hr />
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer mt-5">
        <div className="container text-center">
          <p>&copy; 2025 Streamlining Cargo & Travel | All Rights Reserved</p>
          <p>
            <a href="/about" className="footer-link">About Us</a> | 
            <a href="/contact" className="footer-link"> Contact Us</a> |
            <a href="/privacy" className="footer-link"> Privacy Policy</a>
          </p>
          <div className="social-icons">
            <a href="https://facebook.com" className="social-icon">Facebook</a>
            <a href="https://twitter.com" className="social-icon">Twitter</a>
            <a href="https://instagram.com" className="social-icon">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
