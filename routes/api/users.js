const express = require("express");
const {
  register,
  login,
  logout,
  current,
  updateSubscription,
  updateUserAvatar,
  verifyEmail,
  resendVerifyEmail,
} = require("../../controllers");
const {
  validateRequestBody,
  auth,
  checkUpdateSubscriptionRequest,
  upload,
} = require("../../middlewares");
const {
  userValidateSchema,
  verifyEmailSchema,
} = require("../../schemas/userSchema");

const userRouter = express.Router();

userRouter.post("/register", validateRequestBody(userValidateSchema), register);
userRouter.get("/verify/:verificationToken", verifyEmail);
userRouter.post(
  "/verify",
  validateRequestBody(verifyEmailSchema),
  resendVerifyEmail
);
userRouter.post("/login", validateRequestBody(userValidateSchema), login);
userRouter.get("/logout", auth, logout);
userRouter.get("/current", auth, current);
userRouter.patch("/", auth, checkUpdateSubscriptionRequest, updateSubscription);
userRouter.patch("/avatars", auth, upload.single("avatar"), updateUserAvatar);

module.exports = {
  userRouter,
};
