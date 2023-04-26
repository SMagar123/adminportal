import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { AiFillStar, BiEdit, AiOutlineDelete } from "../assets/icons/Icons";
import CategoryContext from "../pages/Product";
export const SingleProduct = ({ limit }) => {
  const categoryType = useContext(CategoryContext);
  const [productList, setProductList] = useState([]);
  //fetching all the product list up to 10 products
  const getProductList = async () => {
    try {
      const { data } = await axios.get(
        `https://dummyjson.com/products/?limit=${limit}`
      );
      setProductList(data.products);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getProductList();
  }, [limit]);
  //fetch product list of the specific category
  const categoryWiseProduct = async () => {
    try {
      if (categoryType === "") {
        const { data } = await axios.get(
          `https://dummyjson.com/products/?limit=${limit}`
        );
        setProductList(data.products);
      } else {
        const { data } = await axios.get(
          `https://dummyjson.com/products/category/${categoryType}`
        );
        setProductList(data.products);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    categoryWiseProduct();
  }, [categoryType]);
  return (
    <div className="singleProduct">
      {productList.map((item) => {
        return (
          <div className="individual-product" key={item.id}>
            <div className="image">
              <img src={item.images[0]} alt="products" />
            </div>
            <div className="price-title">
              <p className="title">
                <span> {item.title.slice(0, 17)} </span>
              </p>
              <p className="price">
                <span>${item.price} </span>
              </p>
              <p className="rate">
                <i>
                  <AiFillStar />
                </i>
                <span> {item.rating} </span>
              </p>
            </div>
            <div className="product-edit">
              <button>
                <i>
                  <BiEdit />
                </i>
                Edit
              </button>
              <button>
                <i>
                  <AiOutlineDelete />
                </i>
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
