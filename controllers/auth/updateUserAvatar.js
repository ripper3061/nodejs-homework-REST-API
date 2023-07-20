const { User } = require("../../models/user");
const path = require("path");
const fs = require("fs").promises;

const updateUserAvatar = async (req, res, next) => {
  try {
    const { filename } = req.file;
    const tmpPath = path.resolve(__dirname, "../../tmp", filename);
    const publicPath = path.resolve(
      __dirname,
      "../../public/avatars",
      filename
    );

    try {
      await fs.rename(tmpPath, publicPath);
    } catch (error) {
      await fs.unlink(tmpPath);
      throw error;
    }

    const id = req.user._id;
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { avatarURL: `avatars/${filename}` },
      { new: true }
    );

    return res.status(200).json({
      user: {
        avatarURL: updatedUser.avatarURL,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  updateUserAvatar,
};
