const { validationResult } = require('express-validator');
const mongoose = require('mongoose');
const Constants =require("../config/constants")
const verifyPayload = (req, res,next) => {  
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map(error => error.msg);
      return res.status(400).json({ errors: errorMessages });
    }
    next();
}



 const checkInvalidFields = (fieldsRequired) => {
    return async (req, res, next) => {
        const extraFields = Object.keys(req.body).filter(field => !fieldsRequired.includes(field));
        if (extraFields.length > 0) {
          return res.status(400).json({ message: `Invalid fields: ${extraFields.join(', ')}` });
        }
        next();
    };
  };

  const verifyValidMongoId = (fieldName) => {
    return async (req, res, next) => {
        if (!mongoose.Types.ObjectId.isValid(req.query[fieldName])) {
            return res.status(400).json({ message: `${Constants.failResponse.INVALID_ID} ${fieldName}`});
        }
        next();
    };
};


module.exports={
    verifyPayload,
    checkInvalidFields,
    verifyValidMongoId
}