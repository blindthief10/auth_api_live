const express = require('express');
const imageRouter = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const util = require('util');
const storage = multer.diskStorage({destination: './browser/uploadedImages'});
const upload = multer({storage: storage})

const renamePromise = util.promisify(fs.rename);

imageRouter.post('/upload', upload.single('profile'), async (req, res, next) => {
  console.log(req.file);
  const fileType = req.file.mimetype.split('/')[1];

  const finalName = req.file.filename + '.' + fileType;

  const oldPath = path.join('browser', 'uploadedImages', req.file.filename);
  const newPath = path.join('browser', 'uploadedImages', finalName);

  await renamePromise(oldPath, newPath);

  res.status(200).json({file: finalName});
})

module.exports = imageRouter;
