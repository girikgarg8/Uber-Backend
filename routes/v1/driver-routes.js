const express = require('express');

const router = express.Router();

router.get('/:id/bookings', DriverController.getBookingsForDriver);

router.patch('/:id/location', DriverController.updateLocation);

module.exports = router;