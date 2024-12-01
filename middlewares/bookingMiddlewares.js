const { BadRequestError } = require("../errors");

function validateCreateBookingRequest(req, res, next) {
    if (!req.body.source) {
      throw new BadRequestError("booking", "Source cannot be empty in the request");
    }
    if (!req.body.source.latitude) {
      throw new BadRequestError("booking", "Source latitude is mandatory in the request");
    }
    if (!req.body.source.longitude){
        throw new BadRequestError("booking", "Source longitude is mandatory in the request");
    }
    if (!req.body.destination) {
      throw new BadRequestError("booking", "Destination cannot be empty in the request");
    }
    if (!req.body.destination.latitude) {
        throw new BadRequestError("booking", "Destination latitude is mandatory in the request");
    }
    if (!req.body.destination.longitude){
          throw new BadRequestError("booking", "Destination longitude is mandatory in the request");
    }
    next();
}

module.exports = { validateCreateBookingRequest };