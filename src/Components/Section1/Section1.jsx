import React from "react";
import Coursesheader from "./Section1Comp/Coursesheader";
import bgimg from "./images/Online-Courses-Background4.jpg";
import LogoSection from "./Section1Comp/LogoSection";
import Quot from "./images/Quote.png.webp";
import Bgcurve from "./images/bgcurve.svg";

const Section1 = () => {
  return (
    <div className="overflow-hidden relative w-full ">
      <div className="absolute top-0   h-full w-full overflow-hidden ">
        <img
          src={bgimg}
          alt=""
          className=" w-full h-full overflow-hidden object-cover object-center "
        />
      </div>
      <div className="relative pt-7">
        <Coursesheader />
        <LogoSection />
      </div>
      <div className="flex justify-end lg:mt-16 mt-16 px-6 w-[100%]">
        <img src={Quot} alt="" className="relative lg:w-[50%] " />
      </div>
      <div className="relative  w-full">
        <img src={Bgcurve} alt="" className=" w-full h-full  " />
      </div>
    </div>
  );
};

export default Section1;
