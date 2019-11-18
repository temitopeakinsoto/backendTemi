exports.seed = function(knex) {
  return knex("users")
    .truncate()
    .then(function() {
      return knex("users").insert([
        {
          username: "temitope-bpa-app",
          password: "test123"
        },
        {
          username: "carnun-bpa-app",
          password: "test123"
        },
        {
          username: "dimeji-bpa-app",
          password: "test123"
        }
      ]);
    });
};
