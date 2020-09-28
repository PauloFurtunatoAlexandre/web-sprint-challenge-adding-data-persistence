exports.seed = function (knex) {
    return knex("resources").insert([
        {
            id: 1,
            name: "computer",
            description: "Hardware",
        },
        {
            id: 2,
            name: "VS Code",
            description: "Software",
        },
        {
            id: 3,
            name: "JavaScript",
            description: "Software",
        },
    ]);
};
