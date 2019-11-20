
exports.seed = function(knex) {
  return knex('projectsTdeadlines').insert([
    {project_id: 1, deadline: JSON.stringify(new Date('2019-11-30')), deadline_type: 'draft'},
    {project_id: 1, deadline: JSON.stringify(new Date('2020-01-05')), deadline_type: 'redraft' },
    {project_id: 1, deadline: JSON.stringify(new Date('2020-02-25')), deadline_type: 'final' },
    {project_id: 2, deadline: JSON.stringify(new Date('2019-12-01')), deadline_type: 'final' },
    {project_id: 3, deadline: JSON.stringify(new Date('2020-03-01')), deadline_type: 'provisional'}
  ]);
};
 