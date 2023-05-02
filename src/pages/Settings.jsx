import React, { useState, useEffect } from "react";
import { Button } from "../components/Button";

export const Settings = (props) => {
  const [color, setColor] = useState("white");
  const click = (color) => {
    setColor(color);
  };
  const handleClick = () => {
    click("054258");
  };
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);
  const darkmode = "Dark Mode";
  return (
    <div className="setting__wrapper">
      <div className="wrapper-layout">
        <h3>Choose layout</h3>
        <div className="wrapper-layout-choose">
          <Button name="Smriti" handleClick={handleClick} reqValue={darkmode} />
          {/* <button onClick={()=>{click("#054258")}}>Dark Mode</button>
          <button onClick={()=>{click("white")}}>Light Mode</button> */}
        </div>
      </div>
    </div>
  );
};
