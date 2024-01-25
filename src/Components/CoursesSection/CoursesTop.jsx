import React from "react";
import Star from "./images/Star-1-1.png.webp";

const CoursesTop = () => {
  return (
    <div className="mt-36">
      <img src={Star} alt="" className="w-24 m-auto " />
      <h1 className="text-center text-4xl tracking-widest font-medium mt-7">
        BEGINNER COURSES
      </h1>
      <p className="text-center text-lg mt-4 text-[#666] tracking-widest">
        Your first steps into the world of shamanism.
      </p>
    </div>
  );
};

export default CoursesTop;
