exports.seed = function (knex) {
    return knex("projects").insert([
        {
            id: 1,
            name: "finish sprint",
            description: "finish it",
            completed: false,
        },
        {
            id: 2,
            name: "finish amazon clone",
            description: "finish it",
            completed: false,
        },
        {
            id: 3,
            name: "finish laravel project",
            description: "finish it",
            completed: false,
        },
    ]);
};
