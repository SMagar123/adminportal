import React from "react";
import { NavLink } from "react-router-dom";
import Adminimage from "../assets/images/admin.png"
export const SideNav = () => {
  const navList = ["Dashboard", "Users", "Products","Brands","Settings"];
  return (
    <>
      <div className="logo">
        <h2>Admin Portal</h2>
      </div>
      <ul>
        {navList.map((item) => {
          return (
            <li key={item}>
              <NavLink key={item}>{item}</NavLink>
            </li>
          );
        })}
      </ul>
      {/* <img src={Adminimage} alt="admin" /> */}
    </>
  );
};
