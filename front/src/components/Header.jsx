import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed w-full top-0 bg-white shadow-md z-10">
      <div className="px-[50px] py-[15px]">
        <div className="flex justify-between items-center">
          <div><h1 className="text-[35px] font-bold">LevelM4</h1></div>
          <div><ul className="flex gap-[50px] text-[19px]">
            <li><a href="#">Home</a></li>
            <li><a href="#" className="flex items-center">Live Demo<MdArrowDropDown className="text-[30px]"/></a></li>
            <li><a href="#" className="flex items-center">Live Demo Blocks<MdArrowDropDown className="text-[30px]"/></a></li>
          </ul></div>
          <div><Link to={"/add"}><button className="uppercase py-3 px-4 bg-indigo-500 text-white">buy now</button></Link></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
