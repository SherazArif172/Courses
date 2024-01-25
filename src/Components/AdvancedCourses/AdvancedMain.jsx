import React from "react";
import AdnvancedCards from "./AdnvancedCards";
import img1 from "./images/Calendar-2023-Background-GNB-980x551.jpg.jpeg";
import img2 from "./images/HDS-Course-Thumbnail.jpg.jpeg";
import Img3 from "./images/MKI-Course-Thumbnail-2.jpg.jpeg";
import img4 from "./images/RSS-Course-Thumbnail.jpg.jpeg";
import img5 from "./images/TM-Course-Thumbnail-980x523.jpg.jpeg";
import img6 from "./images/ahsh-header-FINAL-980x551.jpg.jpeg";

const AdvancedMain = () => {
  const CoursCard = [
    {
      id: 1,
      heading: "THE RITES OF THE MUNAY KI",
      Immorality: img1,
      heading1: "ADVANCED 11-WEEK COURSE with Marcela Lobos",
      para: "Receive ancient shamanic initiations for inner awakening with Marcela Lobos.",
    },
    {
      id: 2,
      heading: "HEALING THE DARK SIDE",
      Immorality: img2,
      heading1: "ADVANCED 6-WEEK COURSE with Alberto Villoldo",
      para: "Explore shamanic shadow work with Alberto Villoldo to harness your inner darkness as a source of power and light.",
    },
    {
      id: 3,
      heading: "READING THE SIGNS OF DESTINY",
      Immorality: Img3,
      heading1: "ADVANCED 6-WEEK COURSE with Alberto Villoldo",
      para: "Master divination tools for clearing your past and aligning your life with destiny.",
    },
    {
      id: 4,
      heading: "TIME MASTERS",
      Immorality: img4,
      heading1: "ADVANCED 5-WEEK COURSE with Alberto Villoldo",
      para: "Discover the shaman’s concept of time and learn how to break free from it.",
    },
    {
      id: 5,
      heading: "GROW A NEW BODY",
      Immorality: img5,
      heading1: "ADVANCED 4-WEEK COURSE with Alberto Villoldo",
      para: "Discover powerful plant nutrients and spiritual techniques that can transform your health with Alberto Villoldo.",
    },
    {
      id: 6,
      heading: "ADVANCED SHAMANIC SKILLS",
      Immorality: img6,
      heading1: "ADVANCED 4-WEEK COURSE with Alberto Villoldo",
      para: "Elevate your shamanic practice with advanced techniques from Alberto Villoldo.",
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap justify-evenly">
        {CoursCard.map((course) => (
          <AdnvancedCards
            key={course.id}
            heasingg={course.heading}
            Immoralityimg={course.Immorality}
            heading2={course.heading1}
            paragraph={course.para}
          />
        ))}
      </div>
    </div>
  );
};

export default AdvancedMain;
