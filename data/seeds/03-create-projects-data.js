exports.seed = function(knex) {
  return knex("projects")
    .truncate()
    .then(function() {
      return knex("projects").insert([
        {
          id: 1,
          project_name: "Build a student portal"
        },
        {
          id: 2,
          project_name: "Protein filtration and synthesis"
        },
        {
          id: 3,
          project_name: "Write a new constitution"
        }
      ]);
    });
};