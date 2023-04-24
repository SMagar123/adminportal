import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "../assets/icons/Icons";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [iconstate, setIconState] = useState(true);
  const [icond, setIcond] = useState(<AiOutlineEyeInvisible />);
  // const [adminuser, setAdminUser] = useState();
  // const [adminpassword, setAdminPassword] = useState();
  const handleIcon = (e) => {
    e.preventDefault();
    if (iconstate === true) {
      setIconState(!iconstate);
      setIcond(<AiOutlineEye />);
    } else {
      setIconState(!iconstate);
      setIcond(<AiOutlineEyeInvisible />);
    }
  };
  const navigate = useNavigate();
  const directAdmin = () => {
    navigate("/Dashboard");
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
            required
          />
          <div className="form-password">
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
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
