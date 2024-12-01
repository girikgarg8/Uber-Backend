const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class ForbiddenError extends BaseError {
    constructor(reason) {
        super("Forbidden", StatusCodes.FORBIDDEN, "Forbidden", reason);
    }
}
module.exports = ForbiddenError;