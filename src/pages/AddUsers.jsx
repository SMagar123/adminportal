import React, { useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const AddUsers = () => {  
  const userData = {
    fname: "",
    lname: "",
    email: "",
    number: "",
  };
  const [inputarr, setInputArr] = useState(userData);
  const handleUserInput = (e) => {
    setInputArr({ ...inputarr, [e.target.name]: e.target.value });
  };
  const data="http://localhost:3006/users";
  const addUserDetails = async() => {
    const request = {
      ...data
    };
    const response= await axios.post(data, inputarr);
     try {      
        return( 
          toast.success("User Added !", {
            position: toast.POSITION.TOP_CENTER
          }),
          await axios.post(data, inputarr)
          );
        } catch (e) {
          console.log("Error while ", e.message);         
      }
  };

  return (
    <div className="adduser__wrapper">
      <div className="adduser__title">
        <h2>Add Users</h2>
      </div>
      <div className="adduser__form">
        <form>
          {/* <div className="form-detail">
            <label className="id">ID</label>
            <input type="number" onChange={(e) => handleUserInput(e)} />
          </div> */}
          <div className="form-detail">
            <label className="fname">First Name:</label>
            <input
              type="name"
              placeholder="Add First Name"
              onChange={(e) => handleUserInput(e)}
              name="fname"
            />
          </div>
          <div className="form-detail">
            <label className="lname">Last Name:</label>
            <input
              type="name"
              placeholder="Add Last Name"
              onChange={(e) => handleUserInput(e)}
              name='lname'
            />
          </div>
          <div className="form-detail">
            <label className="email">Email</label>
            <input
              type="email"
              placeholder="Add Email"
              onChange={(e) => handleUserInput(e)}
              name='email'
            />
          </div>
          <div className="form-detail">
            <label className="phone">Phone Num</label>
            <input
              type="number"
              placeholder="Add Number"
              onChange={(e) => handleUserInput(e)}
              name="number"
            />
          </div>
          <div className="submit">
            <button className="add" onClick={addUserDetails}>Add Users
              <ToastContainer />
            </button>
            <Link to='/Users'><button className="cancel">Cancel</button></Link>
          </div>
        </form>
      </div>
    </div>
  );
};
