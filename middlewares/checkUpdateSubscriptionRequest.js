const checkUpdateSubscriptionRequest = (req, res, next) => {
  const { subscription } = req.body;

  if (
    !subscription ||
    (subscription !== "starter" &&
      subscription !== "pro" &&
      subscription !== "business")
  ) {
    return next(
      res.status(400).json({
        message:
          "Subscription must be one of the following values: 'starter', 'pro', 'business' !",
      })
    );
  }

  return next();
};

module.exports = {
  checkUpdateSubscriptionRequest,
};
