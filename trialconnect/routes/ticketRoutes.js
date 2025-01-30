const express = require("express");
const router = express.Router();
const Booking = require('../models/Bookingdetails');  
const { Sequelize } = require("sequelize");
const sequelize = require('../config/database');  // Import the Sequelize instance

// POST route for adding booking details
router.post('/addbooking', async (req, res) => {
  try {
    // Extract the required data from the request body
    const { passenger_id, flight_id, route_id, seat_number, class: bookingClass, payment_cost } = req.body;

    // Ensure all necessary data is provided (optional validation)
    if (!passenger_id || !flight_id || !route_id || !seat_number || !bookingClass || !payment_cost) {
      return res.status(400).json({
        message: 'Missing required fields. Please provide passenger_id, flight_id, route_id, seat_number, class, and payment_cost.',
      });
    }

    // Create a new booking record in the database
    const newBooking = await Booking.create({
      passenger_id,
      flight_id,
      route_id,
      seat_number,
      class: bookingClass,
      payment_cost,  // Save the payment cost
    });

    // Respond with success message and newly created booking data
    res.status(201).json({
      message: 'Booking details added successfully!',
      data: newBooking,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add booking details', error });
  }
});

// GET route for fetching all booking details
router.get('/all', async (req, res) => {
  try {
    // Fetch all booking records from the database
    const bookings = await Booking.findAll();

    // If no bookings found, return an appropriate message
    if (bookings.length === 0) {
      return res.status(404).json({
        message: 'No booking details found.',
      });
    }

    // Respond with success message and booking data
    res.status(200).json({
      message: 'Booking details retrieved successfully!',
      data: bookings,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve booking details', error });
  }
});


router.get('/:id', async (req, res) => {
  const passengerID = req.params.id;

  try {
    const [results, metadata] = await sequelize.query('CALL GetPassengerBookings(:passengerID)', {
      replacements: { passengerID },
    });

    console.log(results);  // Log the results to see if data is fetched

    res.status(200).json({ bookings: results });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve bookings', error: error });
  }
});

// PUT route for updating booking details by ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { passenger_id, flight_id, route_id, seat_number, class: bookingClass, payment_cost } = req.body;

    // Ensure all required fields are provided
    if (!passenger_id || !flight_id || !route_id || !seat_number || !bookingClass || !payment_cost) {
      return res.status(400).json({
        message: 'Please provide passenger_id, flight_id, route_id, seat_number, class, and payment_cost.',
      });
    }

    // Find the booking by ID
    const booking = await Booking.findByPk(id);

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Update booking details
    const updatedBooking = await booking.update({
      passenger_id,
      flight_id,
      route_id,
      seat_number,
      class: bookingClass,
      payment_cost,  // Update the payment cost
    });

    res.status(200).json({
      message: 'Booking details updated successfully!',
      data: updatedBooking,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update booking details', error });
  }
});

// DELETE route for deleting booking details by ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Find the booking by ID
    const booking = await Booking.findByPk(id);

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Delete the booking
    await booking.destroy();

    res.status(200).json({
      message: 'Booking details deleted successfully!',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete booking details', error });
  }
});

module.exports = router;
