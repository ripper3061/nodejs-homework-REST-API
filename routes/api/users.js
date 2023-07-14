const express = require("express");
const { register, login } = require("../../controllers");
const { validateRequestBody } = require("../../middlewares");
const { userValidateSchema } = require("../../schemas/userSchema");

const userRouter = express.Router();

userRouter.post("/register", validateRequestBody(userValidateSchema), register);
userRouter.post("/login", validateRequestBody(userValidateSchema), login);

module.exports = {
  userRouter,
};
