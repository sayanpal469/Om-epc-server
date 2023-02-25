const {
    createUps, getUpses, getSingelUps, deleteUps
} = require('../../Controller/ProductControllers/upsController');
const singleFileUpload = require('../../Middlewares/singleFileUpload');

const UpsRoutes = require('express').Router();

UpsRoutes.route('/product/ups/new').post(singleFileUpload, createUps);
UpsRoutes.route('/product/ups').get(getUpses);
UpsRoutes.route('/product/ups/:id').get(getSingelUps).delete(deleteUps);

module.exports = UpsRoutes;