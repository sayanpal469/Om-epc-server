const { createProduct, getProducts, getSingelProduct, deleteProduct } = require('../Controller/productController');

const productRoutes = require('express').Router();
const singleFileUpload = require('../Middlewares/singleFileUpload');

productRoutes.route('/product/new').post(singleFileUpload, createProduct);
productRoutes.route('/product').get(getProducts);
productRoutes.route('/product/:id').get(getSingelProduct)
productRoutes.route('/product/delete/:id').delete(deleteProduct)
module.exports = productRoutes;
