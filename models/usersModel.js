const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: {type: String, required: true},
  password: {type: String, required: true},
  hobbies: {type: [String]}
}, {versionKey: false})

const usersModel = mongoose.model('users', userSchema);

module.exports = usersModel;
