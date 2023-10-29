import mongoose, { Schema } from "mongoose";

const falshSaleSchema = new mongoose.Schema({
  store: {
    type: Schema.Types.ObjectId,
    ref: "stores",
    required: true,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "products",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

const flashSale = mongoose.model("flashSales", falshSaleSchema);

export default flashSale;
