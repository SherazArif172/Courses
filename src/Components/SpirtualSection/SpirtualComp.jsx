import React from "react";
import BgGirlimg from "./images/Online-Courses-Header-1.jpg";
import Spirtual from "./images/Text-2.png.png";
import Curve from "./images/download.svg";

const SpirtualComp = () => {
  return (
    <div className="relative mt-20 w-full">
      <div className="absolute">
        <img src={BgGirlimg} alt="" />
      </div>
      <div className="relative ">
        <img
          src={Spirtual}
          alt="Deepen your spirtual practice from anywhere"
          className="md:w-[47%] w-full  pt-28 md:ps-28 md:px-0 px-7"
        />
      </div>
      <div className="relative   w-full mt-[233px]">
        <img src={Curve} alt="" className="w-full h-full" />
      </div>
    </div>
  );
};

export default SpirtualComp;
