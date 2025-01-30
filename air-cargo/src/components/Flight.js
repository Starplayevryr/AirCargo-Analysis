import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar'; // Import Sidebar component
import Navbar from './Navbar'; // Import Navbar component
import Swal from 'sweetalert2'; // Import SweetAlert2

const FlightComponent = () => {
  const [flights, setFlights] = useState([]);
  const [formData, setFormData] = useState({
    capacity: '',
    brand: ''
  });
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility

  // Fetch all flights
  const fetchFlights = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/aircraft/all');
      setFlights(response.data.data);
    } catch (error) {
      console.error('Failed to fetch flights', error);
    }
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add a new flight
  const handleAddFlight = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/aircraft/add', formData);
      Swal.fire('Success!', response.data.message, 'success');
      fetchFlights(); // Reload the flights list
      setFormData({
        capacity: '',
        brand: ''
      }); // Reset form data after successful submission
      setShowForm(false); // Hide the form after submission
    } catch (error) {
      Swal.fire('Error!', 'Failed to add flight', 'error');
      console.error('Failed to add flight', error);
    }
  };

  // Update a flight
  const handleUpdateFlight = async (e) => {
    e.preventDefault();
    if (selectedFlight) {
      try {
        const response = await axios.put(`http://localhost:3000/api/aircraft/${selectedFlight}`, formData);
        Swal.fire('Updated!', response.data.message, 'success');
        fetchFlights(); // Reload the flights list
        setSelectedFlight(null); // Clear the selected flight
        setFormData({
          capacity: '',
          brand: ''
        }); // Reset form data after successful update
        setShowForm(false); // Hide the form after update
      } catch (error) {
        Swal.fire('Error!', 'Failed to update flight', 'error');
        console.error('Failed to update flight', error);
      }
    }
  };

  // Delete a flight
  const handleDeleteFlight = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/aircraft/${id}`);
      Swal.fire('Deleted!', response.data.message, 'success');
      fetchFlights(); // Reload the flights list
    } catch (error) {
      Swal.fire('Error!', 'Failed to delete flight', 'error');
      console.error('Failed to delete flight', error);
    }
  };

  // Handle selecting a flight for editing
  const handleSelectFlight = (flight) => {
    setSelectedFlight(flight.aircraft_id);
    setFormData({
      capacity: flight.capacity,
      brand: flight.brand
    });
    setShowForm(true); // Show the form when editing a flight
  };

  // Handle New Flight button
  const handleNewFlight = () => {
    setSelectedFlight(null);
    setFormData({
      capacity: '',
      brand: ''
    });
    setShowForm(true); // Show the form for new flight
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
            <h2>Flight Management</h2>

            {/* New Flight Button */}
            <button
              className="btn btn-success mb-3"
              onClick={handleNewFlight}
            >
              New Flight
            </button>

            {/* Add or Edit Flight Form (Hidden initially) */}
            {showForm && (
              <form onSubmit={selectedFlight ? handleUpdateFlight : handleAddFlight} className="mb-4">
                <div className="form-group">
                  <input
                    type="text"
                    name="capacity"
                    className="form-control"
                    placeholder="Capacity"
                    value={formData.capacity}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="brand"
                    className="form-control"
                    placeholder="Brand"
                    value={formData.brand}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary custom-btn">
                  {selectedFlight ? 'Update Flight' : 'Add Flight'}
                </button>
              </form>
            )}

            {/* Flights Table */}
            <h3>All Flights</h3>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Capacity</th>
                  <th>Brand</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {flights.map((flight) => (
                  <tr key={flight.aircraft_id}>
                    <td>{flight.capacity}</td>
                    <td>{flight.brand}</td>
                    <td>
                      <button
                        className="btn btn-info btn-sm mr-2 custom-btn"
                        onClick={() => handleSelectFlight(flight)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm custom-btn"
                        onClick={() => handleDeleteFlight(flight.aircraft_id)}
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

export default FlightComponent;
