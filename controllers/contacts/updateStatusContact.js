const Contact = require("../../models/contacts");

const updateStatusContactController = async (req, res, next) => {
  try {
    const { favorite } = req.body;
    if (!("favorite" in req.body)) {
      return next(res.status(404).json({ message: "missing field favorite" }));
    }

    const { contactId } = req.params;
    const contactById = await Contact.findById(contactId);
    if (!contactById) {
      return next(res.status(404).json({ message: "Not found" }));
    }

    const updatedStatusContact = await Contact.findByIdAndUpdate(
      contactId,
      { favorite },
      { new: true }
    );
    return res.status(200).json(updatedStatusContact);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  updateStatusContactController,
};
