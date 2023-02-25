const { createSurveillance, getSurveillance, getSingelSurveillance, deleteSurveillance } = require('../../Controller/ProductControllers/surveillanceController');
const singleFileUpload = require('../../Middlewares/singleFileUpload');

const SurveillanceRoutes = require('express').Router();

SurveillanceRoutes.route('/product/surveillance/new').post(singleFileUpload, createSurveillance);
SurveillanceRoutes.route('/product/surveillance').get(getSurveillance);
SurveillanceRoutes.route('/product/surveillance/:id').get(getSingelSurveillance).delete(deleteSurveillance);

module.exports = SurveillanceRoutes;