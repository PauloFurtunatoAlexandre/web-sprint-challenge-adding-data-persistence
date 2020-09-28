const express = require("express");

const router = express.Router();

const Resources = require("./resourcesDB.js");

router.get("/", async (req, res) => {
    try {
        const resources = await Resources.getResources("resources").then(
            (resources) => {
                res.status(200).json(resources);
            }
        );
    } catch {
        res.status(500).json({ message: "Could not retrieve the resources." });
    }
});

router.post("/", async (req, res) => {
    const newResource = req.body;
    try {
        const resource = await Resources.addResources(newResource).then(
            (item) => {
                res.status(201).json(item);
            }
        );
    } catch {
        res.status(500).json({ message: "Could not create the resource." });
    }
});

module.exports = router;
