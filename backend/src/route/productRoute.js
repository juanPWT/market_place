import express from "express";
import {
  createProduct,
  getAllProduct,
  getProductByStore,
  getProductDetail,
} from "../controller/Product.js";

const route = express.Router();

route.get("/", getAllProduct);
route.get("/store/:storeId", getProductByStore);
route.get("/detail/:productId", getProductDetail);
route.post("/:store", createProduct);

export default route;
