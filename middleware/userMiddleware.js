const usersModel = require('../models/usersModel');
const { validationResult } = require('express-validator/check');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const saltRounds = parseInt(process.env.SALT_ROUNDS);

const handleValidationErrors = (req, res, next) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    return res.status(400).json({errors: validationErrors.array()});
  }

  next();
}

const createUser = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, saltRounds);

    await usersModel.create(req.body);
    res.status(201).json({msg: 'User was created!'});
  }catch (error) {
    next(error);
  }
}

const loginUser = async (req, res, next) => {
  try {
    const findUser = await usersModel.findOne({userName: req.body.userName});

    if (!findUser) {
      return res.status(404).json({msg: 'User does not exist'});
    }

    const passwordMatches = await bcrypt.compare(req.body.password, findUser.password);

    if (!passwordMatches) {
      return res.status(400).json({msg: 'Password invalid'});
    }

    const token = await jwt.sign({userName: findUser.userName}, process.env.SECRET);

    res.cookie('authToken', token, {httpOnly: true});

    res.status(200).json({userName: findUser.userName, hobbies: findUser.hobbies});
  }catch (error) {
    next(error);
  }
}

module.exports = {createUser, loginUser, handleValidationErrors};
