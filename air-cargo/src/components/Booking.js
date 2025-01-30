import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar'; // Import Sidebar component
import Navbar from './Navbar'; // Import Navbar component
import Swal from 'sweetalert2'; // Import SweetAlert2


const BookingComponent = () => {
  const [bookings, setBookings] = useState([]);
  const [formData, setFormData] = useState({
    passenger_id: '',
    flight_id: '',
    route_id: '',
    seat_number: '',
    class: '',
    payment_cost: ''
  });
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility

  // Fetch all bookings
  const fetchBookings = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/tickets/all');
      setBookings(response.data.data);
    } catch (error) {
      console.error('Failed to fetch bookings', error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddBooking = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/tickets/addbooking', formData);
      Swal.fire('Success!', response.data.message, 'success');
      fetchBookings(); // Reload the bookings list
      setFormData({
        passenger_id: '',
        flight_id: '',
        route_id: '',
        seat_number: '',
        class: '',
        payment_cost: ''
      }); // Reset form data after successful submission
      setShowForm(false); // Hide the form after submission
    } catch (error) {
      console.error('Error details:', error.response ? error.response.data : error.message); // Log detailed error
      Swal.fire('Error!', 'Failed to add booking', 'error');
    }
  };
  
  // Update a booking
  const handleUpdateBooking = async (e) => {
    e.preventDefault();
    if (selectedBooking) {
      try {
        const response = await axios.put(`http://localhost:5002/api/bookings/${selectedBooking}`, formData);
        Swal.fire('Updated!', response.data.message, 'success');
        fetchBookings(); // Reload the bookings list
        setSelectedBooking(null); // Clear the selected booking
        setFormData({
          passenger_id: '',
          flight_id: '',
          route_id: '',
          seat_number: '',
          class: '',
          payment_cost: ''
        }); // Reset form data after successful update
        setShowForm(false); // Hide the form after update
      } catch (error) {
        Swal.fire('Error!', 'Failed to update booking', 'error');
        console.error('Failed to update booking', error);
      }
    }
  };

  // Delete a booking
  const handleDeleteBooking = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5002/api/bookings/${id}`);
      Swal.fire('Deleted!', response.data.message, 'success');
      fetchBookings(); // Reload the bookings list
    } catch (error) {
      Swal.fire('Error!', 'Failed to delete booking', 'error');
      console.error('Failed to delete booking', error);
    }
  };

  // Handle selecting a booking for editing
  const handleSelectBooking = (booking) => {
    setSelectedBooking(booking.id);
    setFormData({
      passenger_id: booking.passenger_id,
      flight_id: booking.flight_id,
      route_id: booking.route_id,
      seat_number: booking.seat_number,
      class: booking.class,
      payment_cost: booking.payment_cost
    });
    setShowForm(true); // Show the form when editing a booking
  };

  // Handle New Booking button
  const handleNewBooking = () => {
    setSelectedBooking(null);
    setFormData({
      passenger_id: '',
      flight_id: '',
      route_id: '',
      seat_number: '',
      class: '',
      payment_cost: ''
    });
    setShowForm(true); // Show the form for new booking
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 p-0">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="col-md-9 p-0">
          <Navbar /> {/* Navbar Component */}
          <div className="mt-5 pt-4"> {/* Increased margin-top and padding-top to ensure content is below navbar */}
            <h2>Booking Management</h2>

            {/* New Booking Button */}
            <button
              className="btn btn-success mb-3"
              onClick={handleNewBooking}
            >
              New Booking
            </button>

            {/* Add or Edit Booking Form (Hidden initially) */}
            {showForm && (
              <form onSubmit={selectedBooking ? handleUpdateBooking : handleAddBooking} className="mb-4">
                <div className="form-group">
                  <input
                    type="text"
                    name="passenger_id"
                    className="form-control"
                    placeholder="Passenger ID"
                    value={formData.passenger_id}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="flight_id"
                    className="form-control"
                    placeholder="Flight ID"
                    value={formData.flight_id}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="route_id"
                    className="form-control"
                    placeholder="Route ID"
                    value={formData.route_id}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="seat_number"
                    className="form-control"
                    placeholder="Seat Number"
                    value={formData.seat_number}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="class"
                    className="form-control"
                    placeholder="Class"
                    value={formData.class}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="payment_cost"
                    className="form-control"
                    placeholder="Payment Cost"
                    value={formData.payment_cost}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary custom-btn">
                  {selectedBooking ? 'Update Booking' : 'Add Booking'}
                </button>
              </form>
            )}

            {/* Bookings Table */}
            <h3>All Bookings</h3>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Passenger ID</th>
                  <th>Flight ID</th>
                  <th>Route ID</th>
                  <th>Seat Number</th>
                  <th>Class</th>
                  <th>Payment Cost</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td>{booking.passenger_id}</td>
                    <td>{booking.flight_id}</td>
                    <td>{booking.route_id}</td>
                    <td>{booking.seat_number}</td>
                    <td>{booking.class}</td>
                    <td>{booking.payment_cost}</td>
                    <td>
                      <button
                        className="btn btn-info btn-sm mr-2 custom-btn"
                        onClick={() => handleSelectBooking(booking)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm custom-btn"
                        onClick={() => handleDeleteBooking(booking.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingComponent;
