const { createProduct } = require('../Controller/productController');

const productRoutes = require('express').Router();
const singleFileUpload = require('../Middlewares/singleFileUpload');

productRoutes.post('/product/new', singleFileUpload, createProduct);

module.exports = productRoutes;
