const { StatusCodes } = require("http-status-codes");
const { responseUtil } = require("../utils");
const { BookingService } = require("../services");

async function createBooking (req, res) {
    try {
        const response = await BookingService.createBooking({ passenger : req.user, ...req.body });
        return res.status(StatusCodes.CREATED).json(responseUtil.buildSuccessResponse("Successfully created the booking", response));
    }
    catch (error) {
        console.error("Error while creating the booking in controller layer", error);
        next(error);
    }
}

module.exports = { createBooking };