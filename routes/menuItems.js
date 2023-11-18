const express = require('express');
const router = express.Router();
const { getPool } = require('../db');

// Endpoint for fetching menu items
router.get('/', async (req, res) => {
  try {
    const pool = getPool();
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT * FROM menu_items');
    connection.release();
    res.json(rows);
  } catch (error) {
    console.error('Error fetching menu items:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
