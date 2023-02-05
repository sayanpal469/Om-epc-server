const { createUser } = require('../../Controller/authController/signUpController');
const singleFileUpload = require('../../Middlewares/singleFileUpload');

const signupRoutes = require('express').Router();

signupRoutes.route('/signUp/new').post(singleFileUpload, createUser);

module.exports = signupRoutes;