const { createCarrerRequest, getAllCarrerRequest } = require('../Controller/carrerController');
const singleFileUpload = require('../Middlewares/singleFileUpload');

const carrerRoutes = require('express').Router();

carrerRoutes.route('/carrer/new').post(singleFileUpload, createCarrerRequest);
carrerRoutes.route('/carrer').get(getAllCarrerRequest);

module.exports = carrerRoutes;