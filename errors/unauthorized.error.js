const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class UnauthorizedError extends BaseError {
  constructor(details) {
    super("Unauthorized", StatusCodes.UNAUTHORIZED, `Invalid authentication credentials`, details);
  }
}

module.exports = UnauthorizedError;