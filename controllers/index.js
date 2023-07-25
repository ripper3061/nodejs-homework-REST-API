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
} = require("./auth");

module.exports = {
  register,
  login,
  logout,
  current,
  updateSubscription,
  updateUserAvatar,
  verifyEmail,
  getListContactsController,
  getContactByIdController,
  deleteContactController,
  createNewContactController,
  updateContactController,
  updateStatusContactController,
};
