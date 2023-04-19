import React from "react";
import { NavLink } from "react-router-dom";

export const Dashboard = () => {

  const navList=['Dashboard', 'Users', 'Products', 'Settings'];
  return(
  <div className="dashboard">
    <div className="dashboard-list">
        <ul>
          <NavLink to='/'>
            {navList.map((item)=>{
              return(
                {item}
              )
            })}
          </NavLink>
        </ul>
    </div>
  </div>  
  );

};
