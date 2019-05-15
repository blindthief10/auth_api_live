const usersModel = require('../models/usersModel');
const { validationResult } = require('express-validator/check');

const createUser = async (req, res, next) => {
  try {
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
      return res.status(400).json({errors: validationErrors.array()});
    }
    
    await usersModel.create(req.body);
    res.status(201).json({msg: 'User was created!'});
  }catch (error) {
    next(error);
  }
}

module.exports = createUser;
