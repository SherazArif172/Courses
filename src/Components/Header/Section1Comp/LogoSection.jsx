import React, { useState } from "react";
import logoo from "../images/fourwinds-favicon.png.png";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const LogoSection = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className=" w-[90%] relative">
      <div className=" flex justify-between items-center mt-5 lg:ml-28 md:ml-20 sm:ml-16 ml-10 ">
        <div className="  ">
          <a href="#">
            <img src={logoo} alt="" className="lg:w-[100%] w-[80%]" />
          </a>
        </div>
        <div className="lg:hidden text-white text-3xl ">
          <button onClick={toggleMenu}>
            <FaBars />
          </button>
        </div>
        <div
          className={`lg:flex ${
            showMenu ? "fixed left-0" : "hidden -left-full"
          } ${
            showMenu ? "bg-white" : "md:bg-none"
          } lg:w-full w-[80%] lg h-full justify-end top-0 left-0 z-50 `}
        >
          <ul className="flex flex-col justify-center items-center  lg:flex-row lg:gap-5 gap-9 p-2 lg:pt-0 pt-32  ">
            <li className="group transition duration-500 ease-in-out relative text-[18px] list-none">
              <a href="#">About Us</a>
              <div className="absolute w-full   h-0.5 bg-red-700 bottom-0 left-0 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            </li>
            <li className="group transition duration-500 ease-in-out relative text-[18px] list-none">
              <a href="#">The Energy Medicine Training</a>
              <div className="absolute w-full h-0.5 bg-red-700 bottom-0 left-0 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            </li>
            <li className="group transition duration-500 ease-in-out relative text-[18px] list-none">
              <a href="#">Online courses</a>
              <div className="absolute w-full  h-0.5 bg-red-700 bottom-0 left-0 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            </li>
            <li className="group transition duration-500 ease-in-out relative text-[18px] list-none">
              <a href="#">Events</a>
              <div className="absolute w-full  h-0.5 bg-red-700 bottom-0 left-0 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            </li>
          </ul>
          {showMenu && (
            <div className="absolute top-4 right-4">
              <button onClick={closeMenu}>
                <ImCross />
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default LogoSection;
