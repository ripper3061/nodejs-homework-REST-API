const { User } = require("../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { JWT_SECRET } = process.env;

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

module.exports = {
  auth,
};
