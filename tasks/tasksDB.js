const db = require("../data/db-config.js");

function getTasks() {
    return db("tasks")
        .join("projects as p", "tasks.id", "=", "p.id")
        .select(
            "p.name",
            "p.description as Project Description",
            "tasks.id",
            "tasks.description as Task Description",
            "tasks.notes",
            "tasks.completed",
            "tasks.project_id"
        );
}

function addTasks(task) {
    return db("tasks").insert(task);
}

module.exports = {
    getTasks,
    addTasks,
};
