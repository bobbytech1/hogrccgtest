import knex from 'knex';
import knexConfig from '../config/knexConfig';

// Debugging: Log Knex configuration to verify connection details


const db = knex(knexConfig);

export default db;
