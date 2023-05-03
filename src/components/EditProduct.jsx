import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { getSingleProduct, editProductDetail } from "../service/api";
const initialProduct = {
  title: "",
  description: "",
  price: "",
  discountPercentage: "",
  rating: "",
  stock: "",
  brand: "",
  category: "",
  thumbnail: "",
  images: [],
};
const formField = [
  "Title",
  "Description",
  "Price",
  "Rating",
  "Stock",
  "Brand",
  "Category",
];
export const EditProduct = () => {
  const navigate = useNavigate();
  const [productList, setProductList] = useState(initialProduct);
  const { id } = useParams();

  useEffect(() => {
    getSingleProductDetail();
  }, []);

  const getSingleProductDetail = async () => {
    let response = await getSingleProduct(id);
    setProductList(response.data);
  };

  const handleUpdatingProduct = (e) => {
    setProductList({ ...productList, [e.target.name]: e.target.value });
  };
  const handleAddingThumbnail = (e) => {
    console.log(e.target.files);
    console.log(e.target.files[0].name);
    productList.thumbnail = e.target.files[0].name;
  };
  const handleAddingImage = (e) => {
    productList.images.push(`images/${e.target.files[0].name}`);
  };
  const notify = () => {
    toast.success("Product edited successfully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const editProduct = () => {
    editProductDetail(productList, id);
    notify();
    navigate("/Product");
  };

  return (
    <div className="addproduct">
      <div className="addproduct__form">
        <h2>Edit Product Information</h2>
        <form onSubmit={editProduct}>
          <div className="form-data">
            <label htmlFor="Title">Title</label>
            <input
              type="text"
              onChange={(e) => handleUpdatingProduct(e)}
              placeholder={`Enter Title`}
              name={`title`}
              value={productList.title}
              required
            />
          </div>
          <div className="form-data">
            <label htmlFor="Description">Description</label>
            <input
              type="text"
              onChange={(e) => handleUpdatingProduct(e)}
              placeholder={`Enter Description`}
              name={`description`}
              value={productList.description}
              required
            />
          </div>
          <div className="form-data">
            <label htmlFor="Price">Price</label>
            <input
              type="text"
              onChange={(e) => handleUpdatingProduct(e)}
              placeholder={`Enter Price`}
              name={`price`}
              value={productList.price}
              required
            />
          </div>
          <div className="form-data">
            <label htmlFor="Rating">Rating</label>
            <input
              type="text"
              onChange={(e) => handleUpdatingProduct(e)}
              placeholder={`Enter Rating`}
              name={`rating`}
              value={productList.rating}
              required
            />
          </div>
          <div className="form-data">
            <label htmlFor="Stock">Stock</label>
            <input
              type="text"
              onChange={(e) => handleUpdatingProduct(e)}
              placeholder={`Enter Stock`}
              name={`stock`}
              value={productList.stock}
              required
            />
          </div>
          <div className="form-data">
            <label htmlFor="Brand">Brand</label>
            <input
              type="text"
              onChange={(e) => handleUpdatingProduct(e)}
              placeholder={`Enter Brand`}
              name={`brand`}
              value={productList.brand}
              required
            />
          </div>
          <div className="form-data">
            <label htmlFor="Category">Category</label>
            <input
              type="text"
              onChange={(e) => handleUpdatingProduct(e)}
              placeholder={`Enter Category`}
              name={`category`}
              value={productList.category}
              required
            />
          </div>
          <div className="form-data">
            <label htmlFor="discountpercentage">Discount Percentage</label>
            <input
              type="text"
              onChange={(e) => handleUpdatingProduct(e)}
              placeholder="Enter discount %"
              name="discountPercentage"
              value={productList.discountPercentage}
              required
            />
          </div>
          <div className="form-image">
            <label htmlFor="thumbnail">Thumbnail</label>
            <input
              type="file"
              name="thumbnail"
              accept="image/png, image/jpeg"
              className="thumbnail"
              // onChange={(e) => handleAddingProduct(e)}
              onChange={(e) => handleAddingThumbnail(e)}
              // value={productList.thumbnail}
            />
            <label htmlFor="image">Image</label>
            <input
              type="file"
              name="images"
              accept="image/png, image/jpeg"
              className="mainimage"
              onChange={(e) => handleAddingImage(e)}
              // value={productList.images}
            />
          </div>
          <div className="form-submit">
            <button type="submit">Update Product</button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};
