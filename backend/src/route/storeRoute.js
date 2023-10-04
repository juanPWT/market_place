import express from "express";
import { register } from "../controller/Store.js";

const route = express.Router();

route.post("/", register);

export default route;
