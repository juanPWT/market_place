import express from "express";
import { getAllUsers, register, login } from "../controller/User.js";

//middlewares
import { checkDublicateUser } from "../middleware/verifyRegister.js";

const route = express.Router();

route.get("/", getAllUsers);
route.post("/", checkDublicateUser, register);
route.post("/login", login);

export default route;
