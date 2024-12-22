import { Knex } from 'knex';
import bcrypt from 'bcrypt';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('admin').del();

  // Insert seed entries
  await knex('admin').insert([
    {
      username: 'hogadmin', // Replace with your desired username
      password: await bcrypt.hash('hogrccgadmin', 10), // Replace with a secure password
    },
  ]);
}
