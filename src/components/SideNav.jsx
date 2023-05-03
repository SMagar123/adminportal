
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
  RxCross1,
} from "../assets/icons/Icons";
import { NavLink, Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { RxHamburgerMenu, BsBell, RiAdminFill } from "../assets/icons/Icons";
import React, { useState } from "react";
import { AiOutlineUser, AiOutlineSetting } from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { RiProductHuntFill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";

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
  const [show, setShow] = useState();
  const toggleButton = () => {
    setShow(!show);
  };

  const { token, setToken } = useToken();
  const [displayNav, setDisplayNav] = useState(true);
  const [displayModel, setDisplayModel] = useState(true);
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

  const handleUserModel = () => {
    setDisplayModel(!displayModel);
  };
  if (!token) {
    return <Loginadmin setToken={setToken} />;
  } else {
    // notifySuccess();
    return (
      <>
        <div className={` ${displayNav ? "navbar" : "display-certain"}`}>
          <div
            className={`navbar__sidebar ${
              displayNav ? "active-sidenav" : "inactive-sidenav"
            }
            `}
          >
            <div className="logo">
              {/* <img src="" alt="logo" /> */}
              <h2>Admin Portal</h2>
              <input
                type="text"
                className="nav-filter"
                placeholder="Filter Menu"
              />

  return (
    <>
      <div className="navbar">
        {/* <div className="sidenav"></div> */}
        <div className="navbar__sidebar">
          <div className="logo">
            {/* <img src="" alt="logo" /> */}
            <h2>Admin Portal</h2>
            {/* <input
              type="text"
              className="nav-filter"
              placeholder="Filter Menu"
            /> */}
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
              <i onClick={toggleButton}>
                <RxHamburgerMenu />
              </i>

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
              <div
                className="ham-icon"
                onClick={() => setDisplayNav(!displayNav)}
              >
            <div className="adminlogo">
              <i>
                <BsBell />
              </i>
              <span>1</span>

              <div className="admin-panel">

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
                    <p>Admin</p>
                  </div>
                  <div className="admin-functionalities">
                    <Link>
                      <button onClick={handleUserModel}>Profile</button>
                    </Link>
                    <Link>
                      <button onClick={handleLogout}>Logout</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className={`${
                  displayModel ? "display-model" : "adminprofile-model"
                }`}
              >
                <div className="model-canel">
                  <i onClick={handleUserModel}>
                    <RxCross1 />
                  </i>
                </div>

                <div className="admin-profile">
                  <i>
                    <AiOutlineUser />
                  </i>
                  <h5>Swift-admin</h5>
                  <p>swiftadmin@gmail.com</p>

                <div className="admin-name">
                  <h4>Admin</h4>






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


      </div>
    </>
  );

};
