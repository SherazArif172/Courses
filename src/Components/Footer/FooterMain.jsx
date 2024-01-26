import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
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
    <Router>
      <div className="relative mt-24 pb-24 ">
        <div className="z-0 absolute bottom-0 object-cover w-full h-full  ">
          <img
            src={BgFooter}
            alt=""
            className="w-full h-full overflow-hidden"
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
                <Link to="/energy-medicine">Energy Medicine</Link>
              </li>
              <li className="font-thin mt-2 text-[#666] text-sm">
                <Link to="/online-courses">Online Courses</Link>
              </li>
              <li className="font-thin mt-2 text-[#666] text-sm">
                <Link to="/events">Events</Link>
              </li>
            </ul>
          </div>
          <div className="w-full tracking-widest">
            <ul>
              <h2 className="text-[#b41f25] leading-8 pb-2 text-sm font-bold">
                BOOKINGS
              </h2>
              <li className="font-thin mt-2 text-[#666] text-sm">
                <Link to="/practitioner">Practitioner</Link>
              </li>
              <li className="font-thin mt-2 text-[#666] text-sm">
                <Link to="/directory">Directory</Link>
              </li>
              <li className="font-thin mt-2 text-[#666] text-sm">
                <Link to="/private">Private</Link>
              </li>
              <li className="font-thin mt-2 text-[#666] text-sm">
                <Link to="/consultations">Consultations</Link>
              </li>
            </ul>
          </div>
          <div className="w-full  tracking-widest">
            <ul>
              <h2 className="text-[#b41f25] leading-8 pb-2 text-sm font-bold">
                THE FOUR WINDS
              </h2>
              <li className="font-thin mt-2 text-[#666] text-sm">
                <Link to="/about-us">About Us</Link>
              </li>
              <li className="font-thin mt-2 text-[#666] text-sm">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="font-thin mt-2 text-[#666] text-sm">
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li className="font-thin mt-2 text-[#666] text-sm">
                <Link to="/terms">Terms & Conditions</Link>
              </li>
              <li className="font-thin mt-2 text-[#666] text-sm">
                <Link to="/careers">Careers</Link>
              </li>
            </ul>
          </div>
          <div className="w-full  tracking-widest">
            <ul>
              <h2 className="text-[#b41f25] leading-8 pb-2 text-sm font-bold ">
                MUNAY-KI
              </h2>
              <li className="font-thin mt-2 text-[#666] text-sm">
                <Link to="/munay-ki">Munay-Ki</Link>
              </li>
              <li className="font-thin mt-2 text-[#666] text-sm">
                <Link to="/rites">Rites</Link>
              </li>
              <li className="font-thin mt-2 text-[#666] text-sm">
                <Link to="/origins">Origins</Link>
              </li>
              <li className="font-thin mt-2 text-[#666] text-sm">
                <Link to="/munay-ki-book">Munay-Ki Book</Link>
              </li>
              <li className="font-thin mt-2 text-[#666] text-sm">
                <Link to="/testimonials">Testimonials</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative flex justify-center items-center mt-16">
          <ul className="flex gap-7 text-red-800">
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Router>
  );
};

export default FooterMain;
