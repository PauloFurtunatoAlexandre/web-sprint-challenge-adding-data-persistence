const express = require("express");

const router = express.Router();

const Tasks = require("./tasksDB.js");

router.get("/", async (req, res) => {
    try {
        const tasks = await Tasks.getTasks("tasks").then((tasks) => {
            res.status(200).json(tasks);
        });
    } catch {
        res.status(500).json({ message: "Could not retrieve the tasks." });
    }
});

router.post("/", async (req, res) => {
    const newTask = req.body;
    try {
        const task = await Tasks.addTasks(newTask).then((task) => {
            res.status(201).json(task);
        });
    } catch {
        res.status(500).json({ message: "Could not create the task." });
    }
});

module.exports = router;
