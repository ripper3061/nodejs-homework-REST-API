const express = require("express");
const { register } = require("../../controllers");
const { validateRequestBody } = require("../../middlewares");
const { userValidateSchema } = require("../../schemas/userSchema");

const userRouter = express.Router();

userRouter.post("/register", validateRequestBody(userValidateSchema), register);

module.exports = {
  userRouter,
};
