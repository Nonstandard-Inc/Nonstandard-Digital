import React, { useState } from "react";
import { close, logo, menu } from "../assets";

import { navLinks } from "../constants";
const Navbar = () => {
  const [toogle, setToogle] = useState(false);
  return (
    <nav
      className="w-full flex py-0 p-4
    justify-around items-center navbar fixed top-0 h-[80px]
    z-[11] left-0 bg-black-gradient
    "
    >
      <img src={logo} alt="nonstadard" className="w-[10%] h-[100$] ml-20" />
      <ul
        className="list-none sm:flex
      hidden justify-end items-center flex-1
      "
      >
        {navLinks.map((nav, index) => (
          <li
            key={index}
            className={`font-poppins font-normal cursor-pointer 
          text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}
           text-white mr-10`}
          >
            <a href={nav.id}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div
        className="sm:hidden flex flex-1
     justify-end items-center
     "
      >
        <img
          onClick={() => setToogle(!toogle)}
          className="w-[28px] h-[28px] cursor-pointer object-contain"
          src={toogle ? close : menu}
          alt="menu"
        />
        <div
          className={`${toogle ? "flex" : "hidden"}
      p-5 bg-black-gradient absolute top-20 right-0
      mx-4 min-w[140px] rounded-xl sidebar
      `}
        >
          <ul
            className="list-none flex flex-col
       justify-end items-center flex-1
      "
          >
            {navLinks.map((nav, index) => (
              <li
                key={index}
                className={`font-poppins font-normal cursor-pointer 
          text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mb-4"}
           text-white mr-10`}
              >
                <a href={nav.id}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
