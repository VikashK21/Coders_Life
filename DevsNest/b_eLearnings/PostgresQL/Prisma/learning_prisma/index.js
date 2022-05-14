const express = require('express');
const app = express();

const port = 8000;

app.use(express.json())
const { postSeller } = require('./routes/app.routes')

app.get('/', (req, res) => {
    res.send('You are standing at home page.')
})

app.post('/post/seller', postSeller)
app.get('/sellers', getSellers)

app.listen(port, () => {
    console.log(`Listening to the port num ${port}`);
})