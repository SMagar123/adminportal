import React from "react";
import { NavLink } from "react-router-dom";
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
  Bar
} from "recharts";

export const Dashboard = () => {
  const navList = ["Dashboard", "Users", "Products", "Settings"];
  const productData = Data.products;

  return (
    <div className="dashboard">
      {/* .......side-nav list......... */}
      <div className="dashboard__list">
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
      </div>

      {/* ........Charts.......... */}
      <div className="dashboard__charts">
        {/* .......LineChart.......... */}
        <div className="dashboard__charts-linechart" key={productData.id}>
          <LineChart width={600} height={300} data={productData}>
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
          <BarChart width={600} height={300} data={productData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" />
            <YAxis dataKey="stock"/>
            <Tooltip />
            <Legend />
            <Bar dataKey="category" fill="#8884d8" />
            <Bar dataKey="stock" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>

      {/* .....table......... */}
      <div className="dashboard__table">
        
      </div>
    </div>
  );
};
