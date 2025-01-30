const express = require("express")
const router = express.Router()
const passenger = require('../models/Passengers_on_flight')

router.post('/add-passengers',async(req,res)=>{
    try{
        const { customer_id, flight_id,  seat_num, travel_date } = req.body;
 
        const newPassenger = await passenger.create({
            customer_id, flight_id,  seat_num, travel_date
        })
        
        res.status(201).json({
            message: 'Passenger details updated successfully!',
            data:newPassenger,
          });
       
    }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Failed to add passenger details', error });
          }
    
})


// GET all passengers on flight
router.get('/all', async (req, res) => {
  try {
    const passengers = await passenger.findAll();
    res.status(200).json({
      message: 'Passengers retrieved successfully!',
      data: passengers,
    });               
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve passengers', error });
  }
});

// GET a passenger by ID
router.get('/get/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const pass = await passenger.findByPk(id);

    if (!pass) {
      return res.status(404).json({ message: 'Passenger not found' });
    }

    res.status(200).json({
      message: 'Passenger retrieved successfully!',
      data: pass,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve passenger', error });
  }
});

// PUT - Update a passenger's details (including foreign keys)
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { customer_id, flight_id, seat_num, travel_date } = req.body;

    // Find the existing passenger record
    const pass = await passenger.findByPk(id);
    if (!pass) {
      return res.status(404).json({ message: 'Passenger not found' });
    }

    // Update the passenger details
    const updatedPass = await passenger.update({
      customer_id,
      flight_id,
      seat_num,
      travel_date,
    });

    res.status(200).json({
      message: 'Passenger updated successfully!',
      data: updatedPass,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update passenger', error });
  }
});

// DELETE - Delete a passenger
router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Find the passenger record to delete
    const pass = await passenger.findByPk(id);
    if (!pass) {
      return res.status(404).json({ message: 'Passenger not found' });
    }

    // Delete the passenger
    await pass.destroy();

    res.status(200).json({
      message: 'Passenger deleted successfully!',
      data:pass
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete passenger', error });
  }
});

module.exports = router;


