import axios from "axios";
import React, { useEffect, useState, useRef} from "react";
import { BiEdit, BiUserPlus } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Users = () => {
  const tableHead = [
    "ID",
    "FirstName",
    "LastName",
    "Email",
    "Phone NO.",
    "Action",
  ];
  const limit = 10;
  const [userList, setUserList] = useState([]);

  const getUserList = async () => {
    try {
      const { data } = await axios.get(
        `https://dummyjson.com/users?limit=${limit}`
      );
      setUserList(data.users);
      console.log(data.users);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getUserList();
  }, [limit]);
const handleClick=(e)=>{
  // console.log(ref.current.id);
}

const deleteUser=()=>{
  alert("Are you sure??")
}
  
  return (
    <div className="user__wrapper">
      {/* .....header....... */}
      <div className="user__wrapper-header">
        <div className="header-title">
          <h2>Users List</h2>
        </div>
        <div className="header-adduser">
          <Link to="/AddUsers">
            <button className="adduser-button"><i><BiUserPlus /> </i>Add Users</button>
          </Link>
        </div>
      </div>
      {/* ........ search user..........*/}
      <div className="user__wrapper-search">
          
      </div>
      {/* <input type="text" className="search"/> */}
      {/* .....table........ */}
      <div className="user__wrapper-table">
        <div className="table-content">
          <div className="table-title" >
            {tableHead.map((item) => {
              return <h4>{item}</h4>;
            })}
          </div>
          {userList.map((item) => {
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
                    <Link to='/EditUsers' className="edit-button" onClick={handleClick}><BiEdit /></Link> 
                    <Link className="edit-delete" onClick={deleteUser}> <RiDeleteBin5Line />
                    </Link>
                             
                  </div> 
                  
                </div>

              </div>
            );
          })}  
           {/* <div id="popup" className="overlay-edit">
                      <div className="edit-popup">
                        <h2>Edit User</h2>
                        <div className="edit-form">                    
                                <div className="edit-form-detail">
                                  <div className="edit-detail">
                                    <label>ID</label>
                                    <input type="text"/>
                                  </div>
                                  <div className="edit-detail">
                                    <label>FirstName</label>
                                    <input type="text" />
                                  </div>
                                  <div className="edit-detail">
                                    <label>LastName</label>
                                    <input type="text" />
                                  </div>
                                  <div className="edit-detail">
                                    <label>Email</label>
                                    <input type="text" />
                                  </div>
                                  <div className="edit-detail">
                                    <label>Phone No:</label>
                                    <input type="text" />
                                  </div>
                                  <div className="button">
                                    <button className="confirm">Confirm</button>
                                    <Link to="#"><button className="cancel">Cancel</button></Link>
                                  </div>
                                   
                                </div>                         
                        </div>
                      </div>
           </div>                    */}
        </div>
         
       
      </div>
    </div>
  );
};
