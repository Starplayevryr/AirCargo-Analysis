const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/database");
const authRoutes = require("./routes/authRoutes");  // Import routes
const custRoutes = require('./routes/customerRoutes')
const aircraftRoutes = require('./routes/aircraftRoutes')
const airportRoutes = require('./routes/airportRoutes')
const passengerRoutes = require('./routes/passengerRoutes') 
const routeRoutes = require('./routes/routeRoutes')
const ticket_details=require('./routes/ticketRoutes')
const employee = require('./routes/employeeRoutes')
const cargo = require('./routes/cargoRoutes')
const statsRoute = require('./routes/stats');
const audit_log = require('./routes/audit_log')
const cors = require('cors');
const app = express();



app.use(express.json());

app.use(cors());
app.use(bodyParser.json());


app.use("/api/auth", authRoutes);
app.use("/api/customers",custRoutes)
app.use("/api/aircraft",aircraftRoutes)
app.use("/api/airport",airportRoutes)
app.use("/api/passengers",passengerRoutes)
app.use("/api/routes",routeRoutes)
app.use("/api/tickets",ticket_details)
app.use('/api/employee',employee)
app.use('/api/cargo',cargo)
app.use('/api', statsRoute);
app.use('/api/audit-logs',audit_log)


sequelize.sync()
  .then(() => console.log("Database synced"))
  .catch(err => console.error("Database sync error:", err));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));