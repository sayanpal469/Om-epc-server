const express = require('express');
const bodyParser = require('body-parser')
const app = express();


app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

// product api
// app.use('/api/omEpc');

app.get('/', (req, res) => {
    res.status(200).send('Welcome to Om-Epc server')
})

module.exports = app;