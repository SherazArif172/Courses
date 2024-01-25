import React from "react";
import Extensiceimg from "./Online-Courses-Header-2-1.jpg";
import ExtensiveQuot from "./Text-3.png.png";
import Curve from "./download.svg";

const Extensive = () => {
  return (
    <div className="relative mt-24">
      <div className="absolute">
        <img src={Extensiceimg} alt="" />
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full">
          <div className="relative w-[50%] ">
            <img src={ExtensiveQuot} alt="" className="w-full h-full" />
          </div>
          <div className="relative text-lg w-[50%] text-center font-thin">
            <p>
              We offer the most extensive courses in shamanism and energy
              medicine, who has helped thousands of students to lead successful
              lives and careers.
            </p>
          </div>
        </div>
      </div>
      <div className="relative ">
        <img src={Curve} alt="" className="w-full mt-[290px]" />
      </div>
    </div>
  );
};

export default Extensive;
