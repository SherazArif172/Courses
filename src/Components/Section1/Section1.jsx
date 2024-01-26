import React from "react";
import Coursesheader from "./Section1Comp/Coursesheader";
import bgimg from "./images/Online-Courses-Background4.jpg";
import LogoSection from "./Section1Comp/LogoSection";
import Quot from "./images/Quote.png.webp";
import Bgcurve from "./images/bgcurve.svg";

const Section1 = () => {
  return (
    <div className="overflow-hidden relative">
      <div className="absolute object-cover ">
        <img src={bgimg} alt="" className=" bg-cover bg-center  " />
      </div>
      <div className="relative pt-7">
        <Coursesheader />
        <LogoSection />
      </div>
      <div className="flex justify-end mt-16 w-[90%]">
        <img src={Quot} alt="" className="relative w-[50%] " />
      </div>
      <div className="relative  w-full">
        <img src={Bgcurve} alt="" className=" w-full h-full  " />
      </div>
    </div>
  );
};

export default Section1;
