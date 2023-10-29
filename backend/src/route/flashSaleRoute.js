import express from "express";
import {
  createFlashSale,
  getAllProductsFlashSale,
} from "../controller/FlashSale.js";
const route = express.Router();

route.post("/:storeId", createFlashSale);
route.get("/", getAllProductsFlashSale);

export default route;
