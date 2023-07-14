const express = require('express')
const {
  getListContactsController,
  getContactByIdController,
  deleteContactController,
  createNewContactController,
  updateContactController,
  updateStatusContactController,
} = require("../../controllers/contactsControllers");
const { validateRequestBody } = require("../../middlewares");
const {
  contactSchema,
  updateStatusContactSchema,
} = require("../../schemas/contactSchema.js");

const router = express.Router()

router.get('/', getListContactsController)

router.get('/:contactId', getContactByIdController)

router.post('/', validateRequestBody(contactSchema), createNewContactController)

router.delete('/:contactId', deleteContactController)

router.put('/:contactId', validateRequestBody(contactSchema), updateContactController)

router.patch(
  "/:contactId/favorite", validateRequestBody(updateStatusContactSchema), updateStatusContactController)

module.exports = router
