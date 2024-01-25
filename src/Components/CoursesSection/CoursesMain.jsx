import React from "react";
import CoursesCard from "./CoursesCard";
import Img1 from "./images/13M-Course-Thumbnail.jpg.jpg";
import Img2 from "./images/7H-Course-Thumbnail.jpg.jpg";
import Img3 from "./images/CD-Course-Thumbnail-3-980x523.jpg.jpg";
import Img4 from "./images/DEI-Course-Thumbnail-980x523.jpg.webp";
import Img5 from "./images/PA-Course-Thumbnail-2-980x523.jpg.jpg";
import Img6 from "./images/SC-Course-Thumbnail-980x523.jpg.jpg";
import Img7 from "./images/SJ-Course-Header.jpg.jpg";
import Img8 from "./images/SWOH-Thumbnail.jpg.jpg";
import Img9 from "./images/WOL-Course-Thumbnail.jpg.jpg";

const CoursCard = [
  {
    id: 1,
    heading: "THE DEATHLESS ELIXIR OF IMMORTALITY",
    Immorality: Img1,
    heading1: "6-WEEK COURSE with Alberto Villoldo & Bob Thurman.",
    para: "Explore the realms beyond death & the journey to infinity.",
  },
  {
    id: 2,
    heading: "THE SHAMAN'S COMPASS",
    Immorality: Img2,
    heading1: "5-WEEK COURSE with Alberto Villoldo & Colette Baron-Reid.",
    para: "Explore the Shaman’s Oracle as a divination tool that combines neoshamanism with the ancient practice of oracle reading.",
  },
  {
    id: 3,
    heading: "THE WHEELS OF LIGHT",
    Immorality: Img3,
    heading1: "5-WEEK COURSE with Alberto Villoldo",
    para: "Learn to work with your chakras in order to achieve physical, psycho-emotional and spiritual wellbeing",
  },
  {
    id: 4,
    heading: "13 MOONS OF WISDOM",
    Immorality: Img4,
    heading1: "4-WEEK COURSE with Marcela Lobos",
    para: "Embark on a journey towards wholeness and awakening of your true purpose.",
  },
  {
    id: 5,
    heading: "SHAMANIC JOURNEYING",
    Immorality: Img5,
    heading1: "4-WEEK COURSE with Alberto Villoldo",
    para: "Travel through space and time as you discover the meditation practice of the shamans.",
  },
  {
    id: 6,
    heading: "POWER ANIMALS",
    Immorality: Img6,
    heading1: "4-WEEK COURSE with Alberto Villoldo",
    para: "Connect to your power animal archetypes and learn to understand what they mean.",
  },
  {
    id: 7,
    heading: "THE SHAMAN'S WAY OF HEALING",
    Immorality: Img7,
    heading1: "4-WEEK COURSE with Alberto Villoldo",
    para: "Discover the basics of shamanic energy medicine and healing.",
  },
  {
    id: 8,
    heading: "SEVEN HEAVENS - THE SHAMAN'S TOOLBOX",
    Immorality: Img8,
    heading1: "4-WEEK COURSE with Alberto Villoldo",
    para: "Learn about the shaman’s tools, both physical and spiritual.",
  },
  {
    id: 9,
    heading: "COURAGEOUS DREAMING",
    Immorality: Img9,
    heading1: "4-WEEK COURSE with Alberto Villoldo",
    para: "Learn about the shaman’s tools, both physical and spiritual.",
  },
  {
    id: 10,
    heading: "COURAGEOUS DREAMING",
    Immorality: Img9,
    heading1: "4-WEEK COURSE with Alberto Villoldo",
    para: "Learn to dream your reality into being – the beginners course to manifestation.",
  },
];

const CoursesMain = () => {
  return (
    <div className="flex flex-wrap justify-evenly">
      {CoursCard.map((course) => (
        <CoursesCard
          key={course.id}
          heasingg={course.heading}
          Immoralityimg={course.Immorality}
          heading2={course.heading1}
          paragraph={course.para}
        />
      ))}
    </div>
  );
};

export default CoursesMain;
