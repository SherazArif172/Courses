import React from "react";
import Giftimg from "./images/Icons-gift.png.webp";

const Gift = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="">
        <img src={Giftimg} alt="" className="w-24 m-auto" />
        <h1 className="text-center text-4xl tracking-widest font-medium mt-5">
          A GIFT FROM US TO YOU
        </h1>
        <p className="text-center mt-4 text-[#666] tracking-widest">
          Because your happiness and wellbeing matters, here is a gift to help
          you keep up with the fast-pace of everyday life.
        </p>
      </div>
    </div>
  );
};

export default Gift;
