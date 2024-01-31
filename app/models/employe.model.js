const mongoose = require('mongoose');

// Define the employee schema
const employeeSchema = new mongoose.Schema({
        specialite: { type: String },
        projet: { type: String },
      },{timestamps:true});

module.exports = mongoose.model('employee', employeeSchema);