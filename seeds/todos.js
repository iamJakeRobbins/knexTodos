
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {
					id: 1,
					title: 'make a test',
					priority: 1,
					description: ''
				},
        {
					id: 2,
					title: 'do a thing',
					priority: 3,
					description: '',
				},
        {
					id: 3,
					title: 'take a break',
					priority: 2,
					description: 'i love breaks'
				}
      ]);
    });
};
