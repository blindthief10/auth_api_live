const express = require('express');
const usersRouter = express.Router();
const { createUser, loginUser } = require('../middleware/userMiddleware');
const userCreateValidator = require('../helpers/validateUserCreate');
const loginValidator = [...userCreateValidator];
loginValidator.pop();

usersRouter.post('/create', userCreateValidator, createUser);
usersRouter.post('/login', loginValidator, loginUser);

module.exports = usersRouter;
