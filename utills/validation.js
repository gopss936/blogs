const { body,query ,param, } = require('express-validator');
const {verifyPayload} =require('../utills/generalValidator')
exports.signUpvalidate = [
  body('username').notEmpty().isLength({min:6}).withMessage('Username must be at least 6 characters long or username is required'),
  body('password').notEmpty().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.'),
  verifyPayload
];

exports.signInvalidate = [
   
    body('username').notEmpty().withMessage('username is required '),
    body('password').notEmpty().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.'),
    verifyPayload
  ];

  exports.createPostValidation = [
    body('title').notEmpty().withMessage('Title cannot be empty'),
    body('content').notEmpty().withMessage('Content cannot be empty'),
    verifyPayload
  ];
  
  exports.updatePostValidation = [
    body('title').optional().notEmpty().withMessage('Title cannot be empty'),
    body('content').optional().notEmpty().withMessage('Content cannot be empty'),
    verifyPayload
  ];

