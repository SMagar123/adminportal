import React from "react";
import { BiEdit, BiUserPlus } from "react-icons/bi";
import UserData from "../userdata.json";
import { RiDeleteBin5Line } from "react-icons/ri";


export const Users = () => {
  const data = UserData.users;
  return(
    <div className="user__wrapper">
      <div className="user__wrapper-header">
        <div className="header-title">
          <h2>Users List</h2>
        </div>
        <div className="header-adduser">
          <i>
            <BiUserPlus/>
          </i>
        </div>
      </div>
        <input type="text" />
      <div className="user__wrapper-table">
        {/* <table>
              <thead className="table-head">
                <th>I.D.</th>
                <th>Image</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </thead>
              <tbody>
                {data.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td data-label="S.N.">{item.id}</td>
                      <td data-label="Image"></td>
                      <td data-label="FirstName">{item.firstName}</td>
                      <td data-label="LastName">{item.lastName}</td>
                      <td data-label="Email">{item.email}</td>
                      <td data-label="Phone">{item.phone}</td>
                      <td>
                        <i><BiEdit/></i>
                        <i><RiDeleteBin5Line/></i>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table> */}
      </div>
    </div>
  );
  
};
