const express = require("express");
const {
  getListContactsController,
  getContactByIdController,
  deleteContactController,
  createNewContactController,
  updateContactController,
  updateStatusContactController,
} = require("../../controllers");
const { validateRequestBody } = require("../../middlewares");
const {
  contactSchema,
  updateStatusContactSchema,
} = require("../../schemas/contactSchema.js");

const contactsRouter = express.Router();

contactsRouter.get("/", getListContactsController);

contactsRouter.get("/:contactId", getContactByIdController);

contactsRouter.post(
  "/",
  validateRequestBody(contactSchema),
  createNewContactController
);

contactsRouter.delete("/:contactId", deleteContactController);

contactsRouter.put(
  "/:contactId",
  validateRequestBody(contactSchema),
  updateContactController
);

contactsRouter.patch(
  "/:contactId/favorite",
  validateRequestBody(updateStatusContactSchema),
  updateStatusContactController
);

module.exports = {
  contactsRouter,
};
