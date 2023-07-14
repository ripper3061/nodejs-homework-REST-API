const {
  getListContactsController,
  getContactByIdController,
  deleteContactController,
  createNewContactController,
  updateContactController,
  updateStatusContactController,
} = require("./contacts");

const { register, login } = require("./auth");

module.exports = {
  register,
  login,
  getListContactsController,
  getContactByIdController,
  deleteContactController,
  createNewContactController,
  updateContactController,
  updateStatusContactController,
};
