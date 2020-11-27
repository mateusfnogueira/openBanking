
exports.up = function (knex, Promise) {
    return knex.schema.createTable('transations', table => {
        table.increments('id').primary();
        table.string('name').notNull();
        table.number('value').notNull();
        table.boolean('type').notNull().defaultTo(false);
        table.integer('userId').references('id').notNull()
            .inTable('users').notNull('id');
    });
}
exports.down = function (knex, Promise) {
    return knex.schema.dropTable('transations');
};
