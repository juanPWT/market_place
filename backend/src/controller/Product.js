import productModel from "../models/productModel.js";
import storeModel from "../models/storeModel.js";
import uploadProductCover from "../middleware/uploadProductCover.js";
import { suffleArray } from "../utils/suffleArray.js";

//development
export const createProduct = async (req, res) => {
  uploadProductCover(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ messege: "failed upload image server" });
    }

    const { store } = req.params;
    const { name, stok, price, description } = req.body;
    const imageCover = req.file ? req.file.filename : "default.png";
    if (!store) {
      return res.status(401).json({ messege: "id store is require" });
    }
    try {
      const validationIdStore = await storeModel
        .find()
        .where("_id")
        .equals(store);
      if (!validationIdStore) {
        return res.status(404).json({ messege: "id store not found" });
      } else {
        const product = await productModel.create({
          name: name,
          stok: stok,
          price: price,
          description: description,
          store: store,
          imageCover: imageCover,
        });

        return res
          .status(200)
          .json({ data: product, messege: "success create product" });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({ messege: "cannot create product" });
    }
  });
};

export const getAllProduct = async (req, res) => {
  try {
    const product = await productModel.find();

    const suffleProducts = suffleArray(product);
    const result2 = await Promise.all(
      suffleProducts.map(async (data) => {
        if (data.imageCover) {
          data.imageCover = `http://localhost:3001/products/cover/${data.imageCover}`;
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
      .json({ data: result2, messege: "success get all data product" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ messege: "failed find all data product" });
  }
};

export const getProductDetail = async (req, res) => {
  const { productId } = req.params;
  if (!productId) {
    return res
      .status(401)
      .json({ messege: "product id required", status: "failed" });
  }
  try {
    const getProductId = await productModel.findById(productId);
    const getStoreId = await storeModel
      .findById(getProductId.store)
      .select("_id")
      .select("storename")
      .select("address")
      .select("category")
      .select("email");
    if (!getProductId && !getStoreId) {
      return res.status(404).json({
        status: "not found",
        messege: "data product nd store not found",
      });
    }

    getProductId.imageCover = `http://localhost:3001/products/cover/${getProductId.imageCover}`;

    return res.status(200).json({
      messege: "success get data product by id",
      data: { product: getProductId, store: getStoreId },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      messege: "server error get product by id",
      status: "failde server",
    });
  }
};

export const getProductByStore = async (req, res) => {
  const { storeId } = req.params;
  if (!storeId) {
    return res
      .status(401)
      .json({ messege: "store id required", status: "failed" });
  }
  try {
    const [productByStore, store] = await Promise.all([
      productModel.find().where("store").equals(storeId).exec(),
      storeModel.findById(storeId),
    ]);

    const productAll = productByStore.map((data) => {
      if (data.imageCover) {
        data.imageCover = `http://localhost:3001/products/cover/${data.imageCover}`;
      }
      return data;
    });

    return res.status(200).json({
      messege: "success get product by store",
      data: { productAll, store },
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ messege: "server error", status: "failde server" });
  }
};
