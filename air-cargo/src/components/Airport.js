import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar'; // Assuming Sidebar is already created
import Navbar from './Navbar'; // Assuming Navbar is already created
import Swal from 'sweetalert2';
// Custom CSS for styling

const AirportPage = () => {
  const [airports, setAirports] = useState([]);
  const [formData, setFormData] = useState({
    airport_id: '',
    airport_name: '',
    city: '',
    country: '',
  });
  const [selectedAirport, setSelectedAirport] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Fetch all airports
  const fetchAirports = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/airport/all');
      setAirports(response.data.data);
    } catch (error) {
      console.error('Failed to fetch airports', error);
    }
  };

  useEffect(() => {
    fetchAirports();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add or Update an airport
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedAirport) {
        await axios.put(`http://localhost:3000/api/${selectedAirport}`, formData);
        Swal.fire('Success!', 'Airport updated successfully', 'success');
      } else {
        await axios.post('/api/airports/add-airport', formData);
        Swal.fire('Success!', 'Airport added successfully', 'success');
      }
      fetchAirports();
      resetForm();
      setShowForm(false);
    } catch (error) {
      Swal.fire('Error!', 'Failed to save airport', 'error');
      console.error(error);
    }
  };

  // Delete an airport
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/airports/${id}`);
      Swal.fire('Deleted!', 'Airport deleted successfully', 'success');
      fetchAirports();
    } catch (error) {
      Swal.fire('Error!', 'Failed to delete airport', 'error');
      console.error(error);
    }
  };

  // Handle selecting an airport for editing
  const handleSelectAirport = (airport) => {
    setSelectedAirport(airport.airport_id);
    setFormData(airport);
    setShowForm(true);
  };

  // Handle New Airport button
  const handleNewAirport = () => {
    resetForm();
    setShowForm(true);
  };

  const resetForm = () => {
    setFormData({ airport_id: '', airport_name: '', city: '', country: '' });
    setSelectedAirport(null);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 p-0">
          <Sidebar />
        </div>
        <div className="col-md-9 p-0">
          <Navbar />
          <div className="mt-5 pt-4">
            <h2>Airport Management</h2>
            <button className="btn btn-success mb-3" onClick={handleNewAirport}>
              New Airport
            </button>
            {showForm && (
              <form onSubmit={handleSubmit} className="mb-4">
                <div className="form-group">
                  <input
                    type="text"
                    name="airport_id"
                    className="form-control"
                    placeholder="Airport ID"
                    value={formData.airport_id}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="airport_name"
                    className="form-control"
                    placeholder="Airport Name"
                    value={formData.airport_name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="city"
                    className="form-control"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="country"
                    className="form-control"
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  {selectedAirport ? 'Update Airport' : 'Add Airport'}
                </button>
              </form>
            )}
            <h3>All Airports</h3>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>City</th>
                  <th>Country</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {airports.map((airport) => (
                  <tr key={airport.airport_id}>
                    <td>{airport.airport_id}</td>
                    <td>{airport.airport_name}</td>
                    <td>{airport.city}</td>
                    <td>{airport.country}</td>
                    <td>
                      <button
                        className="btn btn-info btn-sm mr-2"
                        onClick={() => handleSelectAirport(airport)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(airport.airport_id)}
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

export default AirportPage;
