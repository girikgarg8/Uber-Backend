const express = require('express');

const router = express.Router();

router.get('/:id/bookings', PassengerController.getBookingsForPassenger);

module.exports = router;