import express from "express";
import { getAllUsers, register } from "../controller/User.js";

const route = express.Router();

route.get("/", getAllUsers);
route.post("/", register);

export default route;
