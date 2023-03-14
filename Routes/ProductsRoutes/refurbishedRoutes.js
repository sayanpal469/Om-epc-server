const {
    createRefurbishedProduct,
    getAllRefurbishedProduct,
    getSingelRefurbished,
    deleteRefurbishedProduct
} = require('../../Controller/ProductControllers/refurbishedController');
const singleFileUpload = require('../../Middlewares/singleFileUpload');

const refurbishedRoutes = require('express').Router();

refurbishedRoutes.route('/refurbished/new').post(singleFileUpload, createRefurbishedProduct);
refurbishedRoutes.route('/refurbished').get(getAllRefurbishedProduct);
refurbishedRoutes.route('/refurbished/:id').get(getSingelRefurbished).delete(deleteRefurbishedProduct);

module.exports = refurbishedRoutes;