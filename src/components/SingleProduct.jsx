import React, { useEffect, useState, useContext } from "react";
import { AiFillStar, BiEdit, AiOutlineDelete } from "../assets/icons/Icons";
import CategoryContext from "../pages/Product";
import { deleteProduct, getProducts } from "../service/api";
import { convertNeSwToNwSe } from "google-map-react";
export const SingleProduct = () => {
  const categoryType = useContext(CategoryContext);
  const [productList, setProductList] = useState([]);
  const [originalList, setOriginalList] = useState([]);

  //fetching all the product list
  const getProductList = async () => {
    const products = await getProducts();
    setProductList(products.data);
    setOriginalList(products.data);
  };
  useEffect(() => {
    getProductList();
  }, []);
  //fetching the products of specific category

  const categoryWiseProduct = () => {
    if (categoryType.category === "") {
      setOriginalList(productList);
    } else {
      setOriginalList(
        productList.filter((item) => {
          return item.category === categoryType.category;
        })
      );
    }
  };
  useEffect(() => {
    categoryWiseProduct();
  }, [categoryType.category]);
  //deleting the single product
  const deleteSingleProduct = async (product_id) => {
    alert(`Do you want to delete product ${product_id}`);
    await deleteProduct(product_id);
    getProductList();
  };
  //searching the product
  const searchProduct = () => {
    return originalList.filter((item) => {
      return item.title.toLowerCase().includes(categoryType.searchProduct);
    });
  };
  return (
    <div className="singleProduct">
      {searchProduct().map((item) => {
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
              <button onClick={() => deleteSingleProduct(item.id)}>
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
