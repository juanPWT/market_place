import storeModel from "../models/storeModel.js";
import { generateToken } from "../utils/randomToken.js";
import bcrypt from "bcrypt";
const saltRound = process.env.SALT_ROUND;

//development
export const register = async (req, res) => {
  const { storename, password, address, category, email } = req.body;
  if (!storename && !password && !address && !category && !category && !email) {
    return res.status(401).json({ messege: "attribut must be filled" });
  }
  const salt = await bcrypt.genSalt(saltRound);
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    const store = await storeModel.create({
      storename: storename,
      password: hashPassword,
      address: address,
      category: category,
      email: email,
    });

    return res
      .status(200)
      .json({ data: store, messege: "succes register store" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ messege: "server failed on register" });
  }
};
