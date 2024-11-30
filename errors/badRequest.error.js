const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class BadRequestError extends BaseError {
  constructor(resourceName, details) {
    super("Bad Request", StatusCodes.BAD_REQUEST, `Bad request for ${resourceName}`, details);
  }
}

module.exports = BadRequestError;
