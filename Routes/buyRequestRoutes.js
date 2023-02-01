const { createBuyRequest, getAllBuyRequest, updateBuyRequest, getBuyRequestByEmail } = require('../Controller/buyProductFormController');

const buyRequestRoutes = require('express').Router();

buyRequestRoutes.route('/buy/new').post(createBuyRequest);
buyRequestRoutes.route('/buy').get(getAllBuyRequest);
buyRequestRoutes.route('/buy/:email').get(getBuyRequestByEmail);
buyRequestRoutes.route('/buy/update/:id').put(updateBuyRequest);


module.exports = buyRequestRoutes;