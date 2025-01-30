import React from 'react';
import './Home.css';  // Assuming your CSS is stored here
import Navbar from './Navbar';

const HomePage = () => {
  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}

      <div className="home-background">
        <div className="container mt-5">
          <h1>Greetings! Streamlining Your Cargo and Travel Needs</h1>

          {/* First Row of Cards */}
          <div className="row">
            {/* First Card - Image Only */}
            <div className="col-md-6 col-sm-12">
              <div className="card">
                <img src="/images/cargo.webp" alt="Image 1" className="card-img-top" />
              </div>
            </div>

            {/* Second Card - Text Only */}
            <div className="col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
              <div className="card border-0">
                <div className="card-body text-center">
                  <h5 className="card-title">Air Cargo & Passenger Solutions</h5>
                  <p className="card-text">
                    Our platform offers efficient air cargo services and passenger management, combining advanced logistics, real-time tracking, and seamless delivery across global routes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row of Cards */}
          <div className="row mt-4">
            {/* First Card - Text Only */}
            <div className="col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
              <div className="card border-0"> {/* Removed card background */}
                <div className="card-body text-center">
                  <h5 className="card-title">Global Reach</h5>
                  <p className="card-text">
                    Our air cargo services and passenger routes extend to every corner of the globe, ensuring fast, reliable, and comfortable travel and delivery.
                  </p>
                </div>
              </div>
            </div>

            {/* Second Card - Image Only */}
            <div className="col-md-6 col-sm-12">
              <div className="card">
                <img src="/images/img4.webp" alt="Image 4" className="card-img-top" />
              </div>
            </div>
          </div>

          {/* HR Line and Video Section */}
          <div className="video-section mt-5">
            <hr />
            <div className="video-container">
              <video controls className="custom-video">
                <source src="/videos/AirCargoandairlines (1).mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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

export default HomePage;
