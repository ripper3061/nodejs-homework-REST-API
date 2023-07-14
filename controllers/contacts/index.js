const { getListContactsController } = require("./getListContacts");
const { getContactByIdController } = require("./getContactById");
const { createNewContactController } = require("./createNewContact");
const { deleteContactController } = require("./deleteContact");
const { updateContactController } = require("./updateContact");
const { updateStatusContactController } = require("./updateStatusContact");

module.exports = {
  getListContactsController,
  getContactByIdController,
  createNewContactController,
  deleteContactController,
  updateContactController,
  updateStatusContactController,
};
