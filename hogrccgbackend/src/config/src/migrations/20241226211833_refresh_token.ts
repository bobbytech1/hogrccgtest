import type { Knex } from "knex";

exports.up = function (knex: Knex) {
    return knex.schema.createTable('refresh_tokens', (table) => {
      table.increments('id').primary();
      table.string('token').notNullable();
      table.integer('admin_id').unsigned().notNullable();
      table.timestamp('expires_at').notNullable();
      table.foreign('admin_id').references('id').inTable('admin').onDelete('CASCADE');
    });
  };
  
  exports.down = function (knex: Knex) {
    return knex.schema.dropTable('refresh_tokens');
  };
  