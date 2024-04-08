
const {validateJwt} = require('../middleware/authMiddleware'); 

const applyJwtMiddleware = (req, res, next) => {
    if(req.url!='/api/login' && req.url!='/api/register' && req.url!='/api-docs')
        validateJwt(req, res, next);
    else
        next();

};


module.exports = applyJwtMiddleware;