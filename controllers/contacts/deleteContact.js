const Contact = require("../../models/contacts");

const deleteContactController = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contactById = await Contact.findById(contactId);
    if (!contactById) {
      return res.status(404).json({ message: "Not found" });
    }
    await Contact.findByIdAndRemove(contactId);
    return res.status(200).json({ message: "contact deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  deleteContactController,
};
