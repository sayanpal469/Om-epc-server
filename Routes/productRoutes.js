const { createProduct } = require('../Controller/productController');

const productRoutes = require('express').Router();

productRoutes.route('/product/new').post(createProduct)

module.exports = productRoutes