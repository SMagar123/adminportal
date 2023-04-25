import React from 'react'
import Data from "../productdata.json";
import { AiOutlineUser, AiOutlineSetting } from "react-icons/ai";
import { BiHomeAlt } from 'react-icons/bi';


export const SideBar=()=> {
    const navList = [    
        {
            nav: "Dashboard",
            path: "/",
            icon: <BiHomeAlt/>
        },
        {
          nav: "Users",
          path:"/Users",
          icon: <AiOutlineUser />,
        },
        {
          nav: "Products",
          path: "/Products",
          icon: <RiProductHuntFill />,
        },
        {
          nav: "Settings",
          path: "/Settings",
          icon: <AiOutlineSetting />,
        },
      ];
};


