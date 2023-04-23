import React from "react";
import { SideNav } from "../../components";
import {
  RxHamburgerMenu,
  BiSearch,
  BsBell,
  RiAdminFill,
} from "../../assets/icons/Icons";
import Data from "../../productdata.json";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  BarChart,
  Bar,
} from "recharts";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
export const Dashboard = () => {
  const productData = Data.products;

  return (
    <div className="dashboard">
      {/* .......side-nav list......... */}
      <div className="dashboard__list">
        <SideNav />
      </div>
      <div className="dashboard__body">
        {/* .........header..........*/}
        <div className="dashboard__header">
          <div className="ham-icon">
            <i>
              <RxHamburgerMenu />
            </i>
          </div>
          {/* <div className="search">
            <input
              type="text"
              name="username"
              placeholder="Search user by name"
            />
            <i>
              <BiSearch />
            </i>
          </div> */}
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
        <div className="details">
          {/* ........Charts.......... */}
          <div className="dashboard__charts">
            {/* .......LineChart.......... */}
            <div className="dashboard__charts-linechart" key={productData.id}>
              <LineChart width={400} height={250} data={productData}>
                <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                <XAxis dataKey="title" />
                <YAxis dataKey="stock" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="stock"
                  stroke="#8884d8"
                  strokeWidth={3}
                />
                <Line
                  type="monotone"
                  dataKey="discountPercentage"
                  stroke="#82ca9d"
                  strokeWidth={3}
                />
              </LineChart>
            </div>
            <div className="dashboard__charts-barchart" key={productData.id}>
              <BarChart width={400} height={250} data={productData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="title" />
                <YAxis dataKey="stock" />
                <Tooltip />
                <Legend />
                <Bar dataKey="category" fill="#8884d8" />
                <Bar dataKey="stock" fill="#82ca9d" />
              </BarChart>
            </div>
          </div>
          {/*Users and product number listing */}
          <div className="dashboard__userno">
            <div className="numbers">
              <div className="number-display">
                <h4>20</h4>
              </div>

              <p>Users</p>
            </div>
            <div className="numbers">
              <h4>12</h4>
              <p>Products</p>
            </div>
            <div className="numbers">
              <h4>5</h4>
              <p>Brands</p>
            </div>
          </div>
          {/* .....table......... */}
          <div className="dashboard__table">
            <table>
              <thead className="dasboard__table-head">
                <th>S.N.</th>
                <th>Product</th>
                <th>Category</th>
                <th>Stock</th>
              </thead>
              <tbody>
                {productData.slice(0, 5).map((item) => {
                  return (
                    <tr key={item.id}>
                      <td data-label="S.N.">{item.id}</td>
                      <td data-label="Product">{item.title}</td>
                      <td data-label="Category">{item.category}</td>
                      <td data-label="Stock">{item.stock}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="dashboard__extras">
            <Calendar />
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.6105912675985!2d85.32294291506255!3d27.729307082782853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb193d5c1645af%3A0x10d3548af21a231f!2sSwift%20Technology%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1682233853411!5m2!1sen!2snp"
                width="550"
                height="300"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
