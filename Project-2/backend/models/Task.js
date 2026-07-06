const mongoose = require("mongoose");

// simple schema for a task
const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Task", taskSchema);
