const { User } = require("../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { JWT_SECRET } = process.env;

const validateRequestBody = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return next(res.status(400).json({ message: "Bad Request" }));
    }

    return next();
  };
};

const auth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || "";
    const [type, token] = authHeader.split(" ");

    if (type !== "Bearer" || !token) {
      return next(res.status(401).json({ message: "Not authorized" }));
    }
    const { id } = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(id);

    req.user = user;
  } catch (error) {
    if (
      error.name === "TokenExpiredError" ||
      error.name === "JsonWebTokenError" ||
      error.message.includes("Unexpected token")
    ) {
      return next(res.status(401).json({ message: "Not authorized" }));
    }
    return next(error);
  }

  return next();
};

const checkUpdateSubscriptionRequest = (req, res, next) => {
  const { subscription } = req.body;

  if (
    !subscription ||
    (subscription !== "starter" &&
      subscription !== "pro" &&
      subscription !== "business")
  ) {
    return next(
      res.status(400).json({
        message:
          "Subscription must be one of the following values: 'starter', 'pro', 'business' !",
      })
    );
  }

  return next();
};

module.exports = {
  validateRequestBody,
  auth,
  checkUpdateSubscriptionRequest,
};
