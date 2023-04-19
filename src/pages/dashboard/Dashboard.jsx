import React from "react";
import { NavLink } from "react-router-dom";
import {
  RxHamburgerMenu,
  BiSearch,
  BsBell,
  RiAdminFill,
} from "../../assets/icons/Icons";
export const Dashboard = () => {
  const navList = ["Dashboard", "Users", "Products", "Settings"];
  return (
    <div className="dashboard">
      <div className="dashboard-list">
        <ul>
          {navList.map((item) => {
            return <NavLink key={item}>{item}</NavLink>;
          })}
        </ul>
      </div>
      <div className="dashboard__header">
        <div className="ham-icon">
          <i>
            <RxHamburgerMenu />
          </i>
        </div>
        <div className="search">
          <input
            type="text"
            name="username"
            placeholder="Search user by name"
          />
          <i>
            <BiSearch />
          </i>
        </div>
        <div className="adminlogo">
          <i>
            <BsBell />
          </i>
          <i>
            <RiAdminFill />
          </i>
        </div>
      </div>
    </div>
  );
};
