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

  req.toBeConsoled = 'daniel look'

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

    const initialToken = await jwt.sign({userName: findUser.userName}, process.env.SECRET);

    const token = 'Bearer ' + initialToken;

    res.cookie('authToken', token, {httpOnly: true});

    res.status(200).json({userName: findUser.userName, hobbies: findUser.hobbies});
  }catch (error) {
    next(error);
  }
}

const updateHobbies = async (req, res, next) => {
  try {
    const decodedUser = await jwt.decode(req.token, process.env.SECRET);

    const updatedUser = await usersModel.findOneAndUpdate({userName: decodedUser.userName}, {$push: {hobbies: req.body.hobbies}}, {new: true});

    res.status(202).json({userName: updatedUser.userName, hobbies: updatedUser.hobbies});

  }catch(error) {
    next(error);
  }
}

const logoutUser = async (req, res, next) => {
  try {
    res.clearCookie('authToken');

    res.status(200).json({msg: 'User is logged out'});
  }catch (error) {
    next(error);
  }
}

module.exports = {createUser, loginUser, handleValidationErrors, updateHobbies, logoutUser};
