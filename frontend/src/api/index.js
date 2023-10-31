import axios from "axios";

export const getAllProduct = async () => {
  try {
    const produk = await axios.get("http://localhost:3001/product");
    return produk.data.data;
  } catch (err) {
    console.log(err);
  }
};

export const getAllProductFlashSale = async () => {
  try {
    const produkFlashsale = await axios.get("http://localhost:3001/flashSale");
    return produkFlashsale.data.data;
  } catch (err) {
    console.log(err);
  }
};

export const getDetailProduct = async (id) => {
  try {
    const detailProduck = await axios.get(
      `http://localhost:3001/product/detail/${id}`
    );
    return detailProduck.data;
  } catch (error) {
    console.log(error);
  }
};
