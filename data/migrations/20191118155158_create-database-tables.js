exports.up = function(knex) {
    return knex.schema
      .createTable("users", tbl => {
        tbl.increments();
        tbl
          .string("username", 128)
          .notNullable()
          .unique();
        tbl.string("password", 128).notNullable();
      })
      .createTable("students", tbl => {
        tbl.increments();
        tbl
          .string("name", 100)
          .notNullable()
          .unique();
      })
      .createTable("projects", tbl => {
        tbl.increments();
        tbl.string("name", 128);
      })
      .createTable("messages", tbl => {
        tbl.increments();
        tbl.datetime('timestamp');
        tbl
          .integer("user_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("users");
        tbl
          .integer("student_id")
          .unsigned()
          .defaultTo(true)
          .notNullable()
          .references("id")
          .inTable("students");
        tbl.string("text", 1024);
        tbl
          .boolean("send to self")
          .defaultTo(false)
          .notNullable();
      })
      .createTable("usersTstudents", tbl => {
        tbl
          .integer("user_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("users");
        tbl
          .integer("student_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("students");
        tbl.primary(["student_id", "user_id"]);
      })
      .createTable("studentsTprojects", tbl => {
        tbl
          .integer("student_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("students");
        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects");
        tbl.primary(["student_id", "project_id"]);
      })
      .createTable("projectsTdeadlines", tbl => {
        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects");
        tbl.string("deadline", 128).notNullable();
        tbl.string("deadline_type", 128).notNullable();
        tbl.primary(["deadline_type", "project_id", "deadline"]);
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists("users")
      .dropTableIfExists("students")
      .dropTableIfExists("projects")
      .dropTableIfExists("messages")
      .dropTableIfExists("usersTstudents")
      .dropTableIfExists("studentsTprojects")
      .dropTableIfExists("projectsTdeadlines");
  };