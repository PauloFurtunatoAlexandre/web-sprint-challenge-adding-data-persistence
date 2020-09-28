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

// router.get("/:id/shoppingList", async (req, res) => {
//     const { id } = req.params;

//     try {
//         const shoppingList = await Recipes.getShoppingList(id).then((list) => {
//             res.status(200).json(list);
//         });
//     } catch {
//         res.status(500).json({ message: "Could not find this list." });
//     }
// });

// router.get("/:id/instructions", async (req, res) => {
//     const { id } = req.params;

//     try {
//         const instructions = await Recipes.getInstructions(id).then(
//             (instruction) => {
//                 res.status(200).json(instruction);
//             }
//         );
//     } catch {
//         res.status(500).json({ message: "Could not find this instruction." });
//     }
// });

module.exports = router;
