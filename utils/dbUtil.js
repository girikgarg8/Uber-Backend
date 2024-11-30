const mongoose = require("mongoose");
const AppConfig = require("../config/appConfig");

const connectToDB = async () => {
  try {
    await mongoose.connect(AppConfig.MONGO_URI);
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error: ", error);
    process.exit(1);
  }
};

module.exports = { connectToDB };
