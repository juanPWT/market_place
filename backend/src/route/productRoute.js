import express from "express";
import {
  createProduct,
  getAllProduct,
  getProductByStore,
} from "../controller/Product.js";

const route = express.Router();

route.get("/", getAllProduct);
route.get("/:storeId", getProductByStore);
route.post("/:store", createProduct);

export default route;
