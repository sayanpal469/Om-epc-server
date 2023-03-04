const { createBuyRequest, getAllBuyRequest, getBuyRequestByEmail, deleteOrder, updateCanceled, updateShipped } = require('../Controller/buyProductFormController');

const buyRequestRoutes = require('express').Router();

buyRequestRoutes.route('/buy/new').post(createBuyRequest);
buyRequestRoutes.route('/buy').get(getAllBuyRequest);
buyRequestRoutes.route('/buy/:email').get(getBuyRequestByEmail);
buyRequestRoutes.route('/buy/:id').delete(deleteOrder);
buyRequestRoutes.route('/buy/shipped/:id').put(updateShipped);
buyRequestRoutes.route('/buy/cancel/:id').put(updateCanceled);


module.exports = buyRequestRoutes;