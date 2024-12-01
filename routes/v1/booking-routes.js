const express = require("express");
const { AuthenticationMiddlewares, BookingMiddlewares } = require("../../middlewares");
const { BookingController } = require("../../controllers");

const router = express.Router();

router.post('/', AuthenticationMiddlewares.verifyToken, AuthenticationMiddlewares.validatePassengerRole, BookingMiddlewares.validateCreateBookingRequest, BookingController.createBooking); 

// router.patch('/:id', BookingController.updateBooking);

// router.post('/:id/feedback', BookingController.postFeedback);

module.exports = router;