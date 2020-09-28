const express = require("express");
const helmet = require("helmet");

// const recipesRouter = require("./recipes/recipesRouter.js");

const server = express();

server.use(helmet());
server.use(express.json());

// server.get("/", (req, res) => {
//     res.send(`The server is working!`);
// });

// server.use("/api/recipes", recipesRouter);

module.exports = server;