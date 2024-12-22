import knex, { Knex } from 'knex';
import dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

const knexConfig: Knex.Config = {
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  pool: { min: 2, max: 10 }, // Optimized connection pooling
  migrations: {
    tableName: 'knex_migrations',
    directory: './src/migrations',
  },
  seeds: {
    directory: './src/seeds',
  },
};

const db = knex(knexConfig);

export default db;
