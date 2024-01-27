import React from "react";
import Extensiceimg from "./Online-Courses-Header-2-1.jpg";
import ExtensiveQuot from "./Text-3.png.png";
import Curve from "./bgcurve.svg";

const Extensive = () => {
  return (
    <div className="relative mt-24">
      <div className="absolute top-0 h-full w-full overflow-hidden ">
        <img
          src={Extensiceimg}
          alt=""
          className="w-full h-full overflow-hidden object-cover object-center"
        />
      </div>
      <div className="w-full h-full flex lg:flex-row flex-col lg:justify-between justify-start  lg:items-center items-start lg:pt-0 pt-10">
        <div className="lg:w-[50%] lg:h-[400px] h-[10px] lg:block hidden"></div>
        <div className="lg:w-[50%] lg:pt-0 pt-">
          <div className="relative lg:w-[100%] lg:mx-0 px-5">
            <img src={ExtensiveQuot} alt="" className="w-full h-full" />
          </div>
          <div className="relative text-lg lg:w-[100%] h-full  lg:mx-0 mx-5 text-center font-thin ">
            <p>
              We offer the most extensive courses in shamanism and energy
              medicine, who has helped thousands of students to lead successful
              lives and careers.
            </p>
          </div>
        </div>
      </div>
      <div className="relative bottom-0 w-full h-[30%]">
        <img src={Curve} alt="" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Extensive;
