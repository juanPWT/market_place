import userModel from "../models/userModel.js";

export const checkDublicateUser = async (req, res, next) => {
  const username = await userModel.findOne({ username: req.body.username });
  if (username) {
    res.status(404).json({ msg: "username already use" });
    return;
  }
  const email = await userModel.findOne({ email: req.body.email });
  if (email) {
    res.status(404).json({ msg: "email already use" });
    return;
  }
  next();
};
