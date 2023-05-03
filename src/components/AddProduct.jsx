import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProductList } from "../service/api";
import { ToastContainer, toast } from "react-toastify";
const initialProuct = {
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
export const AddProduct = () => {
  const navigate = useNavigate();
  const [addedProduct, setAddedProduct] = useState(initialProuct);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);
  const handleAddingProduct = (e) => {
    setAddedProduct({ ...addedProduct, [e.target.name]: e.target.value });
  };
  const handleAddingThumbnail = (e) => {
    if (e.target.files.length !== 0) {
      setSelectedThumbnail(e.target.files[0]);
      addedProduct.thumbnail = e.target.files[0].name;
    }
  };
  const handleAddingImage = (e) => {
    if (e.target.files.length !== 0) {
      setSelectedImage(e.target.files[0]);
      addedProduct.images.push(`images/${e.target.files[0].name}`);
    }
  };
  const cancelImageUpdate = () => {
    setSelectedImage(null);
    addedProduct.images.pop();
  };
  const cancelThumbnailUpdate = () => {
    setSelectedThumbnail(null);
    addedProduct.thumbnail = "";
  };
  const addProduct = () => {
    addProductList(addedProduct);
    notify();
    navigate("/Product");
  };
  const notify = () => {
    toast.success("Product added successfully", {
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

  console.log(addedProduct);
  return (
    <div className="addproduct">
      <div className="addproduct__form">
        <h2>Add New Product</h2>
        <form onSubmit={addProduct}>
          {formField.map((item) => {
            return (
              <div className="form-data" key={item}>
                <label htmlFor={`${item}`}>{item}</label>
                <input
                  type="text"
                  onChange={(e) => handleAddingProduct(e)}
                  placeholder={`Enter ${item} `}
                  name={`${item.toLowerCase()}`}
                  required
                />
              </div>
            );
          })}
          <div className="form-data">
            <label htmlFor="discountpercentage">Discount Percentage</label>
            <input
              type="text"
              onChange={(e) => handleAddingProduct(e)}
              placeholder="Enter discount %"
              name="discountPercentage"
              required
            />
          </div>
          <div className="form-image">
            <label htmlFor="thumbnail">Thumbnail</label>
            <input
              type="file"
              name="thumbnail"
              accept="image/*"
              className="thumbnail"
              onChange={(e) => handleAddingThumbnail(e)}
              required
            />
            {selectedThumbnail && (
              <div className="preview-image">
                <img
                  alt="not found"
                  src={URL.createObjectURL(selectedThumbnail)}
                />
                <button onClick={cancelThumbnailUpdate}>Change</button>
              </div>
            )}
            <label htmlFor="image">Image</label>
            <input
              type="file"
              name="images"
              accept="image/*"
              className="mainimage"
              onChange={(e) => handleAddingImage(e)}
              required
            />
          </div>
          {selectedImage && (
            <div className="preview-image">
              <img alt="not found" src={URL.createObjectURL(selectedImage)} />
              <button onClick={cancelImageUpdate}>Change</button>
            </div>
          )}
          <div className="form-submit">
            <button type="submit">Add Product</button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};
