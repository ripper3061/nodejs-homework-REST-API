const Contact = require("../../models/contacts");

const getContactByIdController = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contactById = await Contact.findById(contactId);
    if (!contactById) {
      return res.status(404).json({ message: "Not Found" });
    }
    return res.status(200).json(contactById);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getContactByIdController,
};
