const { StatusCodes } = require("http-status-codes");
const { AuthService } = require("../services");
const { responseUtil } = require("../utils");

async function signup(req, res, next) {
  try {
    const { name, email, password, role } = req.body;
    const result = await AuthService.signup({ name, email, password, role});
    return res
      .status(StatusCodes.CREATED)
      .json(responseUtil.buildSuccessResponse("Successfully created the auth credentials", result));
  } catch (error) {
    console.error("Error during creating auth credentials");
    next(error);
  }
}

async function signin(req, res, next) {
  try {
    const { email, password } = req.body;
    const result = await AuthService.signin({ email, password });
    return res
      .status(StatusCodes.OK)
      .json(responseUtil.buildSuccessResponse("Successfully authenticated the user", result));
  } catch (error) {
    console.error("Error in controller layer while signing in");
    next(error);
  }
}

async function checkIsAuthenticated(req, res, next){
  try{
    console.log("Successfully verified the token");
    return res.status(StatusCodes.OK).json({message: "Successfully verified the token"});
  }
  catch(error){
    console.error("Error in controller layer while verifying token");
    next(error);
  }
}

module.exports = { signup, signin,checkIsAuthenticated };
