const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const { dbUtil, redisUtil } = require("./utils");
const AppConfig = require("./config/appConfig");
const { errorHandler } = require("./middlewares");
const apiRoutes = require("./routes");


const limiter = rateLimit({
  windowMs: 2 * 60 * 1000,
  max: 10 // in every 2 minutes window, maximum of 3 requests can be sent from an IP
});

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(limiter);

app.use("/api", apiRoutes);

app.use(errorHandler); // the last middleware, if the previous middlewares throw any error, this middleware will take care

app.listen(AppConfig.PORT, async () => {
  await dbUtil.connectToDB();
  await redisUtil.connectToRedisServer();
  console.log(`Started the server on port: ${AppConfig.PORT}`);
});
