const express = require('express');
const usersRouter = express.Router();
const { createUser, loginUser, handleValidationErrors } = require('../middleware/userMiddleware');
const userCreateValidator = require('../helpers/validateUserCreate');
const loginValidator = [...userCreateValidator];
loginValidator.pop();

usersRouter.post('/create', userCreateValidator, handleValidationErrors, createUser);
usersRouter.post('/login', loginValidator, handleValidationErrors, loginUser);

module.exports = usersRouter;
