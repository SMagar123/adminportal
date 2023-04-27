import axios from "axios";
const ProductAPI_URL = "http://127.0.0.1:3006/products";
export const addProductList = async (data) => {
  try {
    return await axios.post(ProductAPI_URL, data);
  } catch (e) {
    console.log("Error while ", e.message);
  }
};
export const getProducts = async () => {
  try {
    return await axios.get(ProductAPI_URL);
  } catch (error) {
    console.error(error);
  }
};
