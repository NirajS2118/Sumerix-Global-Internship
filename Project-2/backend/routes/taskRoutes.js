const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// add a new task
router.post("/add", async (req, res) => {
  try {
    const { task } = req.body;

    if (!task) {
      return res.status(400).json({ message: "Task is required" });
    }

    const newTask = new Task({ task: task });
    await newTask.save();

    res.json({ message: "Task added" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
});

// get all tasks
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = router;
