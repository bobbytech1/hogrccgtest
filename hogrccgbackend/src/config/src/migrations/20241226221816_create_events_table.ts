import type { Knex } from "knex";

exports.up = function (knex: Knex) {
    return knex.schema.createTable('events', (table) => {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.text('description').notNullable();
      table.string('time').notNullable();
      table.string('location').notNullable();
      table.string('image').notNullable();
      table.string('form_link').notNullable();
      table.date('date').notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex: Knex) {
    return knex.schema.dropTableIfExists('events');
  };
  

