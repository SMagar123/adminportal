import { RxHamburgerMenu, BsBell, RiAdminFill } from "../assets/icons/Icons";
import React, { useState } from "react";
import { AiOutlineUser, AiOutlineSetting } from "react-icons/ai";
import { BiDownArrow, BiHomeAlt } from "react-icons/bi";
import { RiProductHuntFill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import { Dashboard } from "../pages";

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
  const [show, setShow] = useState(false);
  const toggleButton = () => {
    setShow(!show);
  };
  // console.log(show);
  return (
    <>
      <div className="navbar">
        {/* <div className="sidenav"></div> */}
        <div className="navbar__sidebar">
          <div className="logo">
            {/* <img src="" alt="logo" /> */}
            <h2>Admin Portal</h2>
            <i onClick={() => toggleButton()}>
              <BiDownArrow />
            </i>
            {show ? (
              <input
                type="text"
                className="nav-filter"
                placeholder="Filter Menu"
              />
            ) : null}
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
            <div className="badge">
              <i>
                <BsBell />
              </i>
              <span>1</span>
            </div>
            <div className="admin-panel">
              <i>
                <RiAdminFill />
              </i>
              <div className="admin-name">
                <h4>Admin</h4>
                <select name="admin">
                  <option value="user">Admin</option>
                  <option value="profile">Profile</option>
                  <option value="logout">LogOut</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
        </div>
       
      </div>
    </>
  );
};
