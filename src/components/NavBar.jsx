import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'
import { SideBar } from './SideBar';

export const NavBar = () => {   
    const [sidebar,setSidebar]=useState(false);
    const showSidebar=()=>setSidebar(!sidebar);
  return (
    <>
        <div className="navbar">
            <NavLink to ="#" className="navbar__menu-bar">
            <i>
              <RxHamburgerMenu />
            </i>
            </NavLink>
        </div>
        <div className={sidebar? 'navbar__nav-menu active': 'navbar__nav-menu'}>
            <nav className="navbar__menu-items">
                <li className="navbar__toddle">
                    <Navlink to="#" className="navbar__menu-bar">
                        <i>
                            <AiOutlineClose/>
                        </i>
                    </Navlink>
                    {SideBar.map((item,index)=>{
                        return{
                        }
                    })}
                </li>
            </nav>
        </div>
    </>
  )
}


