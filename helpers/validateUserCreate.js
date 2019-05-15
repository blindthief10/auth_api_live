const { check } = require('express-validator/check');
const usersModel = require('../models/usersModel');

const userCreateValidator = [
  //
  check('userName')
    .exists().withMessage('The username field is mandatory')
    .trim()
    .isLength({min: 4, max: 35}).withMessage('The username should be between 4 and 35 characters')
    .escape(),

  check('password')
    .exists().withMessage('The password field is mandatory')
    .trim()
    .isLength({min:8, max: 35}).withMessage('Password between 8 and 35')
    .escape(),

  check('userName').custom(async userNameProvided => {
    const user = await usersModel.findOne({userName: userNameProvided});

    if (user) {
      throw new Error('User with that given username already exists');
    }
  })
];

const validateHobbyRequest = [
  check('hobbies')
    .exists().withMessage('Please put a hobby')
    .trim()
    .escape()
];



module.exports = {userCreateValidator, validateHobbyRequest};
