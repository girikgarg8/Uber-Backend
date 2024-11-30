const express = require("express");
const { AuthenticationMiddlewares } = require("../../middlewares");
const { AuthController } = require("../../controllers");

const router = express.Router();

router.post("/signup", AuthenticationMiddlewares.validateSignupRequest, AuthController.signup);

router.post("/signin", AuthenticationMiddlewares.validateSigninRequest, AuthController.signin);

router.get("/token", AuthenticationMiddlewares.verifyToken, AuthController.checkIsAuthenticated); // dummy route to test for token verification, will be cleaned up later

module.exports = router;
