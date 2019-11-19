const cleaner = require('knex-cleaner');
exports.seed = function(knex) {
  return knex('messages').truncate()
    .then(() => {
      return knex('projectsTdeadlines').truncate()
        .then(() => {
          return knex('studentsTprojects').truncate()
            .then(() => {
              return knex('usersTstudents').truncate()
                .then(() => {
                  return cleaner.clean(knex, {
                    mode: 'truncate',
                    restartIdentity: true, // Used to tell PostgresSQL to reset the ID counter
                    ignoreTables: ['knex_migrations', 'knex_migrations_lock'],
                  });
                });
            });
        });
    });
};