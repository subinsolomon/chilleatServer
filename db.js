const mysql = require('mysql2/promise');
require('dotenv').config();

let pool;

async function connect() {
  try {
    pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    console.log('Connected to MySQL database');
  } catch (error) {
    console.error('Error connecting to database:', error.message);
  }
}

function getPool() {
  if (!pool) {
    throw new Error('Database pool not initialized');
  }
  return pool;
}

module.exports = { connect, getPool };
