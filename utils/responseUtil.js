const buildSuccessResponse = (message, data) => {
  return { success: true, message, data, error: {} };
};

module.exports = { buildSuccessResponse };
