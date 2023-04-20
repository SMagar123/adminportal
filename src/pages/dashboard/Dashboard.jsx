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
            <div className="badge">
              <i>
                <BsBell />
              </i>
              <span>1</span>
            </div>
            <i>
              <RiAdminFill />
            </i>
          </div>
        </div>

        {/* ........Charts.......... */}
        <div className="dashboard__charts">
          {/* .......LineChart.......... */}
          <div className="dashboard__charts-linechart" key={productData.id}>
            <LineChart width={400} height={300} data={productData}>
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
            <BarChart width={400} height={300} data={productData}>
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
            <h4>20</h4>
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
        <div className="dashboard__table"></div>
      </div>
    </div>
  );
};
