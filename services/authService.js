const { UnauthorizedError, BadRequestError, NotFoundError } = require("../errors");
const { AuthRepository } = require("../repositories");
const { authUtil } = require("../utils");

const authRepository = new AuthRepository();

async function signup(data) {
  try {
    const result = await authRepository.create(data);
    console.log("Successfully created the auth credentials");
    return result;
  } catch (error) {
    console.error("Error while creating auth credentials", error);
    throw error;
  }
}

async function signin(data) {
  try {
    const { email, password } = data;
    const user = await authRepository.get({ email });
    const isPasswordVerified = authUtil.verifyPassword(password, user.password);
    if (!isPasswordVerified){
      throw new UnauthorizedError('Incorrect password');
    }
    console.log("Successfully authenticated the input credentials");
    const jwtToken = authUtil.createToken({id: user._id, email: user.email});
    return {...user, jwtToken}
  } catch (error) {
    console.error("Error while authenticating input credentials", error);
    throw error;
  }
}

async function isAuthenticated(token){
  try {
    if (!token) {
      throw new BadRequestError("auth", "Missing JWT Token");
    }
    const response = authUtil.verifyToken(token);
    const user = await authRepository.get({ _id: response.id }); // additional level of check, to ensure that JWT token is not a stale token, and the logged in user still exists
    if (!user){
      throw new NotFoundError("auth", response.email);
    }
    return response.id;
  }
  catch(error){
    if (error.name === 'JsonWebTokenError'){
      throw new UnauthorizedError('Invalid JWT token');
    }
    if (error.name === 'TokenExpiredError'){
      throw new UnauthorizedError('JWT token expired');
    }
    throw error;
  }
}

module.exports = { signup, signin, isAuthenticated };
