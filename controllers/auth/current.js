const current = async (req, res, next) => {
  try {
    const { user } = req;

    if (!user) {
      return next(res.status(401).json({ message: "Not authorized" }));
    }

    const { email, subscription } = user;
    return res.status(200).json({
      user: {
        email,
        subscription,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  current,
};
