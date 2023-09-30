import mongoose from "mongoose";

const addresSchema = mongoose.Schema({
  state: String,
  city: String,
});

const userSchema = new mongoose.Schema({
  username: String,
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: addresSchema,
  favorit: [String],
  phoneNumber: {
    type: Number,
    maxLength: 13,
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    immutable: true,
    type: Date,
    default: () => Date.now(),
  },
});

const userModel = mongoose.model("users", userSchema);

export default userModel;
