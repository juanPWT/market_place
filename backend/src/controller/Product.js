import productModel from "../models/productModel.js";
import storeModel from "../models/storeModel.js";
import uploadProductCover from "../middleware/uploadProductCover.js";

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

        res
          .status(200)
          .json({ data: product, messege: "success create product" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ messege: "cannot create product" });
    }
  });
};

export const getAllProduct = async (req, res) => {
  try {
    const product = await productModel.find();
    const result2 = await Promise.all(
      product.map(async (data) => {
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

    res
      .status(200)
      .json({ data: result2, messege: "success get all data product" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ messege: "failed find all data product" });
  }
};

export const getProductByStore = async (req, res) => {
  const { storeId } = req.params;
  if (!storeId) {
    res.status(401).json({ messege: "store id required", status: "failed" });
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

    res.status(200).json({
      messege: "success get product by store",
      data: { productAll, store },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ messege: "server error", status: "failde server" });
  }
};
