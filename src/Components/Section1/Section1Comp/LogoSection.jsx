import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import logoo from "../images/fourwinds-favicon.png.png";

const AboutUs = () => <div>About Us content goes here...</div>;
const EnergyTraining = () => (
  <div>The Energy Medicine Training content goes here...</div>
);
const OnlineCourses = () => <div>Online courses content goes here...</div>;
const Events = () => <div>Events content goes here...</div>;

const LogoSection = () => {
  return (
    <Router>
      <div className="mt-4 w-[80%] m-auto">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img src={logoo} alt="" className="w-[70px]" />
          </Link>
          <ul className="flex gap-5">
            <li className="group transition duration-500 ease-in-out relative text-[18px]">
              <Link to="/about">About Us</Link>
              <div className="absolute w-full h-0.5 bg-red-700 bottom-0 left-0 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            </li>
            <li className="group transition duration-500 ease-in-out relative text-[18px]">
              <Link to="/energy-training">The Energy Medicine Training</Link>
              <div className="absolute w-full h-0.5 bg-red-700 bottom-0 left-0 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            </li>
            <li className="group transition duration-500 ease-in-out relative text-[18px]">
              <Link to="/online-courses">Online courses</Link>
              <div className="absolute w-full h-0.5 bg-red-700 bottom-0 left-0 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            </li>
            <li className="group transition duration-500 ease-in-out relative text-[18px]">
              <Link to="/events">Events</Link>
              <div className="absolute w-full h-0.5 bg-red-700 bottom-0 left-0 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            </li>
          </ul>
        </div>

        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/energy-training" element={<EnergyTraining />} />
          <Route path="/online-courses" element={<OnlineCourses />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </Router>
  );
};

export default LogoSection;
