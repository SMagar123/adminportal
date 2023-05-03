import React, { useState, createContext } from "react";
import {
  AiOutlinePlus,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "../assets/icons/Icons";
import { SingleProduct } from "../components/SingleProduct";
import { Link } from "react-router-dom";
const CategoryContext = createContext();
export const Product = () => {
  const [category, setCategory] = useState("");
  const [searchProduct, setSearchProduct] = useState("");
  const categorySelection = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
  };
  const [originalList, setOriginalList] = useState([]);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = originalList.slice(firstIndex, lastIndex);
  const npage = Math.ceil(originalList.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  const nextpage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prepage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const changeCPage = (id) => {
    setCurrentPage(id);
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
          <SingleProduct
            setProductlist={setOriginalList}
            displayList={records}
          />
        </div>
        <div className="pagination">
          <nav>
            <ul className="pagination">
              <li className="previous">
                <a href="#" className="page-link" onClick={prepage}>
                  <i>
                    <AiOutlineArrowLeft />
                  </i>
                </a>
              </li>
              {numbers.map((n, i) => (
                <li
                  className={`page-item ${currentPage === n ? "active" : ""}`}
                  key={i}
                >
                  <a
                    href="#"
                    className="page-item"
                    onClick={() => changeCPage(n)}
                  >
                    {n}
                  </a>
                </li>
              ))}
              <li className="next">
                <a href="#" className="page-link" onClick={nextpage}>
                  <i>
                    <AiOutlineArrowRight />
                  </i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </CategoryContext.Provider>
  );
};
export default CategoryContext;
