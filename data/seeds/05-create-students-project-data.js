exports.seed = function(knex) {

      return knex("studentsTprojects").insert([
        {
          student_id: 1,
          project_id: 1
        },
        {
          student_id: 1,
          project_id: 2
        },
        {
          student_id: 1,
          project_id: 3
        }
      ]);

};
