
const express = require('express');
const app = express();
const port = 4000;
const connectToMongo = require('./db');
connectToMongo();

app.use(express.json())

app.use('/api/auth', require('./routes/user'))
// app.use('api/notes', require('./routes/notes'))

app.get('/', (req, res) => {
    res.status(401).send('You are standing at the home page.')
})

app.listen(port, () => {
    console.log(`Listening to the port ${port}.`);
})