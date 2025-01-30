const express = require('express');
const router = express.Router();
const Airport = require('../models/Airport'); // Ensure the path is correct

// POST route to create a new Airport
router.post('/add-airport', async (req, res) => {
  try {
    const { airport_id, airport_name, city, country } = req.body;

    const newAirport = await Airport.create({
      airport_id,
      airport_name,
      city,
      country,
    });

    res.status(201).json({
      message: 'Airport created successfully',
      data: newAirport,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'An error occurred while creating the airport',
      error: err.message,
    });
  }
});

router.get('/all', async (req, res) => {
  try {
    const airports = await Airport.findAll();
    res.status(200).json({
      message: 'Airports retrieved successfully!',
      data: airports,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve airports', error });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const airport = await Airport.findByPk(id);
    if (!airport) {
      return res.status(404).json({ message: 'Airport not found' });
    }
    res.status(200).json({
      message: 'Airport retrieved successfully!',
      data: airport,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve airport', error });
  }
});

router.put('/update-airport/:airport_id', async (req, res) => {
  try {
    const { airport_id } = req.params;
    const { airport_name, city, country } = req.body; // Extract data from body

    console.log(req.body);  // Log request body to check if data is correct

    // Find the airport by ID
    const airport = await Airport.findOne({ where: { airport_id } });

    if (!airport) {
      return res.status(404).json({ message: 'Airport not found' });
    }

    // Update the airport details using update method
    const [updated] = await Airport.update(
      { airport_name, city, country },
      { where: { airport_id } }
    );

    if (updated) {
      const updatedAirport = await Airport.findByPk(airport_id); // Fetch updated airport record
      return res.status(200).json({
        message: 'Airport updated successfully!',
        data: updatedAirport,
      });
    } else {
      return res.status(400).json({ message: 'Failed to update airport' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update airport', error });
  }
});



router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAirport = await Airport.destroy({
      where: { airport_id: id },
    });
    if (deletedAirport === 0) {
      return res.status(404).json({ message: 'Airport not found' });
    }
    res.status(200).json({
      message: 'Airport deleted successfully!',
      data: deletedAirport,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete airport', error });
  }
});

module.exports = router;
