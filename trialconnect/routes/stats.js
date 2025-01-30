const express = require('express');
const router = express.Router();
const sequelize = require('../config/database'); // Ensure correct database config
// Import Sequelize models
const Passenger = require('../models/Passengers_on_flight');
const Customer = require('../models/Customer');
const Employee = require('../models/Employees');
const Aircraft = require('../models/Aircraft');
const Airport = require('../models/Airport');
const Route = require('../models/Routes');
const Booking = require('../models/Bookingdetails');
const Cargo = require('../models/Cargo'); 

// Import Sequelize operators
const { Op } = require('sequelize');

// API endpoint to get the totals
// GET stats using the stored procedure
router.get('/stats', async (req, res) => {
  try {
    // Execute the stored procedure to get all counts
    const [counts] = await sequelize.query('CALL GetCounts()');

    // If no counts are returned
    if (!counts || counts.length === 0) {
      return res.status(404).json({
        error: 'No data found for counts',
      });
    }

    // Send the counts as the response
    res.json(counts);  // Access the first row from the result set

  } catch (err) {
    console.error('Error fetching totals:', err);
    res.status(500).json({ error: 'Error fetching totals' });
  }
});

router.get('/bookings', async (req, res) => {
  try {
    // Execute the stored procedure
    const result = await sequelize.query('CALL GetBookingsStats()');
    
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

router.get('/cargo-weight-distribution', async (req, res) => {
  try {
    const weightRanges = {
      '100-150kg': { min: 100, max: 150 },
      '150-200kg': { min: 150, max: 200 },
      '200-250kg': { min: 200, max: 250 },
      '250-300kg': { min: 250, max: 300 },
      '300kg+': { min: 300, max: Infinity }
    };

    const result = {};

    for (let range in weightRanges) {
      const { min, max } = weightRanges[range];
      const count = await Cargo.count({
        where: {
          weight: {
            [Op.gte]: min,
            ...(max !== Infinity ? { [Op.lt]: max } : {})
          }
        }
      });
      result[range] = count;
    }

    res.json(result);
  } catch (error) {
    console.error('Error fetching weight distribution:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/cargo-traffic', async (req, res) => {
  try {
    // Query to get cargo count by status
    const trafficData = await Cargo.findAll({
      attributes: [
        'status',  // Only include the status in the result
        [sequelize.fn('COUNT', sequelize.col('cargo_i_d')), 'count']  // Count of cargos per status
      ],
      group: ['status'],  // Group by status to get counts for each status
      raw: true,  // Return plain objects instead of Sequelize instances
    });

    // Format the data into a more readable structure
    const formattedData = trafficData.map(item => ({
      status: item.status,  // The status (Pending, In Transit, Delivered)
      count: item.count  // The count of cargos with this status
    }));

    // Send the formatted data as JSON response
    res.json(formattedData);
  } catch (error) {
    console.error('Error fetching cargo traffic:', error);
    res.status(500).json({ error: 'Failed to fetch cargo traffic data' });
  }
});

router.get('/employee-hierarchy', async (req, res) => {
  try {
    // Fetch employees from the database with their job title and aircraft_id
    const employees = await Employee.findAll({
      attributes: ['employee_id', 'job_title', 'aircraft_id'],  // Including aircraft_id for hierarchy
      raw: true  // For raw query result
    });

    console.log('Fetched employees:', JSON.stringify(employees, null, 2));  // Log fetched employees to check if the data is correct

    // Transform the flat list into a hierarchical tree structure
    const employeeTree = buildHierarchyTree(employees);

    console.log('Employee tree:', JSON.stringify(employeeTree, null, 2));  // Log the constructed employee tree with better formatting

    // Get job title counts
    const jobTitleCounts = getJobTitleCounts(employees);

    // Return the tree structure along with job title counts
    res.json({ employeeTree, jobTitleCounts });
  } catch (error) {
    console.error('Error fetching employee hierarchy:', error);
    res.status(500).json({ error: 'Error fetching employee hierarchy' });
  }
});

// Helper function to build the employee hierarchy tree
const buildHierarchyTree = (employees) => {
  const map = {};  // Map to hold employees by employee_id
  const roots = [];  // To hold the root employees (those without a superior)

  // Create a map of employee_id to employee object with job_title and children array
  employees.forEach(employee => {
    map[employee.employee_id] = { 
      employee_id: employee.employee_id, 
      job_title: employee.job_title, 
      children: []  // Initialize empty children array
    };
  });

  console.log('Map of employees:', JSON.stringify(map, null, 2));  // Log the employee map to ensure it's built correctly

  // Organize employees by their hierarchy using aircraft_id
  employees.forEach(employee => {
    if (employee.aircraft_id) {
      // If the employee has a superior (aircraft_id), add them as a child
      const parent = map[employee.aircraft_id];
      if (parent) {
        parent.children.push(map[employee.employee_id]);
        console.log(`Added employee ${employee.employee_id} as a child of ${employee.aircraft_id}`);  // Log hierarchy association
      } else {
        console.warn(`Parent with aircraft_id ${employee.aircraft_id} not found for employee ${employee.employee_id}`);  // Warn if parent is missing
      }

      // Log that the employee has a parent (aircraft_id)
      console.log(`Employee ${employee.employee_id} has aircraft_id ${employee.aircraft_id}, so it should be a child.`);
    } else {
      // Employees without an aircraft_id are root employees (top-level managers, etc.)
      roots.push(map[employee.employee_id]);
      console.log(`Employee ${employee.employee_id} is a root employee`);  // Log root employee
    }
  });

  // Return the root employees as the top-level hierarchy
  return roots;
};
// Helper function to get the job title counts
const getJobTitleCounts = (employees) => {
  return employees.reduce((acc, employee) => {
    const jobTitle = employee.job_title;
    if (acc[jobTitle]) {
      acc[jobTitle]++;
    } else {
      acc[jobTitle] = 1;
    }
    return acc;
  }, {});
};

router.get('/seat-occupancy', async (req, res) => {
  try {
    // Raw SQL query to get the count of passengers per seat per flight
    const [results, metadata] = await sequelize.query(`
      SELECT flight_id, seat_num, COUNT(passenger_id) AS occupancy_count
      FROM passengers_on_flight
      GROUP BY flight_id, seat_num
      ORDER BY flight_id ASC, seat_num ASC
    `);

    // Send the results as the response
    res.json(results);

  } catch (error) {
    console.error('Error fetching seat occupancy data:', error);
    res.status(500).json({ error: 'Database query error' });
  }
});

module.exports = router;
