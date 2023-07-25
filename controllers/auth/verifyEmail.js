const { User } = require("../../models/user");

const verifyEmail = async (req, res, next) => {
  try {
    const { verificationToken } = req.params;
    const user = await User.findOne({ verificationToken });
    if (!user) {
      return next(res.status(404).json({ message: "User not found" }));
    }

    await User.findByIdAndUpdate(user._id, {
      verify: true,
      verificationToken: null,
    });
    return res.status(200).json({
      message: "Verification successful",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  verifyEmail,
};
