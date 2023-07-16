const express = require("express");
const {
  getListContactsController,
  getContactByIdController,
  deleteContactController,
  createNewContactController,
  updateContactController,
  updateStatusContactController,
} = require("../../controllers");
const { validateRequestBody, auth } = require("../../middlewares");
const {
  contactSchema,
  updateStatusContactSchema,
} = require("../../schemas/contactSchema.js");

const contactsRouter = express.Router();

contactsRouter.get("/", auth, getListContactsController);

contactsRouter.get("/:contactId", auth, getContactByIdController);

contactsRouter.post(
  "/",
  auth,
  validateRequestBody(contactSchema),
  createNewContactController
);

contactsRouter.delete("/:contactId", auth, deleteContactController);

contactsRouter.put(
  "/:contactId",
  auth,
  validateRequestBody(contactSchema),
  updateContactController
);

contactsRouter.patch(
  "/:contactId/favorite",
  auth,
  validateRequestBody(updateStatusContactSchema),
  updateStatusContactController
);

module.exports = {
  contactsRouter,
};
