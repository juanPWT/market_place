import mongoose from "mongoose";
import express from "express";
import dotEnv from "dotenv";
import usersRoute from "./route/usersRoute.js";

// app init
dotEnv.config();
const app = express();
app.use(express.json());

//db init
mongoose.connect(process.env.URL_DB);

const db = mongoose.connection;

db.on("error", (error) => {
  console.log("failed to connect", error);
});

db.once("connected", () => {
  console.log("Database Connected");
});

//api execute
app.use("/users", usersRoute);

//server
app.listen(3001, () => {
  console.log("server running!!");
});
