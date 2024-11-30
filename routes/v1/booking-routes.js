const express = require("express");

const router = express.Router();

router.post('/', BookingController.createBooking);

router.patch('/:id', BookingController.updateBooking);

router.post('/:id/feedback', BookingController.postFeedback);

module.exports = router;