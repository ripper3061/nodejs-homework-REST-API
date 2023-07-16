const express = require("express");
const { register, login, logout } = require("../../controllers");
const { validateRequestBody, auth } = require("../../middlewares");
const { userValidateSchema } = require("../../schemas/userSchema");

const userRouter = express.Router();

userRouter.post("/register", validateRequestBody(userValidateSchema), register);
userRouter.post("/login", validateRequestBody(userValidateSchema), login);
userRouter.get("/logout", auth, logout);

module.exports = {
  userRouter,
};
