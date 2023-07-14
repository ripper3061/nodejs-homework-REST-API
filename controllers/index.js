const {
  getListContactsController,
  getContactByIdController,
  deleteContactController,
  createNewContactController,
  updateContactController,
  updateStatusContactController,
} = require("./contacts");

const { register } = require("./auth");

module.exports = {
  register,
  getListContactsController,
  getContactByIdController,
  deleteContactController,
  createNewContactController,
  updateContactController,
  updateStatusContactController,
};
