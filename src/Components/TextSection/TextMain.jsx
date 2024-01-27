import React from "react";
import Text from "./Text1";
import Text2 from "./Text2";
import BgMain from "./images/insurance-02.png";
import DCurve from "./images/download.svg";

const TextMain = () => {
  return (
    <div className="relative bg-[#f7f8fc] overflow-hidden">
      <div className="absolute pt-80  w-fit  object-center overflow-hidden">
        <img
          src={BgMain}
          alt=""
          className="w-full h-full object-cover object-center overflow-hidden"
        />
      </div>
      <div className="relative z-10">
        <div className="relative z-10">
          <Text />
          <Text2 />
        </div>
        <div className="absolute bottom-0 w-full lg:h-[40%] h-[10%]">
          <img src={DCurve} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default TextMain;
