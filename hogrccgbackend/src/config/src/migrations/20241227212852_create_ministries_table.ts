import type { Knex } from "knex";

exports.up = function (knex: Knex) {
    return knex.schema.createTable('ministries', (table) => {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.text('description').notNullable();
      table.string('image').notNullable();
      table.string('form_link').notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex: Knex) {
    return knex.schema.dropTableIfExists('ministries');
  };

