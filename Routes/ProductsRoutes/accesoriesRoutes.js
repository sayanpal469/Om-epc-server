const { createProduct, getAllProducts, getSingelProduct, getProductsByType, deleteProduct } = require('../../Controller/ProductControllers/accesoriesController');
const singleFileUpload = require('../../Middlewares/singleFileUpload');

const accesoriesRoutes = require('express').Router();

accesoriesRoutes.route('/accesories/new').post(singleFileUpload, createProduct);
accesoriesRoutes.route('/accesories').get(getAllProducts);
accesoriesRoutes.route('/accesories/:id').get(getSingelProduct);
accesoriesRoutes.route('/accesories/type/:type').get(getProductsByType);
accesoriesRoutes.route('/accesories/delete/:id').delete(deleteProduct);

module.exports = accesoriesRoutes;
