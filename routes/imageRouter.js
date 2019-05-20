const express = require('express');
const imageRouter = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const util = require('util');
const storage = multer.diskStorage({destination: './browser/build/uploadedImages'});
const upload = multer({storage: storage});
const imageModel = require('../models/imageModel');
const isAuth = require('../middleware/isAuth');

const renamePromise = util.promisify(fs.rename);

imageRouter.post('/upload', isAuth, upload.single('profile'), async (req, res, next) => {

  const fileType = req.file.mimetype.split('/')[1];

  const finalName = req.file.filename + '.' + fileType;

  const oldPath = path.join('browser', 'build', 'uploadedImages', req.file.filename);
  const newPath = path.join('browser', 'build', 'uploadedImages', finalName);

  await renamePromise(oldPath, newPath);

  const decodedUser = jwt.decode(req.token, process.env.SECRET);

  await imageModel.findOneAndUpdate(
    {userName: decodedUser.userName},
    {$set: {userName: decodedUser.userName, imageName: finalName}},
    {upsert: true}
  )

  res.status(200).json({msg: 'Image was saved.'});
})

imageRouter.get('/profile', isAuth, async (req, res, next) => {
  try {
    const decodedUser = jwt.decode(req.token, process.env.SECRET)
    const foundImage = await imageModel.findOne({userName: decodedUser.userName}, {_id: 0});

    res.status(200).json(foundImage);
  }catch(error) {
    next(error);
  }
})

module.exports = imageRouter;
