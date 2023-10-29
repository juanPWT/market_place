import flashSale from "../models/flashSaleModel.js";
import productModel from "../models/productModel.js";
import storeModel from "../models/storeModel.js";

export const createFlashSale = async (req, res) => {
  const { storeId } = req.params;
  const { productId, discount } = req.body;
  if (!storeId) {
    return res.status(404).json({
      messege: "failed create flsh sale because store id required",
      status: "failed",
    });
  }

  try {
    const postDataFS = await flashSale.create({
      store: storeId,
      product: productId,
      amount: discount,
    });

    return res.status(201).json({
      status: "success",
      messege: "success create flash sale product ",
      data: postDataFS,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      messege: "cannot create flash sale error server",
      status: "server error",
    });
  }
};

export const getAllProductsFlashSale = async (req, res) => {
  try {
    const getFlashSale = await flashSale.find();
    const result = await Promise.all(
      getFlashSale.map(async (data) => {
        if (data.product) {
          const getProduct = await productModel.findById(data.product);

          getProduct.imageCover = `http://localhost:3001/products/cover/${getProduct.imageCover}`;
          data.product = getProduct;
        }

        if (data.store) {
          const getStore = await storeModel
            .findById(data.store)
            .select("storename")
            .select("address")
            .select("category")
            .select("email");
          data.store = getStore;
        }

        return data;
      })
    );

    return res
      .status(200)
      .json({ messege: "success get data product flash sale", data: result });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "server error",
      messege: "failde get data product flash sale server failed",
    });
  }
};
