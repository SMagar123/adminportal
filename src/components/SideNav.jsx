import React, { useEffect, useState } from "react";
import {
  AiOutlineUser,
  AiOutlineSetting,
  BiDownArrow,
  BiHomeAlt,
  RiProductHuntFill,
  RxHamburgerMenu,
  BsBell,
  RiAdminFill,
} from "../assets/icons/Icons";
import { NavLink, Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useToken from "../pages/UseToken/useToken";
import Loginadmin from "../pages/Loginadmin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const navList = [
  {
    nav: "Users",
    path: "/Users",
    icon: <AiOutlineUser />,
  },
  {
    nav: "Product",
    path: "/Product",
    icon: <RiProductHuntFill />,
  },
  {
    nav: "Settings",
    path: "/Settings",
    icon: <AiOutlineSetting />,
  },
];
export const SideNav = () => {
  const { token, setToken } = useToken();
  const notifySuccess = () => {
    toast.success("You are logged out successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    window.confirm("Are you sure to logout")
      ? getLoggeout()
      : console.log("You are not logged out");
  };
  function getLoggeout() {
    sessionStorage.clear();
    window.location.reload();
    // navigate("/");
    notifySuccess();
  }
  if (!token) {
    return <Loginadmin setToken={setToken} />;
  } else {
    // notifySuccess();
    return (
      <>
        <div className="navbar">
          <div className="navbar__sidebar">
            <div className="logo">
              {/* <img src="" alt="logo" /> */}
              <h2>Admin Portal</h2>
              <input
                type="text"
                className="nav-filter"
                placeholder="Filter Menu"
              />
            </div>
            <ul>
              <li>
                <NavLink to="/">
                  <BiHomeAlt /> Dashboard
                </NavLink>
              </li>
              {navList.map((item) => {
                return (
                  <li key={item.nav}>
                    <NavLink to={item.nav} key={item.nav}>
                      {item.icon} {item.nav}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* .....top-navbar...... */}
          <div className="dash-display">
            <div className="navbar__header active">
              <div className="ham-icon">
                <i>
                  <RxHamburgerMenu />
                </i>
              </div>
              <div className="adminlogo">
                <i>
                  <BsBell />
                </i>
                <span>1</span>
                <div className="admin-panel">
                  <i>
                    <RiAdminFill />
                  </i>
                  <div className="admin-name">
                    <h4>Admin</h4>
                  </div>
                  <div className="admin-functionalities">
                    <Link>Profile</Link>
                    <Link>
                      <button onClick={handleLogout}>Logout</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Outlet />
          </div>
          <ToastContainer />
        </div>
      </>
    );
  }
};
