const express = require("express");
const authRoutes = require('./auth-routes');

// Commenting the other routes as the APIs have not yet been implemented

// const bookingRoutes = require('./booking-routes');
// const driverRoutes = require('./driver-routes');
// const passengerRoutes = require('./passenger-routes');

const router = express.Router();

// router.use('/bookings', bookingRoutes);
router.use('/auth', authRoutes);
// router.use('/drivers', driverRoutes);
// router.use('/passengers', passengerRoutes);

module.exports = router;