// routes/customerRoutes.js
const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');  // Adjust path as needed

router.post('/add-customer', async (req, res) => {
  try {
    const { f_name, l_name, date_of_birth, gender, email, phone_number, address } = req.body;
    const newCustomer = await Customer.create({
      f_name,
      l_name,
      date_of_birth,
      gender,
      email,
      phone_number,
      address,
    });
    res.status(201).json({ message: 'Customer added successfully!', data: newCustomer });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add customer', error: error.message });
  }
});

router.get('/all', async (req, res) => {
  try {
    const customers = await Customer.findAll();  // Use findAll() instead of find()
    res.status(200).json({ data: customers });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params; // Get the airport ID from URL parameters

    // Fetch the airport record by ID
    const cust = await Customer.findByPk(id);

    // Check if the airport exists
    if (!cust) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    // Respond with the found airport data
    res.status(200).json({
      message: 'Customer retrieved successfully!',
      data: cust,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve customer', error });
  }
});

router.put('/update-customer/:customer_id', async (req, res) => {
  try {
    const { customer_id } = req.params;  // Get the customer ID from URL parameters
    const { f_name, l_name, date_of_birth, gender, email, phone_number, address } = req.body;  // Extract updated details from the request body

    // Find the customer by customer_id
    const customer = await Customer.findByPk(customer_id);

    // Check if the customer exists
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    // Update customer details
    customer.f_name = f_name || customer.f_name;
    customer.l_name = l_name || customer.l_name;
    customer.date_of_birth = date_of_birth || customer.date_of_birth;
    customer.gender = gender || customer.gender;
    customer.email = email || customer.email;
    customer.phone_number = phone_number || customer.phone_number;
    customer.address = address || customer.address;

    // Save the updated customer record
    await customer.save();

    // Respond with updated customer data
    res.status(200).json({
      message: 'Customer updated successfully!',
      data: customer,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Failed to update customer',
      error: error.message,
    });
  }
});

router.delete('/delete-customer/:customer_id', async (req, res) => {
  try {
    const { customer_id } = req.params;  // Get the customer ID from URL parameters

    // Find the customer by customer_id
    const customer = await Customer.findByPk(customer_id);

    // Check if the customer exists
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    // Delete the customer record
    await customer.destroy();

    // Respond with success message
    res.status(200).json({
      message: 'Customer deleted successfully!',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Failed to delete customer',
      error: error.message,
    });
  }
});


module.exports = router;
