import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { AiFillStar, BiEdit, AiOutlineDelete } from "../assets/icons/Icons";
import CategoryContext from "../pages/Product";
import { getProducts } from "../service/api";
export const SingleProduct = () => {
  const categoryType = useContext(CategoryContext);
  const [productList, setProductList] = useState([]);

  //fetching all the product list
  const getProductList = async () => {
    const products = await getProducts();
    setProductList(products.data);
  };
  useEffect(() => {
    getProductList();
  }, []);
  //fetching the products of specific category

  const categoryWiseProduct = () => {
    if (categoryType === "") {
      setProductList(productList);
    } else {
      setProductList(
        productList.filter((item) => {
          return item.category === categoryType;
        })
      );
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
