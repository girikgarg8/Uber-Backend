const buildSuccessResponse = (message, data) => {
  return { success: true, message, data, error: null };
};

module.exports = { buildSuccessResponse };
