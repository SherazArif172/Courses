import React from "react";
import EnergyImg from "./images/EMMC-Course-Thumbnail-980x523.jpg.jpeg";

const Card1 = () => {
  return (
    <div className="max-w-[470px] w-[90%] shadow-[0px_2px_28px_0px_rgba(0,0,0,0.1)] p-8 rounded-lg  mt-8">
      <h1 className="text-2xl font-medium tracking-widest text-center mb-2 font-['Work Sans',Helvetica,Arial,Lucida,sans-serif'] ">
        ONLINE ENERGY MEDICINE TRAINING
      </h1>
      <div>
        <img src={EnergyImg} alt="" />
      </div>
      <h1 className="text-center text-xl font-bold mt-7 leading-8">
        6-MONTH MASTER TRAINING with Alberto Villoldo
      </h1>
      <p className="text-[#666] text-xl text-center mt-5 leading-8">
        Kick-start your holistic career with our certified master training in
        energy medicine and healing
      </p>
      <h1 className="text-center text-xl font-bold mt-7 leading-8">
        Various starting dates available, book a call to enquire.
      </h1>
      <button className="block m-auto bg-[#bb2026;] px-6 py-3 rounded-md text-white text-xl font-medium mt-6 hover:bg-white hover:text-[#bb2026;] hover:ease-linear hover:duration-200">
        Find out more
      </button>
    </div>
  );
};

export default Card1;
