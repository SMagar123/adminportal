import axios from "axios";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { BiEdit, BiFilter, BiUserPlus } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { SearchUsers } from "./SearchUsers";

export const Users = () => {
  const tableHead = [
    "ID",
    "FirstName",
    "LastName",
    "Email",
    "Phone NO.",
    "Action",
  ];
  const [userList, setUserList] = useState([]);
  const [search, setSearch]=useState('');
  // const [showModal,setShowModal]=useState([false]);
  const limit = 10;
  const getUserList = async () => {
    try {
      const { data } = await axios.get(
        `https://dummyjson.com/users?limit=${limit}`
      );
      setUserList(data.users);
      // console.log(data.users);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getUserList();
  }, [limit]);
  const handleClick = (e) => {
    // console.log(ref.current.id);
  };

  const deleteUser = () => {
    alert("Are you sure??");
  };

  return (
    <div className="user__wrapper">
      {/* ........ search user..........*/}
      <div className="header-search">
        <div className="search__filter">
          <div className="search__filter-detail">
            <label>FirstName</label>
            <input type="text" />
          </div>
          <div className="search__filter-detail">
            <label>LastName</label>
            <input type="text"/>
          </div>
          <div className="search__filter-detail">
            <label>Email</label>
            <input type="email" />
          </div>
          <div className="search__filter-detail">
            <label>Phone number</label>
            <input type="number" />
          </div>
          <button onClick={(e)=>setSearch(e.target.value)}>Filter</button>
        </div>
        {/* <button onClick={()=>setShowModal(true)}>Search Use rs <BiFilter/></button>
        {showModal && createPortal(<SearchUsers onClose={(setShowModal(false))}/>,document.body)} */}
      </div>
      {/* .....header....... */}
      <div className="user__wrapper-header">
        <div className="header-title">
          <h2>Users List</h2>
        </div>

        {/* //////add user button......... */}
        <div className="header-adduser">
          <Link to="/AddUsers">
            <button className="adduser-button">
              <i>
                <BiUserPlus />{" "}
              </i>
              Add Users
            </button>
          </Link>
        </div>
      </div>
      {/* .....table........ */}
      <div className="user__wrapper-table">
        <div className="table-content">
          <div className="table-title">
            {tableHead.map((item) => {
              return <h4>{item}</h4>;
            })}
          </div>
          {userList.filter((item)=>{
            return search.toLowerCase()===''?item: item.firstName.includes(search);
          }).map((item) => {
            return (
              <div className="table-item" key={item.id}>
                <div className="id">
                  <p>{item.id}</p>
                </div>
                <div className="fname">
                  <p>{item.firstName}</p>
                </div>
                <div className="lname">
                  <p>{item.lastName}</p>
                </div>
                <div className="email">
                  <p>{item.email}</p>
                </div>
                <div className="phone_num">
                  <p>{item.phone}</p>
                </div>
                <div className="action">
                  <div className="action-box">
                    <Link
                      to="/EditUsers"
                      className="edit-button"
                      onClick={handleClick}
                    >
                      <BiEdit />
                    </Link>
                    <Link className="edit-delete" onClick={deleteUser}>
                      {" "}
                      <RiDeleteBin5Line />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
          
        </div>
      </div>
    </div>
  );
};
