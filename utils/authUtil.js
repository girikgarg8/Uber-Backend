const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const appConfig = require("../config/appConfig");

const verifyPassword = (plainTextPassword, encryptedPassword) => {
    try {
        return bcryptjs.compareSync(plainTextPassword, encryptedPassword);
    }
    catch(error){
        console.error("Error while verifying password in verifyPassword util", error);
        throw error;
    }
}

const createToken = (input) => {
    try {
        return jwt.sign(input, appConfig.JWT_SECRET, {expiresIn : appConfig.JWT_EXPIRY});
    }
    catch(error){
        console.error("Error while creating JWT token in auth util", input);
        throw error;
    }
}

const verifyToken = (token) => {
    try {
        return jwt.verify(token, appConfig.JWT_SECRET);
    }
    catch(error){
        console.error("Error while verifying JWT token in auth util", error);
        throw error;
    }
};

module.exports = { verifyPassword, createToken, verifyToken };