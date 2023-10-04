import userModel from "../models/userModel.js";
import { generateToken } from "../utils/randomToken.js";
import bcrypt from "bcrypt";
const saltRound = process.env.SALT_ROUND;

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
  if (!username && !email && !password && !address) {
    return res.status(404).json({ msg: "please fill the attribut register" });
  }
  const salt = await bcrypt.genSalt(saltRound);
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    const users = await userModel.create({
      username: username,
      email: email,
      password: hashPassword,
      address: address,
      favorit: favorit,
      phoneNumber: phoneNumber,
    });
    res.status(200).json({ data: users, msg: "success post data users" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "failed to post data users" });
  }

  //note
  //di frontend harus ada confirm password
};

//development
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const users = await userModel.findOne({ email: email });
    //email validation
    if (!users) return res.status(404).json({ msg: "email not register yet" });
    //password validation
    const matchPw = await bcrypt.compare(password, users.password);
    if (!matchPw) return res.status(404).json({ msg: "password wrong" });

    //token init
    const token = generateToken(45);

    res.status(200).json({ token: token, msg: "success login" });
  } catch (err) {
    res.status(500).json({ msg: "server failed" });
  }
};
