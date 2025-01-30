// In your routes/aircraft.js or controller file

const express = require('express');
const router = express.Router();
const Aircraft = require('../models/Aircraft');  // Adjust path as needed

// POST route to add new aircraft
router.post('/add', async (req, res) => {
  try {
    // Extract data from request body
    const { capacity, brand } = req.body;

    // Create a new aircraft record in the database
    const newAircraft = await Aircraft.create({
      capacity,
      brand,
    });

    // Respond with success message and new aircraft data
    res.status(201).json({
      message: 'Aircraft added successfully!',
      data: newAircraft,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add aircraft', error });
  }
});


// Get all aircrafts
router.get('/all', async (req, res) => {
  try {
    // Fetch all aircraft records from the database
    const aircrafts = await Aircraft.findAll();

    // Respond with the list of aircrafts
    res.status(200).json({
      message: 'Aircrafts retrieved successfully!',
      data: aircrafts,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve aircrafts', error });
  }
});

// Get aircraft by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params; // Get the aircraft ID from URL parameters

    // Fetch the aircraft record by ID
    const aircraft = await Aircraft.findByPk(id);

    // Check if the aircraft exists
    if (!aircraft) {
      return res.status(404).json({ message: 'Aircraft not found' });
    }

    // Respond with the found aircraft data
    res.status(200).json({
      message: 'Aircraft retrieved successfully!',
      data: aircraft,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve aircraft', error });
  }
});

// Delete aircraft by ID
// Delete aircraft by ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params; // Get the aircraft ID from URL parameters

    // Delete the aircraft record by ID
    const deletedAircraft = await Aircraft.destroy({
      where: { aircraft_id: id }, // Match by the aircraft_id
    });

    // Check if the aircraft was found and deleted
    if (deletedAircraft === 0) {
      return res.status(404).json({ message: 'Aircraft not found' });
    }

    // Respond with success message
    res.status(200).json({
      message: 'Aircraft deleted successfully!',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete aircraft', error });
  }
});


// Update aircraft by ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params; // Get the aircraft ID from URL parameters
    const { capacity, brand } = req.body; // Get updated data from request body

    // Update the aircraft record by ID
    const updatedAircraft = await Aircraft.update(
      { capacity, brand },  // Updated values
      { where: { aircraft_id: id } }  // Match by the aircraft_id
    );

    // Check if the aircraft was found and updated
    if (updatedAircraft[0] === 0) {
      return res.status(404).json({ message: 'Aircraft not found' });
    }

    // Respond with success message
    res.status(200).json({
      message: 'Aircraft updated successfully!',
      data: { aircraft_id: id, capacity, brand },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update aircraft', error });
  }
});




module.exports = router;
