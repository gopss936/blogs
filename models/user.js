const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

userSchema.methods.hashPassword = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.comparePasswords = function (password) {
  return bcrypt.compareSync(password, this.password);
};
module.exports = mongoose.model('User', userSchema);
