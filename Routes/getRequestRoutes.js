const { createGetRequest, getAllRequest, getRequestByEmail, updateGetRequest } = require('../Controller/getRequestFormController');

const getRequestRoutes = require('express').Router();

getRequestRoutes.route('/getRequest/new').post(createGetRequest);

getRequestRoutes.route('/getRequest/').get(getAllRequest);
getRequestRoutes.route('/getRequest/:email').get(getRequestByEmail)
getRequestRoutes.route('/getRequest/update/:id').put(updateGetRequest)

module.exports = getRequestRoutes;