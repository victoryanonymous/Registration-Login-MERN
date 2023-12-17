const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    minlength: 5,
    maxlength: 55,
  },
  email: String,
  password: String,
});

const UserModel = mongoose.model('Users', UserSchema);

module.exports = UserModel;
