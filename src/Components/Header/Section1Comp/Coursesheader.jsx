import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Coursesheader = () => {
  return (
    <div className="border-b border-black w-[80%] m-auto">
      <nav className="flex justify-between items-center mb-4">
        <ul className="flex gap-3">
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
        <ul className="lg:flex hidden gap-4 text-sm ">
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">Alberto Villoldo</a>
          </li>
          <li>
            <a href="#" to="/munay-ki">
              Munay-Ki
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Coursesheader;
