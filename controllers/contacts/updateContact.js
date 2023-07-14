const Contact = require("../../models/contacts");

const updateContactController = async (req, res, next) => {
  try {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      return next(res.status(400).json({ message: "missing fields" }));
    }
    const { contactId } = req.params;
    const contactById = await Contact.findById(contactId);
    if (!contactById) {
      return next(res.status(404).json({ message: "Not found" }));
    }
    const updatedContact = await Contact.findByIdAndUpdate(
      contactId,
      {
        name,
        email,
        phone,
      },
      { new: true }
    );
    return res.status(200).json(updatedContact);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  updateContactController,
};
