const { createGetRequest, getAllRequest, getRequestByEmail } = require('../Controller/getRequestFormController');

const getRequestRoutes = require('express').Router();

getRequestRoutes.route('/getRequest/new').post(createGetRequest);

getRequestRoutes.route('/getRequest/').get(getAllRequest);
getRequestRoutes.route('/getRequest/:email').get(getRequestByEmail)

module.exports = getRequestRoutes;