const { register } = require("./register");
const { login } = require("./login");
const { logout } = require("./logout");
const { current } = require("./current");
const { updateSubscription } = require("./subscription");
const { updateUserAvatar } = require("./updateUserAvatar");
const { verifyEmail } = require("./verifyEmail");
const { resendVerifyEmail } = require("./resendVerifyEmail");

module.exports = {
  register,
  login,
  logout,
  current,
  updateSubscription,
  updateUserAvatar,
  verifyEmail,
  resendVerifyEmail,
};
