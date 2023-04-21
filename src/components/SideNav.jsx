import React, { useState } from "react";
import { AiOutlineUser, AiOutlineSetting } from "react-icons/ai";
import { BiDownArrow, BiHomeAlt } from "react-icons/bi";
import { RiProductHuntFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export const SideNav = () => {
  const navList = [
    {
      nav: "Dashboard",
      icon: <BiHomeAlt />,
    },
    {
      nav: "Users",
      icon: <AiOutlineUser />,
    },
    {
      nav: "Products",
      icon: <RiProductHuntFill />,
    },
    {
      nav: "Settings",
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
      <div className="logo">
        {/* <img src="" alt="logo" /> */}
        <h2>Admin Portal</h2>
        <i onClick={() => toggleButton()}>
          <BiDownArrow />
        </i>
        {show ? <input type="text" className="searchbar" placeholder="Filter Menu" /> : null}
      </div>
      <ul>
        {navList.map((item) => {
          return (
            <li key={item.nav}>
              <NavLink key={item.nav}>
                {item.icon} {item.nav}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};
