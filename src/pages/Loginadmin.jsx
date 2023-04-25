import { useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineEye, AiOutlineEyeInvisible } from "../assets/icons/Icons";
import { useNavigate, Navigate } from "react-router-dom";
async function loginUser(credentials) {
  return fetch("http://localhost:8080/Login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

const Loginadmin = ({ setToken }) => {
  const [iconstate, setIconState] = useState(true);
  const [icond, setIcond] = useState(<AiOutlineEyeInvisible />);
  const [inputType, setInputType] = useState("password");
  const [username, setusername] = useState();
  const [password, setpassword] = useState();

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === "swift-admin" && password === "admin123") {
      const token = await loginUser({
        username,
        password,
      });
      setToken(token);
    } else {
      alert("wrong username and password");
      Navigate("/dashboard");
    }
  };

  return (
    <div className="login">
      <div className="login__form">
        <h3>Admin Login</h3>
        <form onSubmit={handleSubmit} autoComplete="off">
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            onChange={(e) => setusername(e.target.value)}
            required
          />
          <div className="form-password">
            <input
              type={inputType}
              name="password"
              placeholder="Enter Password"
              onChange={(e) => setpassword(e.target.value)}
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
Loginadmin.propTypes = {
  settoken: PropTypes.func.isRequired,
};
export default Loginadmin;
