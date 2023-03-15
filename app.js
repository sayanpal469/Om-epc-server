const express = require('express');
const cors = require('cors');
// const multer = require('multer');
const bodyParser = require('body-parser');
const getRequestRoutes = require('./Routes/getRequestRoutes');
const buyRequestRoutes = require('./Routes/buyRequestRoutes');
const signupRoutes = require('./Routes/authRoutes/signUpRoutes');
const loginRoutes = require('./Routes/authRoutes/loginRoutes');
const checkEmailRoutes = require('./Routes/authRoutes/checkEmailRoutes');
const forgetPassRoutes = require('./Routes/authRoutes/forgetPassRoutes');
const serviceRoutes = require('./Routes/serviceRoutes');
const computerServiceRequestRoute = require('./Routes/serviceRequestRoutes/computerServiceRequestRoutes');
const upsServiceRequestRoutes = require('./Routes/serviceRequestRoutes/upsServiceRequestRoutes');
const printerServiceRequestRoutes = require('./Routes/serviceRequestRoutes/printerServiceRequestRoutes');
const surveillanceServiceRequestRoutes = require('./Routes/serviceRequestRoutes/surveillanceServiceRequestRoutes');
const computerRoutes = require('./Routes/ProductsRoutes/computerRoutes');
const UpsRoutes = require('./Routes/ProductsRoutes/upsRoutes');
const PrinterRoutes = require('./Routes/ProductsRoutes/printerRoutes');
const SurveillanceRoutes = require('./Routes/ProductsRoutes/surveillanceRoutes');
const carrerRoutes = require('./Routes/carrerRoutes');
const refurbishedRoutes = require('./Routes/ProductsRoutes/refurbishedRoutes');
const accesoriesRoutes = require('./Routes/ProductsRoutes/accesoriesRoutes');
const app = express();

app.use(express.json());
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

app.use('/uploads', express.static('uploads'))


// Get customer request api
app.use('/api/omEpc', getRequestRoutes);

// Product apis starts here =============================

// Computer api=========
app.use('/api/omEpc', computerRoutes);

// UPS api=========
app.use('/api/omEpc', UpsRoutes);

// Printer api=========
app.use('/api/omEpc', PrinterRoutes);

// Surveillance api=========
app.use('/api/omEpc', SurveillanceRoutes);

// Refurbished apis=========
app.use('/api/omEpc', refurbishedRoutes);

// Accesories apis
app.use('/api/omEpc', accesoriesRoutes);
// Product apis ends here =============================


// Customer buy request api
app.use('/api/omEpc', buyRequestRoutes);

// Services api
app.use('/api/omEpc', serviceRoutes);


// Services requests apis starts here =======================
// Computer and laptop services requests api
app.use('/api/omEpc', computerServiceRequestRoute);
// UPS services requests api
app.use('/api/omEpc', upsServiceRequestRoutes);
// Printer services requests api
app.use('/api/omEpc', printerServiceRequestRoutes);
// Surveillance services requests api
app.use('/api/omEpc', surveillanceServiceRequestRoutes);
// Services requests apis ends here =======================

// Sign up api
app.use('/api/omEpc', signupRoutes);

// login api
app.use('/api/omEpc', loginRoutes);

// Check for forget password api
app.use('/api/omEpc', checkEmailRoutes);
app.use('/api/omEpc', forgetPassRoutes);


// Carrer api
app.use('/api/omEpc', carrerRoutes);




app.get('/', (req, res) => {
    res.status(200).send('Welcome to Om-Epc server')
})

module.exports = app;