const { StatusCodes } = require("http-status-codes");
const { BaseError } = require("../errors");

function errorHandler(err, req, res, next) {
  if (err instanceof BaseError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      error: err.details,
      data: {}, //because this is an exception so no data is going to be provided
    });
  }

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: "Something went wrong",
    error: {}, // to not send any sensitive information as part of the API response
    data: {},
  });
}

module.exports = errorHandler;
