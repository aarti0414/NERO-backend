const {check,validationResult}= require('express-validator');

exports.validateUserDetails= [
    check('email').normalizeEmail().isEmail().withMessage('invalid Email'),
    check('firstName').trim().not().isEmpty().isString().withMessage('must be valid first name').isLength({min:3, max:20}).withMessage('first Name must be  within 3 to 20 character'),
    check('LastName').trim().not().isEmpty().isString().withMessage('must be valid last name').isLength({min:3, max:20}).withMessage(' last Name must be  within 3 to 20 character'),
    check('password').trim().not().isEmpty().withMessage('pasword is empty').isLength({min:8, max:20}).withMessage(' password must be within 8 to 20 character')
 ]

 exports.userValidationResult = (req,res,next)=>{
    const result = validationResult(req).array;
    if(!result.length) return next();

    const error;
 }