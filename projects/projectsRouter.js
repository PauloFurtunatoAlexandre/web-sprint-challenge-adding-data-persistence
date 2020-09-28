const express = require("express");

const router = express.Router();

const Projects = require("./projectsDB.js");

router.get("/", async (req, res) => {
    try {
        const projects = await Projects.getProjects("projects").then(
            (projects) => {
                res.status(200).json(projects);
            }
        );
    } catch {
        res.status(500).json({ message: "Could not retrieve the projects." });
    }
});

router.post("/", async (req, res) => {
    const newProject = req.body;
    try {
        const project = await Projects.addProjects(newProject).then((project) => {
            res.status(201).json(project);
        });
    } catch {
        res.status(500).json({ message: "Could not create the project." });
    }
});

module.exports = router;
