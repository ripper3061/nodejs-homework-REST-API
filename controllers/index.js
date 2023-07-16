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
} = require("./auth");

module.exports = {
  register,
  login,
  logout,
  current,
  updateSubscription,
  getListContactsController,
  getContactByIdController,
  deleteContactController,
  createNewContactController,
  updateContactController,
  updateStatusContactController,
};
