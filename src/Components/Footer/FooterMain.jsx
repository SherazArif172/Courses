import React from "react";
import BgFooter from "./images/footer-background.jpg";
import Footerimg from "./images/FW-Logo-New-with-text.png.png";
import LogoB from "./images/MKI-Website-Icon-logo.png.png";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const FooterMain = () => {
  return (
    <div className="relative mt-24 pb-24 ">
      <div className="z-0 absolute bottom-0  w-full h-full  ">
        <img
          src={BgFooter}
          alt=""
          className="w-full h-full object-cover overflow-hidden"
        />
      </div>
      <div className="w-full h-[100px]"></div>
      <div className="relative max-w-screen-lg w-[80%] m-auto md:w-full flex flex-col md:flex-row pt-8 border-t border-white ">
        <div className="w-full  ml-10">
          <img
            src={Footerimg}
            alt="the Four Winds"
            className="md:w-[90%]  w-[30%] mb-4 md:mb-0"
          />
          <img
            src={LogoB}
            alt="MKI logo"
            className="md:w-[45%] w-[18%] md:m-0 m-auto pt-4"
          />
        </div>
        <div className="w-full  tracking-widest">
          <ul>
            <h2 className="text-[#b41f25] leading-8 pb-2 text-sm font-bold">
              COURSES & EVENTS
            </h2>
            <li className="font-thin mt-2 text-[#666] text-sm">
              <a href="#">Energy Medicine</a>
            </li>
            <li className="font-thin mt-2 text-[#666] text-sm">
              <a href="#">Online Courses</a>
            </li>
            <li className="font-thin mt-2 text-[#666] text-sm">
              <a href="#">Events</a>
            </li>
          </ul>
        </div>
        <div className="w-full tracking-widest">
          <ul>
            <h2 className="text-[#b41f25] leading-8 pb-2 text-sm font-bold">
              BOOKINGS
            </h2>
            <li className="font-thin mt-2 text-[#666] text-sm">
              <a href="#">Practitioner</a>
            </li>
            <li className="font-thin mt-2 text-[#666] text-sm">
              <a href="#">Directory</a>
            </li>
            <li className="font-thin mt-2 text-[#666] text-sm">
              <a href="#">Private</a>
            </li>
            <li className="font-thin mt-2 text-[#666] text-sm">
              <a href="#">Consultations</a>
            </li>
          </ul>
        </div>
        <div className="w-full  tracking-widest">
          <ul>
            <h2 className="text-[#b41f25] leading-8 pb-2 text-sm font-bold">
              THE FOUR WINDS
            </h2>
            <li className="font-thin mt-2 text-[#666] text-sm">
              <a href="#">About Us</a>
            </li>
            <li className="font-thin mt-2 text-[#666] text-sm">
              <a href="#">Contact</a>
            </li>
            <li className="font-thin mt-2 text-[#666] text-sm">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="font-thin mt-2 text-[#666] text-sm">
              <a href="#">Terms & Conditions</a>
            </li>
            <li className="font-thin mt-2 text-[#666] text-sm">
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div className="w-full  tracking-widest">
          <ul>
            <h2 className="text-[#b41f25] leading-8 pb-2 text-sm font-bold ">
              MUNAY-KI
            </h2>
            <li className="font-thin mt-2 text-[#666] text-sm">
              <a href="#">Munay-Ki</a>
            </li>
            <li className="font-thin mt-2 text-[#666] text-sm">
              <a href="#">Rites</a>
            </li>
            <li className="font-thin mt-2 text-[#666] text-sm">
              <a href="#">Origins</a>
            </li>
            <li className="font-thin mt-2 text-[#666] text-sm">
              <a href="#">Munay-Ki Book</a>
            </li>
            <li className="font-thin mt-2 text-[#666] text-sm">
              <a href="#">Testimonials</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative flex justify-center items-center mt-16">
        <ul className="flex gap-7 text-red-800">
          <li>
            <a href="#">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="#">
              <FaXTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              <FaYoutube />
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterMain;
