const {
  getListContactsController,
  getContactByIdController,
  deleteContactController,
  createNewContactController,
  updateContactController,
  updateStatusContactController,
} = require("./contacts");

const {
  register,
  login,
  logout,
  current,
  updateSubscription,
  updateUserAvatar,
  verifyEmail,
  resendVerifyEmail,
} = require("./auth");

module.exports = {
  register,
  login,
  logout,
  current,
  updateSubscription,
  updateUserAvatar,
  verifyEmail,
  resendVerifyEmail,
  getListContactsController,
  getContactByIdController,
  deleteContactController,
  createNewContactController,
  updateContactController,
  updateStatusContactController,
};
