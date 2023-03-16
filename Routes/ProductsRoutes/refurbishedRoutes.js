const {
    createRefurbishedProduct,
    getAllRefurbishedProduct,
    getSingelRefurbished,
    deleteRefurbishedProduct
} = require('../../Controller/ProductControllers/refurbishedController');
const singleFileUpload = require('../../Middlewares/singleFileUpload');

const refurbishedRoutes = require('express').Router();

refurbishedRoutes.route('/product/refurbished/new').post(singleFileUpload, createRefurbishedProduct);
refurbishedRoutes.route('/product/refurbished').get(getAllRefurbishedProduct);
refurbishedRoutes.route('/product/refurbished/:id').get(getSingelRefurbished).delete(deleteRefurbishedProduct);

module.exports = refurbishedRoutes;