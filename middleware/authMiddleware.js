const jwt = require('jsonwebtoken');
const secretKey = 'tyuibrtyux67iqbnam'; 
const Constants = require("../config/constants")
const User = require('../models/user');

const validateJwt = async (req, res, next) => {
  const authHeaders = req.headers.authorization;
  const token = authHeaders ? authHeaders.split(' ')[1] : null;

  if (!token) {
    return res.status(401).json({ error: Constants.errorResponse.TOKEN_REQUIRED });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;

    const availableUser = await User.findById(req.user.userId);

    if (!availableUser) {
      return res.status(401).json({ error: Constants.errorResponse.INVALID_TOKEN });
    }

    next();
  } catch (err) {
    return res.status(417).json({ error: Constants.errorResponse.INVALID_TOKEN });
  }
};



const findUserName = async (req, res, next) => {
  const userId = req.user.userId;
  const user = await User.findOne({ _id: userId });
  if (user) {
    req.username = user.username; 
  } else {
    req.username = 'Unknown'; 
  }
  next();
};

const generateToken = (user) => {
    return jwt.sign({ userId: user._id, username: user.username}, secretKey, {
      expiresIn: '1h'
    });
  };







module.exports = { validateJwt, generateToken,findUserName};
