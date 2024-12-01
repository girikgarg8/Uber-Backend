const { BadRequestError, ForbiddenError } = require("../errors");
const { AuthService } = require("../services");
const { roleUtil } = require("../utils");

function validateSignupRequest(req, res, next) {
  if (!req.body.name) {
    throw new BadRequestError("auth", "Name cannot be empty in the request");
  }
  if (!req.body.email) {
    throw new BadRequestError("auth", "Email cannot be empty in the request");
  }
  if (!req.body.password) {
    throw new BadRequestError("auth", "Password cannot be empty in the request");
  }
  if (!req.body.role) {
    throw new BadRequestError("auth", "Role cannot be empty in the request");
  }
  next();
}

function validateSigninRequest(req, res, next) {
  if (!req.body.email) {
    throw new BadRequestError("auth", "Email cannot be empty in the request");
  }
  if (!req.body.password) {
    throw new BadRequestError("auth", "Password cannot be empty in the request");
  }
  next();
}

async function verifyToken(req, res, next){
  try{
    const response = await AuthService.validateAuthenticationToken(req.headers['x-access-token']);
    if (response){
      req.user = response; //attaching the logged in user information in the request object, this will be useful in downstream services calls to identify the logged in user
      next();
    }
  }
  catch(error){
    console.error("Error while verifying the token in auth middleware", error);
    next(error); // as this middlware is asynchronous in nature, the error handler middleware has to be explicitly called
  }
}

async function validatePassengerRole(req, res, next) {
  try {
    const role = await AuthService.getRole(req.user);
    if (!roleUtil.isPassengerRole(role)) throw new ForbiddenError('Only user with passenger role is permitted to perform this operation'); 
    next();
  }
  catch(error){
    console.error("Error while validating passenger role", error);
    next(error);
  }
}

module.exports = { validateSignupRequest, validateSigninRequest, verifyToken, validatePassengerRole };
