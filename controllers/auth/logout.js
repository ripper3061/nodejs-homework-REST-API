const { User } = require("../../models/user");

const logout = async (req, res, next) => {
  try {
    const id = req.user._id;
    const user = await User.findById(id);
    if (!user) {
      return next(res.status(401).json({ message: "Not authorized" }));
    }
    const logoutUser = await User.findByIdAndUpdate(id, { token: null });
    console.log(logoutUser);
    return res.status(204).json(logoutUser);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  logout,
};
