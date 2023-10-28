import axios from "axios";

export const getAllProduct = async () => {
  try {
    const produk = await axios.get("http://localhost:3001/product");
    return produk.data.data;
  } catch (err) {
    console.log(err);
  }
};
