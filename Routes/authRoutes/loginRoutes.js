const { userLogin, getUsers, getAllUsers } = require('../../Controller/authController/loginController');

const loginRoutes = require('express').Router();

loginRoutes.route('/login').post(userLogin);
loginRoutes.route('/login/user/:email').get(getUsers);

loginRoutes.route('/getUser').get(getAllUsers)

module.exports = loginRoutes;