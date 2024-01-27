import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import logoo from "../images/fourwinds-favicon.png.png";

const AboutUs = () => <div></div>;
const EnergyTraining = () => <div></div>;
const OnlineCourses = () => <div></div>;
const Events = () => <div></div>;

const LogoSection = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <Router>
      <nav className=" w-[90%] relative">
        <div className=" flex justify-between items-center mt-5 lg:ml-28 md:ml-20 sm:ml-16 ml-10 ">
          <div className="  ">
            <Link to="/">
              <img src={logoo} alt="" className="lg:w-[100%] w-[80%]" />
            </Link>
          </div>
          <div className="lg:hidden text-white ">
            <button onClick={toggleMenu}>
              <svg
                className="w-6 h-6 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`lg:flex ${showMenu ? "fixed" : "hidden"} ${
              showMenu ? "bg-white" : "md:bg-none"
            } lg:w-full w-[80%] justify-end top-0 left-0 z-50`}
          >
            <ul className="flex flex-col lg:flex-row gap-5 p-2">
              <li className="group transition duration-500 ease-in-out relative text-[18px] list-none">
                <Link to="/about">About Us</Link>
                <div className="absolute w-full h-0.5 bg-red-700 bottom-0 left-0 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </li>
              <li className="group transition duration-500 ease-in-out relative text-[18px] list-none">
                <Link to="/energy-training">The Energy Medicine Training</Link>
                <div className="absolute w-full h-0.5 bg-red-700 bottom-0 left-0 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </li>
              <li className="group transition duration-500 ease-in-out relative text-[18px] list-none">
                <Link to="/online-courses">Online courses</Link>
                <div className="absolute w-full h-0.5 bg-red-700 bottom-0 left-0 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </li>
              <li className="group transition duration-500 ease-in-out relative text-[18px] list-none">
                <Link to="/events">Events</Link>
                <div className="absolute w-full h-0.5 bg-red-700 bottom-0 left-0 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </li>
            </ul>
            {showMenu && (
              <div className="absolute top-4 right-4">
                <button onClick={closeMenu}>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>

        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/energy-training" element={<EnergyTraining />} />
          <Route path="/online-courses" element={<OnlineCourses />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </nav>
    </Router>
  );
};

export default LogoSection;
