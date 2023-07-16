const express = require("express");
const {
  register,
  login,
  logout,
  current,
  updateSubscription,
} = require("../../controllers");
const {
  validateRequestBody,
  auth,
  checkUpdateSubscriptionRequest,
} = require("../../middlewares");
const { userValidateSchema } = require("../../schemas/userSchema");

const userRouter = express.Router();

userRouter.post("/register", validateRequestBody(userValidateSchema), register);
userRouter.post("/login", validateRequestBody(userValidateSchema), login);
userRouter.get("/logout", auth, logout);
userRouter.get("/current", auth, current);
userRouter.patch("/", auth, checkUpdateSubscriptionRequest, updateSubscription);

module.exports = {
  userRouter,
};
