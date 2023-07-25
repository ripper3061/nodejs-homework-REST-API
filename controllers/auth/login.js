const { User } = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const { JWT_SECRET } = process.env;

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const storedUser = await User.findOne({
      email,
    });

    if (!storedUser) {
      return next(
        res.status(401).json({ message: "Email or password is wrong" })
      );
    }

    if (!storedUser.verify) {
      return next(res.status(401).json({ message: "Email is not verified" }));
    }

    const isPasswordValid = await bcrypt.compare(password, storedUser.password);

    if (!isPasswordValid) {
      return next(
        res.status(401).json({ message: "Email or password is wrong" })
      );
    }

    const payload = { id: storedUser._id };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

    await User.findByIdAndUpdate(storedUser._id, { token });

    return res.json({
      token,
      user: {
        email,
        subscription: storedUser.subscription,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
};
