import mongoose from "mongoose";
import express from "express";
import dotEnv from "dotenv";
import cors from "cors";

//route
import userRoute from "./src/route/userRoute.js";
import storeRoute from "./src/route/storeRoute.js";
import productRoute from "./src/route/productRoute.js";

// app init
dotEnv.config({ path: "./vars/.env" });
const app = express();
app.use(express.json());
app.use(cors());

//api execute
app.use("/user", userRoute);
app.use("/store", storeRoute);
app.use("/product", productRoute);

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
