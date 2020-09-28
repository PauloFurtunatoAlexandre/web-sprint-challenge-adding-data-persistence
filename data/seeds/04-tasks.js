exports.seed = function (knex) {
    return knex("tasks").insert([
        {
            id: 1,
            description: "finish it",
            notes: "finish sprint",
            completed: false,
            project_id: 2,
        },
        {
            id: 2,
            description: "finish it",
            notes: "finish sprint",
            completed: false,
            project_id: 2,
        },
        {
            id: 3,
            description: "finish it",
            notes: "finish sprint",
            completed: false,
            project_id: 3,
        },
    ]);
};
