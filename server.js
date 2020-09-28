const express = require("express");
const helmet = require("helmet");

const projectsRouter = require("./projects/projectsRouter.js");
const resourcesRouter = require("./resources/resourcesRouter.js");
const tasksRouter = require("./tasks/tasksRouter.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
    res.send(`The server is working!`);
});

server.use("/api/projects", projectsRouter);
server.use("/api/resources", resourcesRouter);
server.use("/api/tasks", tasksRouter);

module.exports = server;
