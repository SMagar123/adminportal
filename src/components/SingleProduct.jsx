import React, { useEffect, useState, useContext } from "react";

import { AiFillStar, BiEdit, AiOutlineDelete } from "../assets/icons/Icons";
import CategoryContext from "../pages/Product";
import { deleteProduct, getProducts } from "../service/api";
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
  const deleteSingleProduct = async (product_id, product_title) => {
    window.confirm(`Do you want to delete product ${product_title}`)
      ? (await deleteProduct(product_id)) && getProductList()
      : console.log("NOT DELETED");
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
              <button onClick={() => deleteSingleProduct(item.id, item.title)}>
                <i>
                  <AiOutlineDelete />
                </i>
                Delete
              </button>
            </div>
          </div>
        );
      })}

      {/* <h1>Upload and Display Image usign React Hook's</h1>

      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}

      <br />
      <br />

      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      /> */}
    </div>
  );
};
