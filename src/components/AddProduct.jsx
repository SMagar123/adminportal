import React from "react";

export const AddProduct = ({ setModalView }) => {
  const formField = [
    "Title",
    "Description",
    "Price",
    "Discount Percentage",
    "Rating",
    "Stock",
    "Brand",
    "Category",
  ];
  return (
    <div className="addproduct">
      <div className="addproduct__form">
        <h2>Add New Product</h2>
        <form>
          {formField.map((item) => {
            return (
              <div className="form-data">
                <label htmlFor="title">{item}</label>
                <input type="text" placeholder={`Enter ${item} `} />
              </div>
            );
          })}
          <div className="form-submit">
            <button>Add Product</button>
            <button onClick={() => setModalView(false)}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};
