const express = require('express');
const app = express();
const port = 5000;
const pool = require('./config/dbConfig');

// const router = require('./routes')
// app.use('/', router);

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to this home page.')
})

app.get('/getData/:id', async (req, res) => {
    try {
        const result = await pool.query(`select * from person where id=${req.params.id}`)
        console.log(result.rows);
        res.send(result.rows);
    } catch (err) {
        console.error(err.message);
        
    }
})

app.listen(port, ()=> {
    console.log(`Litening to the port ${port}`);
})