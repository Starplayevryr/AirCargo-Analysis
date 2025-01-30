const express = require('express');
const router = express.Router();
const Route = require('../models/Routes');  // Adjust path as needed
const sequelize = require('../config/database'); // Ensure correct database config
// POST - Add a new route
router.post('/add-route', async (req, res) => {
  try {
    const { origin_airport, dest_port, flightnum, distance_miles } = req.body;

    // Create a new route entry in the database
    const newRoute = await Route.create({
      origin_airport,
      dest_port,
      flightnum,
      distance_miles,
    });

    res.status(201).json({ message: 'New route added successfully!', data: newRoute });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add new route', error: error.message });
  }
});

router.get('/two', async (req, res) => {
  try {
    // Execute the stored procedure
    const result = await sequelize.query('CALL GetRoutes()');
    
    // Log the entire result
    console.log('Full Result:', result);
    
    // The first item in the result array is the data we want
     
    
    // Log bookings
    

    // Send the bookings data as the response
    res.json(result);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ error: 'Database query error' });
  }
});


// GET all routes
router.get('/all', async (req, res) => {
  try {
    const routes = await Route.findAll();
    res.status(200).json({
      message: 'Routes retrieved successfully!',
      data: routes,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve routes', error });
  }
});

// GET route by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const route = await Route.findByPk(id);

    if (!route) {
      return res.status(404).json({ message: 'Route not found' });
    }

    res.status(200).json({
      message: 'Route retrieved successfully!',
      data: route,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve route', error });
  }
});

// PUT - Update a route by ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { origin_airport, dest_port, flightnum, distance_miles } = req.body;

    // Find the route by ID
    const route = await Route.findByPk(id);
    if (!route) {
      return res.status(404).json({ message: 'Route not found' });
    }

    // Update the route details
    const updatedRoute = await route.update({
      origin_airport,
      dest_port,
      flightnum,
      distance_miles,
    });

    res.status(200).json({
      message: 'Route updated successfully!',
      data: updatedRoute,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update route', error });
  }
});

// DELETE - Delete a route by ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Find the route by ID
    const route = await Route.findByPk(id);
    if (!route) {
      return res.status(404).json({ message: 'Route not found' });
    }

    // Delete the route
    await route.destroy();

    res.status(200).json({
      message: 'Route deleted successfully!',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete route', error });
  }
});

module.exports = router;
