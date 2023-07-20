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
} = require("./auth");

module.exports = {
  register,
  login,
  logout,
  current,
  updateSubscription,
  updateUserAvatar,
  getListContactsController,
  getContactByIdController,
  deleteContactController,
  createNewContactController,
  updateContactController,
  updateStatusContactController,
};
