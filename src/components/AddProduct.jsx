import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProductList } from "../service/api";
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

  const handleAddingProduct = (e) => {
    setAddedProduct({ ...addedProduct, [e.target.name]: e.target.value });
  };
  const handleAddingThumbnail = (e) => {
    console.log(e.target.files);
    console.log(e.target.files[0].name);
    addedProduct.thumbnail = e.target.files[0].name;
  };
  const handleAddingImage = (e) => {
    addedProduct.images.push(`images/${e.target.files[0].name}`);
  };
  const addProduct = async () => {
    await addProductList(addedProduct);
    navigate("/Product");
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
            />
            <label htmlFor="image">Image</label>
            <input
              type="file"
              name="images"
              accept="image/png, image/jpeg"
              className="mainimage"
              onChange={(e) => handleAddingImage(e)}
            />
          </div>
          <div className="form-submit">
            <button type="submit">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};
