import React from "react";

const AdnvancedCards = (props) => {
  return (
    <div className="max-w-[470px] w-[90%] shadow-[0px_2px_28px_0px_rgba(0,0,0,0.1)] p-8 rounded-lg  mt-16">
      <h1 className="text-2xl font-medium tracking-widest text-center mb-2 font-['Work Sans',Helvetica,Arial,Lucida,sans-serif'] ">
        {props.heasingg}
      </h1>
      <div>
        <img src={props.Immoralityimg} alt="" />
      </div>
      <h1 className="text-center text-xl font-bold mt-7 leading-8">
        {props.heading2}
      </h1>
      <p className="text-[#666] text-xl text-center mt-5 leading-8">
        {props.paragraph}
      </p>
    </div>
  );
};

export default AdnvancedCards;
