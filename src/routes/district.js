const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all districts
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM districts');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

// Get districts by province
router.get('/byprovince/:id', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM districts WHERE province_id = ?', [req.params.id]);
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

module.exports = router;
