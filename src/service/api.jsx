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

export const deleteProduct = async (id) => {
  try {
    return await axios.delete(`${ProductAPI_URL}/${id}`);
  } catch (e) {
    console.log("Error deleting user", e.message);
  }
};

export const getSingleProduct= async (data) => {
  try {
    return await axios.get(`${ProductAPI_URL}/${data}`);
  } catch (error) {
    console.error(error);
  }
};

export const editProductDetail = async (data, id) => {
  try {
    return await axios.put(`${ProductAPI_URL}/${id}`, data);
  } catch (e) {
    console.log("Error while ", e.message);
  }
};