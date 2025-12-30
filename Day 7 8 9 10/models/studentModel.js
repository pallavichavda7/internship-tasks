const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: { type: String, unique: true },
  city: String
});

module.exports = mongoose.model("Student", studentSchema);