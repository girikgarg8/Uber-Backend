const { ROLES } = require("../constants");

const isDriverRole = (role) => {
  return role === ROLES.DRIVER;
};

const isPassengerRole = (role) => {
  return role === ROLES.PASSENGER;
};

module.exports = { isDriverRole, isPassengerRole };
