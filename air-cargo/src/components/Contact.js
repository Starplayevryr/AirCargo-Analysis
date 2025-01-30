import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';  // Import SweetAlert2
import './Contact.css';  // Import your contact page styles
import Navbar from './Navbar';  // Assuming Navbar component is reused

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    const contactData = {
      fullName,
      email,
      message,
    };

    try {
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      const data = await response.json();

      if (response.status === 200) {
        // Show success message using SweetAlert2
        Swal.fire({
          title: 'Message Sent!',
          text: data.message,
          icon: 'success',
          confirmButtonText: 'OK',
        });

        // Redirect after message is sent
        navigate('/');
      } else {
        // Show error message using SweetAlert2
        Swal.fire({
          title: 'Message Failed!',
          text: data.error,
          icon: 'error',
          confirmButtonText: 'Try Again',
        });
      }
    } catch (error) {
      console.error('Error:', error);

      // Show error message if there's a network issue
      Swal.fire({
        title: 'Message Failed!',
        text: 'Network error. Please try again later.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <div className="container mt-5 contact-container">
      <Navbar /> {/* Include the Navbar component */}
      <div className="card shadow-lg">
        <div className="card-body">
          <h2>Contact Us</h2>
          <p>We are here to assist you. Please feel free to reach out with any inquiries or feedback.</p>
          <form onSubmit={handleContactSubmit}>
            <div className="mb-3">
              <label htmlFor="full_name" className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="full_name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
