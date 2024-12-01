const { BookingRepository } = require("../repositories");

const bookingRepository = new BookingRepository();

async function createBooking (data) {
    try {
        const response = await bookingRepository.create(data);
        console.log("Success while creating booking from service layer", response);
        return response;
    }
    catch (error){
        console.error("Error while creating booking in service layer", error);
        throw error;
    }
}

module.exports = { createBooking };