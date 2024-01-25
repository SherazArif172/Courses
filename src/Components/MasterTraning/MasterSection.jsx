import React from "react";
import Mastertop from "./Mastertop";
import Card1 from "./Card1";
import Card2 from "./Card2";

const MasterSection = () => {
  return (
    <div>
      <Mastertop />
      <div className="flex flex-wrap justify-evenly mb-32">
        <Card1 />
        <Card2 />
      </div>
    </div>
  );
};

export default MasterSection;
