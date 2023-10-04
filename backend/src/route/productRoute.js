import express from "express";
import { createProduct, getAllProduct } from "../controller/Product.js";

const route = express.Router();

route.get("/", getAllProduct);
route.post("/:store", createProduct);

export default route;
