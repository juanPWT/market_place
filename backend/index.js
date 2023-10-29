import mongoose from "mongoose";
import express from "express";
import dotEnv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

//route
import userRoute from "./src/route/userRoute.js";
import storeRoute from "./src/route/storeRoute.js";
import productRoute from "./src/route/productRoute.js";
import flashSaleRoute from "./src/route/flashSaleRoute.js";

// app init
dotEnv.config({ path: "./vars/.env" });
const app = express();
app.use(express.json());
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));

//api execute
app.use("/user", userRoute);
app.use("/store", storeRoute);
app.use("/product", productRoute);
app.use("/flashSale", flashSaleRoute);

//db init
mongoose
  .connect(process.env.URL_DB)
  .then(() => {
    //server
    app.listen(3001, () => {
      console.log("connected to db &  server running!!");
    });
  })
  .catch((err) => console.log(err));
