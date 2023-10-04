import mongoose from "mongoose";

const addressSchema = mongoose.Schema({
  state: String,
  city: String,
  block: String,
});

const storeSchema = new mongoose.Schema({
  storename: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: addressSchema,
  category: [],
  email: {
    type: String,
    Lowercase: true,
    required: true,
  },
  refreshToken: String,
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

const storeModel = mongoose.model("stores", storeSchema);

export default storeModel;
