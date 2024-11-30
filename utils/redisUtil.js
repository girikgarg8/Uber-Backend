const redis = require("redis");
const AppConfig = require("../config/appConfig");

const redisClient = redis.createClient({
  url: AppConfig.REDIS_URI,
});

redisClient.on("connect", () => {
  console.log("Connected to Redis");
});

redisClient.on("error", (error) => {
  console.error("Redis connection error: ", error);
});

const connectToRedisServer = () => redisClient.connect();

module.exports = { connectToRedisServer };
