import React from "react";
import Twostar from "./images/Star-2.png.png";

const TwoStars = () => {
  return (
    <div className="mt-14">
      <img src={Twostar} alt="" className="w-24 m-auto " />
      <h1 className="text-center text-4xl tracking-widest font-medium mt-7">
        ADVANCED COURSES
      </h1>
      <p className="text-center text-lg mt-4 text-[#666] tracking-widest">
        Deepen you knowledge of shamanic practices, rituals and concepts.
      </p>
    </div>
  );
};

export default TwoStars;
