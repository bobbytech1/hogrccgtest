import type { Knex } from "knex";

exports.up = function (knex: Knex) {
    return knex.schema.createTable('sermons', (table) => {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.string('category').notNullable();
      table.text('content').notNullable();
      table.string('image').notNullable();
      table.string('video').notNullable()
      table.string('speaker').notNullable();
      table.date('date').notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex: Knex) {
    return knex.schema.dropTableIfExists('sermons');
  };
  

