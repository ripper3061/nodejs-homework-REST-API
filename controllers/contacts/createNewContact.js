const Contact  = require("../../models/contacts");

const createNewContactController = async (req, res, next) => {
    try {
      const { name, email, phone } = req.body;
     
      if (!name || !email || !phone) {
        return res.status(400).json({ message: 'missing required name field' })
      }
      console.log(Contact.create)
      const newContact = await Contact.create({ name, email, phone });
      res.status(201).json(newContact);
    } catch (error) {
      next(error);
    }
  }

  module.exports = {
    createNewContactController,
  };