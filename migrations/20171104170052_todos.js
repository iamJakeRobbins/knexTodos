exports.up = function(knex, Promise) {
	return Promise.all([
	knex.schema.createTable('todos', (table) => {
		table.increments().primary,
		table.text('title'),
		table.integer('priority'),
		table.text('description')
	})
	])
};

exports.down = function(knex, Promise) {
	return Promise,all ([
	knex.schema.dropTable('todos')
	])
};
