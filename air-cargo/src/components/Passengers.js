import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar'; // Import Sidebar component
import Navbar from './Navbar'; // Import Navbar component
import Swal from 'sweetalert2'; // Import SweetAlert2
import './Passengers.css';

const PassengerComponent = () => {
  const [passengers, setPassengers] = useState([]);
  const [formData, setFormData] = useState({
    passenger_id: '',
    customer_id: '',
    flight_id: '',
    seat_num: '',
    travel_date: ''
  });
  const [selectedPassenger, setSelectedPassenger] = useState(null);
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility

  // Fetch all passengers
  const fetchPassengers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/passengers/all');
      setPassengers(response.data.data);
    } catch (error) {
      console.error('Failed to fetch passengers', error);
    }
  };

  useEffect(() => {
    fetchPassengers();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add a new passenger
  const handleAddPassenger = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/passengers/add-passengers', formData);
      Swal.fire('Success!', response.data.message, 'success');
      fetchPassengers(); // Reload the passengers list
      setFormData({
        passenger_id: '',
        customer_id: '',
        flight_id: '',
        seat_num: '',
        travel_date: ''
      }); // Reset form data after successful submission
      setShowForm(false); // Hide the form after submission
    } catch (error) {
      Swal.fire('Error!', 'Failed to add passenger', 'error');
      console.error('Failed to add passenger', error);
    }
  };

  // Update a passenger
  const handleUpdatePassenger = async (e) => {
    e.preventDefault();
    if (selectedPassenger) {
      try {
        const response = await axios.put(`http://localhost:3000/api/passengers/${selectedPassenger}`, formData);
        Swal.fire('Updated!', response.data.message, 'success');
        fetchPassengers(); // Reload the passengers list
        setSelectedPassenger(null); // Clear the selected passenger
        setFormData({
          passenger_id: '',
          customer_id: '',
          flight_id: '',
          seat_num: '',
          travel_date: ''
        }); // Reset form data after successful update
        setShowForm(false); // Hide the form after update
      } catch (error) {
        Swal.fire('Error!', 'Failed to update passenger', 'error');
        console.error('Failed to update passenger', error);
      }
    }
  };

  // Delete a passenger
  const handleDeletePassenger = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/passengers/delete/${id}`);
      Swal.fire('Deleted!', response.data.message, 'success');
      fetchPassengers(); // Reload the passengers list
    } catch (error) {
      Swal.fire('Error!', 'Failed to delete passenger', 'error');
      console.error('Failed to delete passenger', error);
    }
  };

  // Handle selecting a passenger for editing
  const handleSelectPassenger = (passenger) => {
    setSelectedPassenger(passenger.id);
    setFormData({
      passenger_id: passenger.passenger_id,
      customer_id: passenger.customer_id,
      flight_id: passenger.flight_id,
      seat_num: passenger.seat_num,
      travel_date: passenger.travel_date
    });
    setShowForm(true); // Show the form when editing a passenger
  };

  // Handle New Passenger button
  const handleNewPassenger = () => {
    setSelectedPassenger(null);
    setFormData({
      passenger_id: '',
      customer_id: '',
      flight_id: '',
      seat_num: '',
      travel_date: ''
    });
    setShowForm(true); // Show the form for new passenger
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
            <h2>Passenger Management</h2>

            {/* New Passenger Button */}
            <button
              className="btn btn-success mb-3"
              onClick={handleNewPassenger}
            >
              New Passenger
            </button>

            {/* Add or Edit Passenger Form (Hidden initially) */}
            {showForm && (
              <form onSubmit={selectedPassenger ? handleUpdatePassenger : handleAddPassenger} className="mb-4">
                <div className="form-group">
                  <input
                    type="text"
                    name="customer_id"
                    className="form-control"
                    placeholder="Customer ID"
                    value={formData.customer_id}
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
                    name="seat_num"
                    className="form-control"
                    placeholder="Seat Number"
                    value={formData.seat_num}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="date"
                    name="travel_date"
                    className="form-control"
                    value={formData.travel_date}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary custom-btn">
                  {selectedPassenger ? 'Update Passenger' : 'Add Passenger'}
                </button>
              </form>
            )}

            {/* Passengers Table */}
            <h3>All Passengers</h3>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Customer ID</th>
                  <th>Flight ID</th>
                  <th>Seat Number</th>
                  <th>Travel Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {passengers.map((passenger) => (
                  <tr key={passenger.id}>
                    <td>{passenger.passenger_id}</td>
                    <td>{passenger.customer_id}</td>
                    <td>{passenger.flight_id}</td>
                    <td>{passenger.seat_num}</td>
                    <td>{passenger.travel_date}</td>
                    <td>
                      <button
                        className="btn btn-info btn-sm mr-2 custom-btn"
                        onClick={() => handleSelectPassenger(passenger)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm custom-btn"
                        onClick={() => handleDeletePassenger(passenger.id)}
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

export default PassengerComponent;
