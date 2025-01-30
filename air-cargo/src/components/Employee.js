import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar'; // Import Sidebar component
import Navbar from './Navbar'; // Import Navbar component
import Swal from 'sweetalert2'; // Import SweetAlert2

const EmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);
    const [formData, setFormData] = useState({
      f_name: '',
      l_name: '',
      job_title: '',
      aircraft_id: ''
    });
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [showForm, setShowForm] = useState(false);
  
    // Fetch all employees
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/employee/all');
        setEmployees(response.data.data);
      } catch (error) {
        console.error('Failed to fetch employees', error);
      }
    };
  
    useEffect(() => {
      fetchEmployees();
    }, []);
  
    // Handle form input changes
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    // Add a new employee
    const handleAddEmployee = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:3000/api/employee/add-employee', formData);
        Swal.fire('Success!', response.data.message, 'success');
        fetchEmployees(); // Reload the employees list
        setFormData({
          f_name: '',
          l_name: '',
          job_title: '',
          aircraft_id: ''
        }); // Reset form data after successful submission
        setShowForm(false); // Hide the form after submission
      } catch (error) {
        Swal.fire('Error!', 'Failed to add employee', 'error');
        console.error('Failed to add employee', error);
      }
    };
  
    // Update an existing employee
    const handleUpdateEmployee = async (e) => {
      e.preventDefault();
      if (selectedEmployee) {
        try {
          const response = await axios.put(`http://localhost:3000/api/employee/${selectedEmployee}`, formData);
          Swal.fire('Updated!', response.data.message, 'success');
          fetchEmployees(); // Reload the employees list
          setSelectedEmployee(null); // Clear the selected employee
          setFormData({
            f_name: '',
            l_name: '',
            job_title: '',
            aircraft_id: ''
          }); // Reset form data after successful update
          setShowForm(false); // Hide the form after update
        } catch (error) {
          Swal.fire('Error!', 'Failed to update employee', 'error');
          console.error('Failed to update employee', error);
        }
      }
    };
  
    // Delete an employee
    const handleDeleteEmployee = async (id) => {
      try {
        const response = await axios.delete(`http://localhost:3000/api/employee/delete/${id}`);
        Swal.fire('Deleted!', response.data.message, 'success');
        fetchEmployees(); // Reload the employees list
      } catch (error) {
        Swal.fire('Error!', 'Failed to delete employee', 'error');
        console.error('Failed to delete employee', error);
      }
    };
  
    // Handle selecting an employee for editing
    const handleSelectEmployee = (employee) => {
      setSelectedEmployee(employee.employee_id); // Store the employee ID for updating
      setFormData({
        f_name: employee.f_name,
        l_name: employee.l_name,
        job_title: employee.job_title,
        aircraft_id: employee.aircraft_id
      });
      setShowForm(true); // Show the form for editing
    };
  
    // Handle New Employee button
    const handleNewEmployee = () => {
      setSelectedEmployee(null); // Clear the selected employee
      setFormData({
        f_name: '',
        l_name: '',
        job_title: '',
        aircraft_id: ''
      });
      setShowForm(true); // Show the form for adding a new employee
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
            <div className="mt-5 pt-4">
              <h2>Employee Management</h2>
  
              {/* New Employee Button */}
              <button
                className="btn btn-success mb-3"
                onClick={handleNewEmployee}
              >
                New Employee
              </button>
  
              {/* Add or Edit Employee Form */}
              {showForm && (
                <form onSubmit={selectedEmployee ? handleUpdateEmployee : handleAddEmployee} className="mb-4">
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
                      type="text"
                      name="job_title"
                      className="form-control"
                      placeholder="Job Title"
                      value={formData.job_title}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="aircraft_id"
                      className="form-control"
                      placeholder="Aircraft ID"
                      value={formData.aircraft_id}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary custom-btn">
                    {selectedEmployee ? 'Update Employee' : 'Add Employee'}
                  </button>
                </form>
              )}
  
              {/* Employees Table */}
              <h3>All Employees</h3>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Job Title</th>
                    <th>Aircraft ID</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee) => (
                    <tr key={employee.employee_id}>
                      <td>{employee.f_name}</td>
                      <td>{employee.l_name}</td>
                      <td>{employee.job_title}</td>
                      <td>{employee.aircraft_id}</td>
                      <td>
                        <button
                          className="btn btn-info btn-sm mr-2 custom-btn"
                          onClick={() => handleSelectEmployee(employee)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger btn-sm custom-btn"
                          onClick={() => handleDeleteEmployee(employee.employee_id)}
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
  
  export default EmployeeComponent;
  