import type { Knex } from "knex";

exports.up = function (knex: Knex) {
    return knex.schema.createTable('blogs', (table) => {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.text('content').notNullable();
      table.string('image').notNullable();
      table.string('author').notNullable();
      table.timestamp('published_at');
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex: Knex) {
    return knex.schema.dropTableIfExists('blogs');
  };
   async function down(knex: Knex): Promise<void> {
}

