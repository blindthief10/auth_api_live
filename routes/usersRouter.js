const express = require('express');
const usersRouter = express.Router();
const createUser = require('../middleware/userMiddleware');
const userCreateValidator = require('../helpers/validateUserCreate');

usersRouter.post('/create', userCreateValidator, createUser);

module.exports = usersRouter;
