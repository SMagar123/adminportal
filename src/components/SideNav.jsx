import React from "react";
import { NavLink } from "react-router-dom";
export const SideNav = () => {
  const navList = ["Dashboard", "Users", "Products", "Settings"];
  return (
    <>
      <div className="logo">
        <h1>Admin Portal</h1>
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
    </>
  );
};
