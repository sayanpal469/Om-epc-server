const { createService, getServices, getSingelService, deleteService } = require('../Controller/serviceController');
const singleFileUpload = require('../Middlewares/singleFileUpload');

const serviceRoutes = require('express').Router();

serviceRoutes.route('/service/new').post(singleFileUpload, createService);
serviceRoutes.route('/service').get(getServices);
serviceRoutes.route('/service/:id').get(getSingelService).delete(deleteService)


module.exports = serviceRoutes;