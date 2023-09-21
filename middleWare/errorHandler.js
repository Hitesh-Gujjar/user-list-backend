const { constants } = require("../constants");
const errorHandle = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        status: statusCode,
        title: "Validation failed",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case constants.SERVER_ERROR:
      res.json({
        title: "server error",
        status: statusCode,
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case constants.NOT_FOUND:
      res.json({
        title: "not found",
        status: statusCode,
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case constants.FORBIDDEN:
      res.json({
        title: "forbidden error",
        status: statusCode,
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case constants.UNAUTHORIZED:
      res.json({
        title: "unauthorized found",
        status: statusCode,
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    default:
      break;
  }

  next();
};


module.exports = errorHandle;
