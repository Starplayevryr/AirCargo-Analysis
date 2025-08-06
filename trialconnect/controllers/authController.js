const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.register = async (req, res) => {
  try {
    const { admin_id,username, password,email,role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ admin_id,username, password: hashedPassword ,email,role});
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Registration failed" });
  }
};

exports.login = async (req, res) => {
    const { admin_id, username, password } = req.body;
    
    try {
      // Finding user based on admin_id or username (choose one)
      const user = await User.findOne({
        where: { admin_id ,username}  // Use 'admin_id' or 'username', not both
      });
  
      if (!user) return res.status(404).json({ error: "User not found" });
  
      // Validate the password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) return res.status(401).json({ error: "Invalid credentials" });
  
      // Sign JWT with 'admin_id' as payload
      const token = jwt.sign({ admin_id: user.admin_id }, "keerthana", { expiresIn: "1h" });
  
      // Respond with success message and token
      res.status(200).json({ message: "Login successful", token });
      
    } catch (error) {
      res.status(500).json({ error: "Login failed" });
    }
  };
