import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar'; // Assuming Sidebar is already created
import Navbar from './Navbar'; // Assuming Navbar is already created
import Swal from 'sweetalert2';

const CustomerPage = () => {
  const [customers, setCustomers] = useState([]);
  const [formData, setFormData] = useState({
    customer_id: '',
    f_name: '',
    l_name: '',
    date_of_birth: '',
    gender: '',
    email: '',
    phone_number: '',
    address: '',
  });
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Fetch all customers
  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/customers/all');
      setCustomers(response.data.data);
    } catch (error) {
      console.error('Failed to fetch customers', error);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add or Update a customer
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedCustomer) {
        await axios.put(`http://localhost:3000/api/customers/update-customer/${selectedCustomer}`, formData);
        Swal.fire('Success!', 'Customer updated successfully', 'success');
      } else {
        await axios.post('http://localhost:3000/api/customers/add-customer', formData);
        Swal.fire('Success!', 'Customer added successfully', 'success');
      }
      fetchCustomers();
      resetForm();
      setShowForm(false);
    } catch (error) {
      Swal.fire('Error!', 'Failed to save customer', 'error');
      console.error(error);
    }
  };

  // Delete a customer
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/customers/delete-customer/${id}`);
      Swal.fire('Deleted!', 'Customer deleted successfully', 'success');
      fetchCustomers();
    } catch (error) {
      Swal.fire('Error!', 'Failed to delete customer', 'error');
      console.error(error);
    }
  };

  // Handle selecting a customer for editing
  const handleSelectCustomer = (customer) => {
    setSelectedCustomer(customer.customer_id);
    setFormData(customer);
    setShowForm(true);
  };

  // Handle New Customer button
  const handleNewCustomer = () => {
    resetForm();
    setShowForm(true);
  };

  const resetForm = () => {
    setFormData({
      customer_id: '',
      f_name: '',
      l_name: '',
      date_of_birth: '',
      gender: '',
      email: '',
      phone_number: '',
      address: '',
    });
    setSelectedCustomer(null);
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
            <h2>Customer Management</h2>
            <button className="btn btn-success mb-3" onClick={handleNewCustomer}>
              New Customer
            </button>
            {showForm && (
              <form onSubmit={handleSubmit} className="mb-4">
                <div className="form-group">
                  <input
                    type="text"
                    name="f_name"
                    className="form-control"
                    placeholder="First Name"
                    value={formData.f_name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="l_name"
                    className="form-control"
                    placeholder="Last Name"
                    value={formData.l_name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="date"
                    name="date_of_birth"
                    className="form-control"
                    placeholder="Date of Birth"
                    value={formData.date_of_birth}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="gender"
                    className="form-control"
                    placeholder="Gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="phone_number"
                    className="form-control"
                    placeholder="Phone Number"
                    value={formData.phone_number}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="address"
                    className="form-control"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  {selectedCustomer ? 'Update Customer' : 'Add Customer'}
                </button>
              </form>
            )}
            <h3>All Customers</h3>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Date of Birth</th>
                  <th>Gender</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.customer_id}>
                    <td>{customer.customer_id}</td>
                    <td>{customer.f_name}</td>
                    <td>{customer.l_name}</td>
                    <td>{new Date(customer.date_of_birth).toLocaleDateString()}</td>
                    <td>{customer.gender}</td>
                    <td>{customer.email}</td>
                    <td>{customer.phone_number}</td>
                    <td>{customer.address}</td>
                    <td>
                      <button
                        className="btn btn-info btn-sm mr-2"
                        onClick={() => handleSelectCustomer(customer)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(customer.customer_id)}
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

export default CustomerPage;
