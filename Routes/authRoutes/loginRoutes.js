const { getUser } = require('../../Controller/authController/loginController');

const loginRoutes = require('express').Router();

loginRoutes.route('/login').get(getUser);

module.exports = loginRoutes;