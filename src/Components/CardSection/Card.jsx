import React from "react";

const Card = (props) => {
  return (
    <div className="max-w-[450px] w-[90%] shadow-[0px_2px_28px_0px_rgba(0,0,0,0.1)] p-8 rounded-lg mt-8">
      <h1 className="text-2xl font-medium tracking-widest text-center mb-2 font-['Work Sans',Helvetica,Arial,Lucida,sans-serif']">
        {props.heeadingg}
      </h1>
      <div>
        <img src={props.image} alt="" />
      </div>
      <p className="text-[#666] text-xl text-center mt-7 leading-8">
        {props.paragraph}
      </p>
      <button className="block m-auto bg-[#bb2026;] px-6 py-3 rounded-md text-white text-xl font-medium mt-6">
        {props.giftbtn}
      </button>
    </div>
  );
};

export default Card;
