const {
    listContacts,
    getContactById,
    addContact,
    removeContact,
    updateContact,
  } = require('../models/contacts');

  const getListContactsController = async (req, res, next) => {
    const contacts = await listContacts();
    res.status(200).json(contacts);
  }
  
const getContactByIdController =  async (req, res, next) => {
    try {
      const { contactId } = req.params;
      const contactById = await getContactById(contactId);
      if (!contactById) {
        return res.status(404).json({ message: 'Not Found' })
      }
      return res.status(200).json(contactById);
    } catch (error) {
      next(error);
    }
  }
  
  const createNewContactController = async (req, res, next) => {
    try {
      const { name, email, phone } = req.body;
      if (!name || !email || !phone) {
        return res.status(400).json({ message: 'missing required name field' })
      }
      const newContact = await addContact({ name, email, phone });
      res.status(201).json(newContact);
    } catch (error) {
      next(error);
    }
  }
  
  const deleteContactController =  async (req, res, next) => {
    try {
      const { contactId } = req.params;
      const contactById = await getContactById(contactId);
      if (!contactById) {
        return res.status(404).json({ message: "Not found" })
      }
      await removeContact(contactId);
      return res.status(200).json({ message: "contact deleted" });
    } catch (error) {
      next(error);
    }
  }
  
  const updateContactController =async (req, res, next) => {
    try {
      const { name, email, phone } = req.body;
      if (!name || !email || !phone) {
        return next(res.status(400).json({ message: "missing fields" }));
      }
      const { contactId } = req.params;
      const contactById = await getContactById(contactId);
      if (!contactById) {
        return next(res.status(404).json({ message: "Not found" }));
      }
      const updatedContact = await updateContact(contactId, {
        name,
        email,
        phone,
      });
      return res.status(200).json(updatedContact);
    } catch (error) {
      next(error);
    }
  }

  module.exports = {
    getListContactsController,
    getContactByIdController,
    deleteContactController,
    createNewContactController,
    updateContactController,
  };