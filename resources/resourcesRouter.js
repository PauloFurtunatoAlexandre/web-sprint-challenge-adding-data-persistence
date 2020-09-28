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

module.exports = router;