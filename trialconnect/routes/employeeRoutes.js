const express = require("express");
const router = express.Router();
const Employee = require('../models/Employees');
const Aircraft = require('../models/Aircraft');

router.post('/add-employee', async (req, res) => {
  // Destructure input values from request body
  const { f_name, l_name, job_title, aircraft_id } = req.body;

  // Basic validation for required fields
  if (!f_name || !l_name) {
    return res.status(400).json({ 
      message: 'First name and last name are required.' 
    });
  }

  try {
    // Create a new employee record
    const newEmployee = await Employee.create({
      f_name, 
      l_name, 
      job_title: job_title || 'Not Specified',  // Optional default value
      aircraft_id
    });

    res.status(201).json({ 
      message: 'Employee added successfully!', 
      data: newEmployee 
    });
  } catch (error) {
    const errorMessages = error.errors 
      ? error.errors.map(err => err.message).join(', ') 
      : error.message;

    res.status(500).json({ 
      message: 'Failed to add employee', 
      error: errorMessages 
    });
  }
});

router.get('/all', async (req, res) => {
    try {
      // Fetch all aircraft records from the database
      const emp = await Employee.findAll();
  
      // Respond with the list of aircrafts
      res.status(200).json({
        message: 'Employee retrieved successfully!',
        data: emp,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to retrieve employee', error });
    }
  });
  
  router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params; // Get the airport ID from URL parameters
  
      // Fetch the airport record by ID
      const emp = await Employee.findByPk(id);
  
      // Check if the airport exists
      if (!emp) {
        return res.status(404).json({ message: 'Employee not found' });
      }
  
      // Respond with the found airport data
      res.status(200).json({
        message: 'Employee retrieved successfully!',
        data: emp,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to retrieve Employee', error });
    }
  });
  
  router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;  // Get the employee ID from URL parameters
      const { f_name, l_name, job_title, aircraft_id } = req.body;
  
      // Find the employee record by ID
      const emp = await Employee.findByPk(id);
  
      // Check if the employee exists
      if (!emp) {
        return res.status(404).json({ message: 'Employee not found' });
      }
  
      // Update the employee record
      emp.f_name = f_name || emp.f_name;
      emp.l_name = l_name || emp.l_name;
      emp.job_title = job_title || emp.job_title;
      emp.aircraft_id = aircraft_id || emp.aircraft_id;
  
      // Save the updated record
      await emp.save();
  
      res.status(200).json({
        message: 'Employee updated successfully!',
        data: emp,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to update employee', error });
    }
  });
  
  router.delete('/delete/:id', async (req, res) => {
    try {
      const { id } = req.params;  // Get the employee ID from URL parameters
  
      // Find the employee record by ID
      const emp = await Employee.findByPk(id);
  
      // Check if the employee exists
      if (!emp) {
        return res.status(404).json({ message: 'Employee not found' });
      }
  
      // Delete the employee record
      await emp.destroy();
  
      res.status(200).json({
        message: 'Employee deleted successfully!',
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to delete employee', error });
    }
  });
  


module.exports = router;
