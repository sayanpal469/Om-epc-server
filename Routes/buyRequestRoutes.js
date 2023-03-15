const { createBuyRequest, getAllBuyRequest, getBuyRequestByEmail, deleteOrder, updateCanceled, updateShipped, updateComplete, getOrderById, updateOutOfDelevery } = require('../Controller/buyProductFormController');

const buyRequestRoutes = require('express').Router();

buyRequestRoutes.route('/buy/new').post(createBuyRequest);
buyRequestRoutes.route('/buy').get(getAllBuyRequest);
buyRequestRoutes.route('/buy/order/:email').get(getBuyRequestByEmail);
buyRequestRoutes.route('/buy/:id').get(getOrderById).delete(deleteOrder);
buyRequestRoutes.route('/buy/delivery/:id').put(updateOutOfDelevery);
buyRequestRoutes.route('/buy/shipped/:id').put(updateShipped);
buyRequestRoutes.route('/buy/complete/:id').put(updateComplete);
buyRequestRoutes.route('/buy/cancel/:id').put(updateCanceled);


module.exports = buyRequestRoutes;