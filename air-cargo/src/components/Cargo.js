import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Swal from 'sweetalert2';
import './Cargo.css';

const CargoComponent = () => {
  const [cargos, setCargos] = useState([]);
  const [formData, setFormData] = useState({
    weight: '',
    destination: '',
    originAirportID: '',
    destinationAirportID: '',
    trackingNumber: '',
    cargoType: '',
    arrivalDate: '',
    shippingCost: '',
    departureDate: '',
    estimatedDeliveryDate: ''
  });
  const [selectedCargo, setSelectedCargo] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const fetchCargos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/cargo/all');
      setCargos(response.data);
    } catch (error) {
      console.error('Failed to fetch cargos', error);
    }
  };

  useEffect(() => {
    fetchCargos();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddCargo = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/cargos/addcargo', formData);
      Swal.fire('Success!', response.data.message, 'success');
      fetchCargos();
      setFormData({
        weight: '',
        destination: '',
        originAirportID: '',
        destinationAirportID: '',
        trackingNumber: '',
        cargoType: '',
        arrivalDate: '',
        shippingCost: '',
        departureDate: '',
        estimatedDeliveryDate: ''
      });
      setShowForm(false);
    } catch (error) {
      Swal.fire('Error!', 'Failed to add cargo', 'error');
    }
  };

  const handleUpdateCargo = async (e) => {
    e.preventDefault();
    if (selectedCargo) {
      try {
        const response = await axios.put(`http://localhost:3000/api/cargos/${selectedCargo}`, formData);
        Swal.fire('Updated!', response.data.message, 'success');
        fetchCargos();
        setSelectedCargo(null);
        setFormData({
          weight: '',
          destination: '',
          originAirportID: '',
          destinationAirportID: '',
          trackingNumber: '',
          cargoType: '',
          arrivalDate: '',
          shippingCost: '',
          departureDate: '',
          estimatedDeliveryDate: ''
        });
        setShowForm(false);
      } catch (error) {
        Swal.fire('Error!', 'Failed to update cargo', 'error');
      }
    }
  };

  const handleDeleteCargo = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/cargos/${id}`);
      Swal.fire('Deleted!', response.data.message, 'success');
      fetchCargos();
    } catch (error) {
      Swal.fire('Error!', 'Failed to delete cargo', 'error');
    }
  };

  const handleSelectCargo = (cargo) => {
    setSelectedCargo(cargo.cargoID);
    setFormData({ ...cargo });
    setShowForm(true);
  };

  const handleNewCargo = () => {
    setSelectedCargo(null);
    setFormData({
      weight: '',
      destination: '',
      originAirportID: '',
      destinationAirportID: '',
      trackingNumber: '',
      cargoType: '',
      arrivalDate: '',
      shippingCost: '',
      departureDate: '',
      estimatedDeliveryDate: ''
    });
    setShowForm(true);
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
            <h2>Cargo Management</h2>
            <button className="btn btn-success mb-3" onClick={handleNewCargo}>
              New Cargo
            </button>
            {showForm && (
              <form onSubmit={selectedCargo ? handleUpdateCargo : handleAddCargo} className="mb-4">
                <div className="form-group">
                  <input type="text" name="weight" className="form-control" placeholder="Weight" value={formData.weight} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                  <input type="text" name="destination" className="form-control" placeholder="Destination" value={formData.destination} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                  <input type="text" name="originAirportID" className="form-control" placeholder="Origin Airport ID" value={formData.originAirportID} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                  <input type="text" name="destinationAirportID" className="form-control" placeholder="Destination Airport ID" value={formData.destinationAirportID} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                  <input type="text" name="trackingNumber" className="form-control" placeholder="Tracking Number" value={formData.trackingNumber} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                  <input type="text" name="cargoType" className="form-control" placeholder="Cargo Type" value={formData.cargoType} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                  <input type="date" name="arrivalDate" className="form-control" value={formData.arrivalDate} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                  <input type="text" name="shippingCost" className="form-control" placeholder="Shipping Cost" value={formData.shippingCost} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                  <input type="date" name="departureDate" className="form-control" value={formData.departureDate} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                  <input type="date" name="estimatedDeliveryDate" className="form-control" value={formData.estimatedDeliveryDate} onChange={handleInputChange} required />
                </div>
                <button type="submit" className="btn btn-primary">
                  {selectedCargo ? 'Update Cargo' : 'Add Cargo'}
                </button>
              </form>
            )}
            <h3>All Cargos</h3>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Tracking Number</th>
                  <th>Weight</th>
                  <th>Destination</th>
                  <th>Cargo Type</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cargos.map((cargo) => (
                  <tr key={cargo.cargoID}>
                    <td>{cargo.trackingNumber}</td>
                    <td>{cargo.weight}</td>
                    <td>{cargo.destination}</td>
                    <td>{cargo.cargoType}</td>
                    <td>
                      <button className="btn btn-info btn-sm" onClick={() => handleSelectCargo(cargo)}>
                        Edit
                      </button>
                      <button className="btn btn-danger btn-sm" onClick={() => handleDeleteCargo(cargo.cargoID)}>
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

export default CargoComponent;
