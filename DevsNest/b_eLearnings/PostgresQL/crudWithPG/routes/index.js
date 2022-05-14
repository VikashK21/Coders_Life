const express = require('express');
const route = express.Router();
const { pool } = require('../config/dbConfig');

// route.use(express.json())

route.get('/getData', async (req, res) => {
    try {
        const result = await pool.query('select * from person')
        console.log(result);
        res.send(result);
    } catch (err) {
        console.error(err.message);
        
    }
})
