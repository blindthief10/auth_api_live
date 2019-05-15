const express = require('express');
const usersRouter = express.Router();
const { createUser, loginUser, handleValidationErrors, updateHobbies, logoutUser } = require('../middleware/userMiddleware');
const {userCreateValidator, validateHobbyRequest} = require('../helpers/validateUserCreate');
const isAuth = require('../middleware/isAuth');
const loginValidator = [...userCreateValidator];
loginValidator.pop();

usersRouter.post('/create', userCreateValidator, handleValidationErrors, createUser);
usersRouter.post('/login', loginValidator, handleValidationErrors, loginUser);
usersRouter.put('/update/hobbies', validateHobbyRequest, handleValidationErrors, isAuth, updateHobbies);
usersRouter.get('/logout', isAuth, logoutUser);

module.exports = usersRouter;
