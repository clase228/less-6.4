const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String, 
    minlength: 2,
  },
  username: {
    type: String,
    minlength: 2,
  },
  email: {
    type: String,
    minlength: 2,
  },
});

module.exports = mongoose.model('user', userSchema);