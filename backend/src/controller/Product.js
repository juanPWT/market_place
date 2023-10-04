import productModel from "../models/productModel.js";

//development
export const createProduct = async (req, res) => {
  const { name, stok, price, description } = req.body;
  const { store } = req.params;
  if (!store) {
    return res.status(401).json({ messege: "id store is require" });
  }
  try {
    const product = await productModel.create({
      name: name,
      stok: stok,
      price: price,
      description: description,
      store: store,
    });

    res.status(200).json({ data: product, messege: "success create product" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ messege: "cannot create product" });
  }
};

export const getAllProduct = async (req, res) => {
  try {
    const product = await productModel.find();
    res
      .status(200)
      .json({ data: product, messege: "success get all data product" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ messege: "failed find all data product" });
  }
};
