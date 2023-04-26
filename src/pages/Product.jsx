import React, { useState, createContext } from "react";
import { AiOutlinePlus, BiSearch } from "../assets/icons/Icons";
import { SingleProduct } from "../components/SingleProduct";
import { AddProduct } from "../components/AddProduct";
const CategoryContext = createContext();
export const Product = () => {
  const [category, setCategory] = useState("");
  const [addUser, setAddUser] = useState(false);
  const categorySelection = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
  };
  const setAddModalView = () => {
    setAddUser(!addUser);
  };
  return (
    <CategoryContext.Provider value={category}>
      <div className="product">
        {addUser ? <AddProduct setModalView={setAddUser} /> : ""}

        <div className="product__header">
          <h3>Products</h3>
          <button onClick={setAddModalView}>
            <span className="addicon">
              <i>
                <AiOutlinePlus />
              </i>
            </span>
            <span>Add New</span>
          </button>
        </div>
        <div className="product__search">
          <div className="search-field">
            <input type="text" placeholder="Search product" />
            {/* <i>
            <BiSearch />
          </i> */}
          </div>
          <div className="filter-field">
            <select name="productCategory" onChange={categorySelection}>
              <option value=" ">Category</option>
              <option value="">All</option>
              <option value="smartphones">Smartphone</option>
              <option value="laptops">Laptop</option>
              <option value="fragrances">Fragrances</option>
              <option value="skincare">Skin Care</option>
            </select>
          </div>
        </div>
        <div className="product__display">
          <SingleProduct limit={20} />
        </div>
      </div>
    </CategoryContext.Provider>
  );
};
export default CategoryContext;
