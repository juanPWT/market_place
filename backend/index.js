import mongoose from "mongoose";
import express from "express";
import dotEnv from "dotenv";
import usersRoute from "./route/usersRoute.js";

// app init
dotEnv.config();
const app = express();
app.use(express.json());

//api execute
app.use("/users", usersRoute);

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
