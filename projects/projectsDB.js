const db = require("../data/db-config.js");

function getProjects() {
    return db("projects");
}

function addProjects(project) {
    return db("projects").insert(project);
}

module.exports = {
    getProjects,
    addProjects,
};
