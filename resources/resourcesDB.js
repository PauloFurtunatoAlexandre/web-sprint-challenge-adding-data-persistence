const db = require("../data/db-config.js");

function getResources() {
    return db("resources");
}

function addResources(item) {
    return db("resources").insert(item);
}

module.exports = {
    getResources,
    addResources,
};
