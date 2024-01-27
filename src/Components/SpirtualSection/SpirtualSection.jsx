import React from "react";
import BgGirlimg from "./images/Online-Courses-Header-1.jpg";
import Spirtual from "./images/Text-2.png.png";
import Curve from "./images/download.svg";

const SpirtualSection = () => {
  return (
    <div className="overflow-hidden relative mt-20 ">
      <div className="absolute top-0  h-full w-full overflow-hidden">
        <img
          src={BgGirlimg}
          alt=""
          className="w-full h-full overflow-hidden object-cover object-center"
        />
      </div>
      <div className="relative ">
        <img
          src={Spirtual}
          alt="Deepen your spirtual practice from anywhere"
          className="md:w-[47%] w-full  pt-32 md:ps-28 md:px-0 px-7"
        />
      </div>
      <div className="relative lg:ps-24 lg:mx-0 mx-5 pt-8 text-lg lg:w-[50%] lg:m-0  text-center font-thin">
        <p>
          Thanks to our online courses, you can learn remotely, at your own pace
          from any location.
        </p>
      </div>
      <div className="relative w-full mt-[130px]">
        <img src={Curve} alt="" className="w-full h-full" />
      </div>
    </div>
  );
};

export default SpirtualSection;
