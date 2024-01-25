import React from "react";
import Card from "./Card";
import Cardimg from "./images/Being-in-the-Flow-Course-Thumbnail.jpg.jpg";

const Cards = [
  {
    id: 1,
    heading: "FREE GIFT - BEING IN THE FLOW",
    Manimg: Cardimg,
    para: "Join Alberto Villoldo, as he shares shamanic practices to keep you in the flow of our new daily ups and downs.",
    Button: "Get your free gift",
  },
  {
    id: 1,
    heading: "FREE GIFT - BEING IN THE FLOW",
    Manimg: Cardimg,
    para: "Join Alberto Villoldo, as he shares shamanic practices to keep you in the flow of our new daily ups and downs.",
    Button: "Get your free gift",
  },
];

const CardMain = () => {
  return (
    <div className="">
      <div className="flex flex-wrap justify-evenly">
        {Cards.map((card) => (
          <Card
            key={card.id}
            heeadingg={card.heading}
            image={card.Manimg}
            paragraph={card.para}
            giftbtn={card.Button}
          />
        ))}
      </div>
    </div>
  );
};

export default CardMain;
