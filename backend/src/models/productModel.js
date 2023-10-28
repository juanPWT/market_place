import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  stok: {
    type: Number,
    required: true,
  },

  store: {
    type: Schema.Types.ObjectId,
    ref: "stores",
  },

  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    Text: true,
  },
  imageCover: String,
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

const productModel = mongoose.model("products", productSchema);

export default productModel;
