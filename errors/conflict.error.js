const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class ConflictError extends BaseError {
  constructor(resourceName, details) {
    super("Conflict", StatusCodes.CONFLICT, `Error while creating ${resourceName} due to duplicate key`, details );
  }
}

module.exports = ConflictError;
