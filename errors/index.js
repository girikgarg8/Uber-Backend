module.exports = {
  BadRequestError: require("./badRequest.error"),
  NotFoundError: require("./notFound.error"),
  InternalServerError: require("./internalServer.error"),
  ConflictError: require("./conflict.error"),
  UnauthorizedError: require("./unauthorized.error"),
  ForbiddenError : require("./forbidden.error"),
  BaseError: require("./base.error"),
};
