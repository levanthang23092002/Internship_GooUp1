require('dotenv').config();
const { Pool } = require('pg');

const dbPort = process.env.DB_PORT;
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

const pool = new Pool({
    user: dbUser,
    password: dbPassword,
    host: dbHost,
    port: dbPort,
    database: dbName,
});

module.exports = pool;