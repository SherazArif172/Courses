import React from "react";
import Crckeimg from "./images/Header-OEM-Web-3.jpg.jpeg";

const Card2 = () => {
  return (
    <div className="max-w-[470px] w-[90%] shadow-[0px_2px_28px_0px_rgba(0,0,0,0.1)] p-8 rounded-lg  mt-8">
      <h1 className="text-2xl font-medium tracking-widest text-center mb-2 font-['Work Sans',Helvetica,Arial,Lucida,sans-serif'] ">
        ONLINE ENERGY MEDICINE TRAINING
      </h1>
      <div>
        <img src={Crckeimg} alt="" />
      </div>
      <h1 className="text-center text-xl font-bold mt-7 leading-8">
        2-YEAR MASTERY PROGRAM for graduates
      </h1>
      <p className="text-[#666] text-xl text-center mt-5 leading-8">
        Grow your career as a modern-day shaman.
      </p>
      <h1 className="text-center text-xl font-bold mt-7 leading-8">
        Only open to The Energy Medicine Training graduates.
      </h1>
      <button className="block m-auto bg-[#bb2026;] px-6 py-3 rounded-md text-white text-xl font-medium mt-6">
        Join now
      </button>
    </div>
  );
};

export default Card2;
