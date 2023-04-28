import React, { useState, createContext } from "react";
import { AiOutlinePlus, BiSearch } from "../assets/icons/Icons";
import { SingleProduct } from "../components/SingleProduct";
import { AddProduct } from "../components/AddProduct";
import { Link } from "react-router-dom";
const CategoryContext = createContext();
export const Product = () => {
  const [category, setCategory] = useState("");
  const [searchProduct, setSearchProduct] = useState("");
  const categorySelection = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
  };

  return (
    <CategoryContext.Provider
      value={{ category: category, searchProduct: searchProduct }}
    >
      <div className="product">
        <div className="product__header">
          <h3>Products</h3>
          <Link to="/addproduct">
            <button>
              <span className="addicon">
                <i>
                  <AiOutlinePlus />
                </i>
              </span>
              <span>Add New</span>
            </button>
          </Link>
        </div>
        <div className="product__search">
          <div className="search-field">
            <input
              type="text"
              placeholder="Search product"
              onChange={(e) => setSearchProduct(e.target.value.toLowerCase())}
            />
            {/* <i>
            <BiSearch />
          </i> */}
          </div>
          <div className="filter-field">
            <select name="productCategory" onChange={categorySelection}>
              <option value="">Category</option>
              <option value="">All</option>
              <option value="smartphones">Smartphone</option>
              <option value="laptops">Laptop</option>
              <option value="fragrances">Fragrances</option>
              <option value="skincare">Skin Care</option>
            </select>
          </div>
        </div>
        <div className="product__display">
          <SingleProduct />
        </div>
      </div>
    </CategoryContext.Provider>
  );
};
export default CategoryContext;
