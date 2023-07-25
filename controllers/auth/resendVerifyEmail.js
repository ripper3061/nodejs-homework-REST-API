const { User } = require("../../models/user");
const { sendMailNodemailer } = require("../../services/email");

const resendVerifyEmail = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return next(res.status(404).json({ message: "User not found" }));
    }

    if (user.verify) {
      return next(
        res
          .status(400)
          .json({ message: "Verification has already been passed" })
      );
    }

    const mail = {
      to: email,
      subject: "Please confirm your email",
      html: `<a href="http://localhost:3000/api/users/verify/${user.verificationToken}" target="_blank">Confirm your email</a>`,
    };
    await sendMailNodemailer(mail);

    return res.status(200).json({
      message: "Verification email sent",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  resendVerifyEmail,
};
