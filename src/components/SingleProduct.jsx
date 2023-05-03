import React, { useEffect, useState, useContext } from "react";
import { AiFillStar, BiEdit, AiOutlineDelete } from "../assets/icons/Icons";
import CategoryContext from "../pages/Product";
import { deleteProduct, getProducts } from "../service/api";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
export const SingleProduct = ({ setProductlist, displayList }) => {
  const categoryType = useContext(CategoryContext);
  const [productList, setProductList] = useState([]);
  //fetching all the product list
  const getProductList = async () => {
    const products = await getProducts();
    setProductList(products.data);
    setProductlist(products.data);
  };
  useEffect(() => {
    getProductList();
  }, []);
  //fetching the products of specific category

  const categoryWiseProduct = () => {
    if (categoryType.category === "") {
      setProductlist(productList);
    } else {
      setProductlist(
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
  const notify = () => {
    toast.success("Product deleted successfully", {
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
  const deleteSingleProduct = async (product_id, product_title) => {
    window.confirm(`Do you want to delete product ${product_title}`)
      ? (await deleteProduct(product_id)) && getProductList() && notify()
      : console.log("NOT DELETED");
  };
  //searching the product
  const searchProduct = () => {
    return displayList.filter((item) => {
      return item.title.toLowerCase().includes(categoryType.searchProduct);
    });
  };
  const list = searchProduct();
  return (
    <div className="singleProduct">
      {list.length === 0 ? (
        <h4 style={{ color: "#1e7898" }}>No Result found</h4>
      ) : (
        list.map((item) => {
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
                <Link to={`/edit/${item.id}`}>
                  <button>
                    <i>
                      <BiEdit />
                    </i>
                    Edit
                  </button>
                </Link>

                <button
                  onClick={() => deleteSingleProduct(item.id, item.title)}
                >
                  <i>
                    <AiOutlineDelete />
                  </i>
                  Delete
                </button>
              </div>
              <ToastContainer />
            </div>
          );
        })
      )}

      
    </div>
  );
};
