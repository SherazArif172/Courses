import React from "react";
import MasterCard from "./MasterCard";
import Crckeimg from "./images/Header-OEM-Web-3.jpg.jpeg";
import EnergyImg from "./images/EMMC-Course-Thumbnail-980x523.jpg.jpeg";

const MasterMain = () => {
  const MastersCardd = [
    {
      id: 1,
      heading: "ONLINE ENERGY MEDICINE TRAINING",
      Immorality: Crckeimg,
      heading1: "6-MONTH MASTER TRAINING with Alberto Villoldo",
      para: "Kick-start your holistic career with our certified master training in energy medicine and healing",
      heading2: "Various starting dates available, book a call to enquire.",
      btn: "Find out more",
    },
    {
      id: 2,
      heading: "ONLINE ENERGY MEDICINE TRAINING",
      Immorality: EnergyImg,
      heading1: "2-YEAR MASTERY PROGRAM for graduates",
      para: "Grow your career as a modern-day shaman.",
      heading2: "Only open to The Energy Medicine Training graduates.",
      btn: "Join now",
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap justify-evenly">
        {MastersCardd.map((course) => (
          <MasterCard
            key={course.id}
            heasingg={course.heading}
            Immoralityimg={course.Immorality}
            heading2={course.heading1}
            paragraph={course.para}
            heading3={course.heading2}
            button={course.btn}
          />
        ))}
      </div>
    </div>
  );
};

export default MasterMain;
