import React, { useEffect, useRef, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "../../assets/icons/Icons";
import { useNavigate, Navigate } from "react-router-dom";
import PropTypes from "prop-types";

async function LoginUser(credentials) {
  return fetch("https://localhost:8080/login", {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
export const Login = ({ setToken }) => {
  const [iconstate, setIconState] = useState(true);
  const [icond, setIcond] = useState(<AiOutlineEyeInvisible />);
  const [adminuser, setAdminUser] = useState();
  const [adminpassword, setAdminPassword] = useState();
  const [inputType, setInputType] = useState("password");

  //Setting the admin user and password in the localstorage as database
  // (() => {
  //   localStorage.setItem("admin-user", "Swift-Tech-admin123");
  //   localStorage.setItem("admin-password", "swiftTech@123");
  // })();

  // const adminUser = useRef();
  // const adminPassword = useRef();

  //toogling the icon for password
  const handleIcon = (e) => {
    e.preventDefault();
    if (iconstate === true) {
      setIconState(!iconstate);
      setIcond(<AiOutlineEye />);
      setInputType("text");
    } else {
      setIconState(!iconstate);
      setIcond(<AiOutlineEyeInvisible />);
      setInputType("password");
    }
  };

  const navigate = useNavigate();
  //actual handling the form
  // useEffect(() => {
  //   setAdminUser(localStorage.getItem("admin-user"));
  //   setAdminPassword(localStorage.getItem("admin-password"));
  // }, []);

  const directAdmin = async (e) => {
    e.preventDefault();
    const token = await LoginUser({
      adminuser,
      adminpassword,
    });
    setToken(token);
  };

  return (
    <div className="login">
      <div className="login__form">
        <h3>Admin Login</h3>
        <form onSubmit={directAdmin} autoComplete="off">
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            onChange={(e) => setAdminUser(e.target.value)}
            required
          />
          <div className="form-password">
            <input
              type={inputType}
              name="password"
              placeholder="Enter Password"
              onChange={(e) => setAdminPassword(e.target.value)}
              required
            />
            <i onClick={handleIcon}>{icond}</i>
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
