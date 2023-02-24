const { createComputer, getComputers, getSingelComputer, deleteComputer } = require('../../Controller/ProductControllers/computerControllers');
const singleFileUpload = require('../../Middlewares/singleFileUpload');

const computerRoutes = require('express').Router();

computerRoutes.route('/product/computer/new').post(singleFileUpload, createComputer);
computerRoutes.route('/product/computer').get(getComputers);
computerRoutes.route('/product/computer/:id').get(getSingelComputer).delete(deleteComputer);


module.exports = computerRoutes;