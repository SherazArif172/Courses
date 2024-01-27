import React from "react";

const Text = () => {
  return (
    <div className=" mt-20 w-full">
      <h1 className="text-center text-4xl tracking-widest font-medium mt-7 lg:px-0 px-2">
        WHAT PEOPLE ARE SAYING ABOUT OUR COURSES
      </h1>
      <div className="grid md:grid-cols-3 lg:px-16">
        <div className="lg:px-9 px-4 md:pt-9  ">
          <p className="text-center text-lg font-thin mt-4 text-[#666] tracking-widest leading-9 pb-6">
            “A I have a greater sense of expanded awareness which has been
            amazingly freeing. I especially loved all the meditations Villoldo
            took us through. I feel incredibly blessed to have been able to
            participate. It has created for me some amazing release of old
            baggage and a moving into a far deeper atonement then ever before.”
          </p>
          <span className="text-center text-lg  font-bold mt-7 leading-8">
            Participant of Courageous Dreaming
          </span>
        </div>

        <div className="lg:px-9 px-4 md:pt-9">
          <p className="text-center text-lg mt-4 font-thin text-[#666] tracking-widest leading-9 pb-6">
            “The greatest thing I got out of it was how much truth I felt in
            everything I learned. It really resonated with me. There was such
            wonderful insight and new information I learned I really enjoyed it.
            It was very powerful being a part of his work and teachings. This is
            definitely the journey I am supposed to be on and will continue to
            follow.”
          </p>
          <span className="text-center text-lg font-bold leading-8 ">
            Participant of The Shaman’s Way of Healing
          </span>
        </div>
        <div className="lg:px-9 px-4 md:pt-9">
          <p className="text-center text-lg mt-4 text-[#666] tracking-widest leading-9 pb-6 font-thin">
            “This in-depth course propelled me forward along my spiritual path
            beyond my imagination. It was everything and more. What an amazing
            experience to be amongst such a beautiful Ayllu and to hold sacred
            space for one another. All teachers were amazing and supportive! I
            love the layout of the course over 11-weeks, and felt as though
            there was enough time to practice, integrate, and ask questions. My
            soul thanks you all dearly!”
          </p>
          <span className="text-center text-lg font-bold mt-7 leading-8">
            Participant of The Rites of the Munay Ki
          </span>
        </div>
      </div>
    </div>
  );
};

export default Text;
