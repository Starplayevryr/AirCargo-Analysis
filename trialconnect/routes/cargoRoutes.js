const express = require('express');
const router = express.Router();
const Cargo  = require('../models/Cargo');  // Import the Cargo model

// POST route to add cargo
router.post('/addcargo', async (req, res) => {
    try {
        const {
            weight,
            destination,
            originAirportID,  
            destinationAirportID,  
            trackingNumber,  
            cargoType,  
            arrivalDate,
            shippingCost,
            departureDate,
            estimatedDeliveryDate
        } = req.body;

        // Create a new cargo record
        const newCargo = await Cargo.create({
            weight,
            destination,
            originAirportID,  
            destinationAirportID,  
            trackingNumber,  
            cargoType,  
            arrivalDate,
            shippingCost,
            departureDate,
            estimatedDeliveryDate
        });

        res.status(201).json({
            message: 'Cargo created successfully!',
            cargo: newCargo
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Failed to create cargo',
            error: error.message
        });
    }
});

// GET route to fetch all cargos
router.get('/all', async (req, res) => {
    try {
        const cargos = await Cargo.findAll(); // Sequelize method to fetch all records
        res.status(200).json(cargos);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Failed to fetch cargos',
            error: error.message
        });
    }
});

// GET route to fetch a single cargo by ID
router.get('/cargos/:id', async (req, res) => {
    try {
        const cargo = await Cargo.findByPk(req.params.id); // Sequelize method to find by primary key
        if (!cargo) {
            return res.status(404).json({ message: 'Cargo not found' });
        }
        res.status(200).json(cargo);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Failed to fetch cargo by ID',
            error: error.message
        });
    }
});

// PUT route to update cargo by ID
router.put('/cargos/:id', async (req, res) => {
    try {
        const [updated] = await Cargo.update(req.body, {
            where: { cargoID: req.params.id },  // Sequelize method to update record by ID
        });
        if (!updated) {
            return res.status(404).json({ message: 'Cargo not found' });
        }
        const updatedCargo = await Cargo.findByPk(req.params.id);
        res.status(200).json({
            message: 'Cargo updated successfully!',
            cargo: updatedCargo
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Failed to update cargo',
            error: error.message
        });
    }
});

// DELETE route to delete cargo by ID
router.delete('/cargos/:id', async (req, res) => {
    try {
        const deleted = await Cargo.destroy({
            where: { cargoID: req.params.id },  // Sequelize method to delete by ID
        });
        if (!deleted) {
            return res.status(404).json({ message: 'Cargo not found' });
        }
        res.status(200).json({
            message: 'Cargo deleted successfully!',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Failed to delete cargo',
            error: error.message
        });
    }
});

module.exports = router;
