const jwt = require('jsonwebtoken');

const User = require('../models/user');
const Constants =require("../config/constants");
const secretKey = "rtywvsbnw567sbnsj"
const crypto = require('crypto')

const {generateToken}= require('../middleware/authMiddleware'); 


exports.signUp=async (req, res) => {
    try {
      const { username,password } = req.body;
    
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ error: Constants.failResponse.USER_EXIST });
      }

    const newUser = new User({
      username,
      password: password, 
    });
    
    newUser.password = newUser.hashPassword(password); 
    
    await newUser.save();
    res.status(201).json({ message: Constants.succsessResponse.CREATED_SUCCESSFULLY });
  } catch (error) {
    res.status(400).json({error: error.message });
  }
},

exports.signIn=async (req, res) => {
  try {
    const { username, password } = req.body; 
   
    const user = await User.findOne({ username });
    
    if (!user || !user.comparePasswords(password)) {
      return res.status(400).json({ message: Constants.errorResponse.INVALID_CRED});
    }
    const token = generateToken(user);

    res.json({ message: Constants.succsessResponse.LOGIN_SUCCESSFULLY,username: user.username, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}