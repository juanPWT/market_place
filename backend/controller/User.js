import userModel from "../models/userModel.js";

export const getAllUsers = async (req, res) => {
  const users = await userModel
    .find()
    .select("username")
    .select("email")
    .select("address")
    .select("favorit")
    .select("phoneNumber")
    .select("createdAt")
    .select("updatedAt");
  res.status(200).json({ data: users, msg: "success get data users" });
};

export const register = async (req, res) => {
  const { username, password, email, address, favorit, phoneNumber } = req.body;
  try {
    const users = await userModel.create({
      username: username,
      email: email,
      password: password,
      address: address,
      favorit: favorit,
      phoneNumber: phoneNumber,
    });
    res.status(200).json({ data: users, msg: "success post data users" });
  } catch (error) {
    res.status(500).json({ msg: "failed to post data users" });
  }
};
