const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  imageName: {type: String, required: true},
  userName: {type: String, required: true}
}, {versionKey: false})

const imageModel = mongoose.model('images', imageSchema);

module.exports = imageModel;
