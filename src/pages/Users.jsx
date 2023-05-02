import axios from "axios";
import React, { useEffect, useState } from "react";
// import { createPortal } from "react-dom";
import { BiEdit, BiFilter, BiUserPlus } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
const tableHead = [
  "ID",
  "FirstName",
  "LastName",
  "Email",
  "Phone NO.",
  "Action",
];
const filterIndex = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};
export const Users = () => {
  const [userList, setUserList] = useState([]);
  const [userFiltered, setUserFiltered] = useState([]);;
  const [currentPage, setCurrentPage]=useState(1)
  const [search, setSearch] = useState(filterIndex);
  // const [showModal,setShowModal]=useState([false]);
  const [todoPerPage,setTodoPerPage]=useState(10);
  const numOfTotalPages=Math.ceil(userList.length/todoPerPage);
  const pages=[...Array(numOfTotalPages+1).keys()].slice(1);
  const indexofLastTodo= currentPage+ todoPerPage;
  const indexofFirstTodo
  const getUserList = async () => {
    try {
      const { data } = await axios.get(`http://127.0.0.1:3005/users`);
      setUserList(data);  
      setUserFiltered(data);
      // console.log(data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getUserList();
  }, []);
  const handleSearch = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };
  const filterUsers = () => {
    setUserFiltered(
      userList.filter((item) => {
          return (
          item.firstName === search.firstName &&
          item.lastName === search.lastName &&
          item.email === search.email &&
          item.number === search.number
        );
      })
    );
    
  };
  console.log(userFiltered);
  const navigate= useNavigate();
  function handleDelete(id){
    const confirm =window.confirm("Are you sure?");
    if(confirm){
      axios.delete(`http://127.0.0.1:3005/users/`+id)
      .then(res=>{
        alert("User Deleted");
        navigate('/Users')
      })

    }
  }
  return (
    <div className="user__wrapper"> 
     
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
      {/* ........ search user..........*/}
     <div className="header-search">
        <div className="search__filter">
          <div className="search__filter-detail">
            <input type="text" onChange={handleSearch} name="firstName" placeholder="FirstName"/>
            <input type="text" name="lastName" onChange={handleSearch} placeholder="LastName"/>         
            <input type="email" name="email" onChange={handleSearch} placeholder="Email"/>
            <input type="number" name="phone" onChange={handleSearch} placeholder="Phone"/>
          <button className="filter"
          onClick={filterUsers}>Filter <BiFilter/></button>
          </div>
        </div>
        {/* <button onClick={()=>setShowModal(true)}>Search Use rs <BiFilter/></button>
        {showModal && createPortal(<SearchUsers onClose={(setShowModal(false))}/>,document.body)} */}
      </div>   
       
      {/* .....table........ */}
      <div className="user__wrapper-table">
        <div className="table-content">
          <div className="table-title">
            {tableHead.map((item) => {
              return <h4>{item}</h4>;
            })}
          </div>
          {userFiltered.map((d,item) => {
            return (
              <div className="table-item" key={d.id}>
                <div className="id">
                  <p>{d.id}</p>
                </div>
                <div className="firstName">
                  <p>{d.firstName}</p>
                </div>
                <div className="lastName">
                  <p>{d.lastName}</p>
                </div>
                <div className="email">
                  <p>{d.email}</p>
                </div>
                <div className="phone_num">
                  <p>{d.phone}</p>
                </div>
                <div className="action">
                  <div className="action-box">
                    <Link to={`/EditUsers/${d.id}`} className="edit-button">
                      <BiEdit />
                    </Link>
                    <button onClick={e=>handleDelete(d.id)}>
                      <RiDeleteBin5Line />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <p>
        {pages.map((page)=>{
          return(
            <span key={page}>{`$(pages) |`}</span>

          )
        })}
      </p>
    </div>
  );
};
