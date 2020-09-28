const db = require("../data/db-config.js");

function getResources() {
    return db("resources");
}

module.exports = {
    getResources,
};
