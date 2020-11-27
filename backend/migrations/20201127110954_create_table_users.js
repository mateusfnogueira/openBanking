const { table } = require("../config/db");

exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNull();
        table.string('lastname').notNull();
        table.string('email').notNull().unique();
        table.string('login').notNull().unique();
        table.number('balance').noNull();
        table.string('password').notNull();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('users');
};
