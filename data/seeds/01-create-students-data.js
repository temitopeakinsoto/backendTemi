exports.seed = function(knex) {
  return knex("students")
    .truncate()
    .then(function() {
      return knex("students").insert([
        {
          id: 1,
          name: "carnun"
        },
        {
          id: 2,
          name: "temitope"
        },
        {
          id: 3,
          name: "oladis"
        }
      ]);
    });
};
