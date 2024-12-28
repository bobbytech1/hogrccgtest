import type { Knex } from "knex";

exports.up = function (knex: Knex) {
    return knex.schema.createTable('pages', (table) => {
      table.increments('id').primary(); // Primary Key
      table.string('slug').notNullable().unique(); // Unique Identifier for the Page
      table.string('title').notNullable(); // Page Title
      table.json('content'); // Dynamic Content as JSON
      table.timestamps(true, true); // created_at and updated_at
    });
  };
  
  exports.down = function (knex: Knex) {
    return knex.schema.dropTableIfExists('pages');
  };
  

