const { User } = require("../../models/user");
const bcrypt = require("bcrypt");

const register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const savedUser = await User.create({
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      user: {
        email,
        subscription: savedUser.subscription,
      },
    });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error")) {
      return next(res.status(409).json({ message: "Email in use" }));
    }
    next(error);
  }
};

module.exports = {
  register,
};
