import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../components";

export function EditUsers() {
  const { id } = useParams(); /* get id from route*/
  const [inputData, setInputData] = useState({
    id: id,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const data = "http://127.0.0.1:3005/users/";
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3005/users/` + id)
      .then((res) => setInputData(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://127.0.0.1:3005/users/` + id, inputData);
    navigate("/Users");
    notify();
  };
  const notify = () => {
    toast.success("User Updated !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div className="edituser__wrapper">
      <h2>Edit User</h2>
      <div className="edit-form">
        <div className="edit-form-detail">
          <form onSubmit={handleSubmit}>
            <div className="edit-detail">
              <label className="id">ID</label>
              <input type="number" disabled name="id" value={inputData.id} />
            </div>
            <div className="edit-detail">
              <label className="firstName">First Name:</label>
              <input
                type="name"
                onChange={(e) =>
                  setInputData({ ...inputData, firstName: e.target.value })
                }
                name="firstName"
                value={inputData.firstName}
              />
            </div>
            <div className="edit-detail">
              <label className="lastName">Last Name:</label>
              <input
                type="name"
                onChange={(e) =>
                  setInputData({ ...inputData, lastName: e.target.value })
                }
                name="lastName"
                value={inputData.lastName}
              />
            </div>
            <div className="edit-detail">
              <label className="email">Email</label>
              <input
                type="email"
                onChange={(e) =>
                  setInputData({ ...inputData, email: e.target.value })
                }
                name="email"
                value={inputData.email}
              />
            </div>
            <div className="edit-detail">
              <label className="phone">Phone Num</label>
              <input
                type="number"
                onChange={(e) =>
                  setInputData({ ...inputData, phone: e.target.value })
                }
                name="number"
                value={inputData.number}
              />
            </div>
            <div className="submit">
              <Button className={"update"} name={"Update"}/>
              <Link to="/Users">
                <Button className={"cancel"} name={"Cancel"}/>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
