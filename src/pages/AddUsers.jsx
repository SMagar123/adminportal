import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const AddUsers = () => {
  const userData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };
  const [inputarr, setInputArr] = useState(userData);
  const handleUserInput = (e) => {
    setInputArr({ ...inputarr, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://127.0.0.1:3005/users`, inputarr);
    // .then(res=>{
    //   toast.success("User Added !", {
    //     position: toast.POSITION.TOP_CENTER
    //   })
    navigate("/Users");
    notify();
  };
  const notify = () => {
    toast.success("User Added !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div className="adduser__wrapper">
      <div className="adduser__title">
        <h2>Add Users</h2>
      </div>
      <div className="adduser__form">
        <form onSubmit={handleSubmit}>
          <div className="form-detail">
            <label className="firstName">First Name:</label>
            <input
              type="name"
              placeholder="Add First Name"
              onChange={(e) => handleUserInput(e)}
              name="firstName"
            />
          </div>
          <div className="form-detail">
            <label className="lastName">Last Name:</label>
            <input
              type="name"
              placeholder="Add Last Name"
              onChange={(e) => handleUserInput(e)}
              name="lastName"
            />
          </div>
          <div className="form-detail">
            <label className="email">Email</label>
            <input
              type="email"
              placeholder="Add Email"
              onChange={(e) => handleUserInput(e)}
              name="email"
            />
          </div>
          <div className="form-detail">
            <label className="phone">Phone Num</label>
            <input
              type="number"
              placeholder="Add Number"
              onChange={(e) => handleUserInput(e)}
              name="phone"
            />
          </div>
          <div className="submit">
            <button className="add">Add Users</button>
            <Link to="/Users">
              <button className="cancel">Cancel</button>
            </Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};
