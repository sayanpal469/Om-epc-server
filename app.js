const express = require('express');
const cors = require('cors');
const multer = require('multer');
const bodyParser = require('body-parser');
const getRequestRoutes = require('./Routes/getRequestRoutes');
const productRoutes = require('./Routes/productRoutes');
const buyRequestRoutes = require('./Routes/buyRequestRoutes');
const app = express();



app.use(express.json());
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

// app.use(express.urlencoded({extended: true}))




// Get customer request api
app.use('/api/omEpc', getRequestRoutes);

// Product api
app.use('/api/omEpc', productRoutes)

// Customer buy request api
app.use('/api/omEpc', buyRequestRoutes)



app.get('/', (req, res) => {
    res.status(200).send('Welcome to Om-Epc server')
})

module.exports = app;