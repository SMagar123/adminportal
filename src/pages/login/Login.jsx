import React, { useEffect, useRef, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "../../assets/icons/Icons";
import { useNavigate, Navigate } from "react-router-dom";
export const Login = ({ stateTrigger }) => {
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

  const adminUser = useRef();
  const adminPassword = useRef();

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
  useEffect(() => {
    setAdminUser(localStorage.getItem("admin-user"));
    setAdminPassword(localStorage.getItem("admin-password"));
  }, []);

  const directAdmin = () => {
    if (
      adminUser.current.value === adminuser &&
      adminPassword.current.value === adminpassword
    ) {
      stateTrigger(true);
      navigate("/dashboard");
    } else {
      alert("Wrong email and password");
      navigate("/");
    }
  };

  return (
    <div className="login">
      <div className="login__form">
        <h3>Admin Login</h3>
        <form onSubmit={directAdmin}>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            ref={adminUser}
            required
          />
          <div className="form-password">
            <input
              type={inputType}
              name="password"
              placeholder="Enter Password"
              ref={adminPassword}
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
