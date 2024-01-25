import React from "react";
import Threestars from "./images/Star-3.png.png";

const Mastertop = () => {
  return (
    <div className="mt-14">
      <img src={Threestars} alt="" className="w-24 m-auto " />
      <h1 className="text-center text-4xl tracking-widest font-medium mt-7">
        MASTER TRAINING
      </h1>
      <p className="text-center text-lg mt-4 text-[#666] tracking-widest">
        Get your certification in shamanic practice, energy medicine and
        healing.
      </p>
    </div>
  );
};

export default Mastertop;
