const { createProduct, getAllProducts, getSingelProduct, getProductsByType, deleteProduct } = require('../../Controller/ProductControllers/accesoriesController');
const singleFileUpload = require('../../Middlewares/singleFileUpload');

const accesoriesRoutes = require('express').Router();

accesoriesRoutes.route('/product/accesories/new').post(singleFileUpload, createProduct);
accesoriesRoutes.route('/product/accesories').get(getAllProducts);
accesoriesRoutes.route('/product/accesories/:id').get(getSingelProduct);
accesoriesRoutes.route('/product/accesories/type/:type').get(getProductsByType);
accesoriesRoutes.route('/product/accesories/delete/:id').delete(deleteProduct);

module.exports = accesoriesRoutes;
