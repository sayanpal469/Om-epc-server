const { getUser } = require('../../Controller/authController/loginController');

const loginRoutes = require('express').Router();

loginRoutes.route('/login').post(getUser);

module.exports = loginRoutes;