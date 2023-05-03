import React, { useState, useEffect } from "react";
import { Button } from "../components";

export const Settings = () => {
  const [color, setColor] = useState("white");
  const click = (color) => {
    setColor(color);
  };
 
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);
  return (
    <div className="setting__wrapper">
      <div className="wrapper-layout">
        <h3>Choose layout</h3>
        <div className="wrapper-layout-choose">
          <Button
            onClick={()=>{click("#054258")}}
               name={"Dark Mode"}
          />
          <Button onClick={()=>{click("white")}}
             name={"Light Mode"} className={"lightmode"}         
          />
        
        </div>
      </div>
    </div>
  );
};
