import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

const Blog = () => <div></div>;
const Resources = () => <div></div>;
const AlbertoVilloldo = () => <div></div>;
const MunayKi = () => <div></div>;

const Coursesheader = () => {
  return (
    <Router>
      <div className="border-b border-black w-[80%] m-auto">
        <nav className="flex justify-between items-center mb-4">
          <ul className="flex gap-3">
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
          <ul className="lg:flex hidden gap-4 text-sm ">
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
            <li>
              <Link to="/alberto-villoldo">Alberto Villoldo</Link>
            </li>
            <li>
              <Link to="/munay-ki">Munay-Ki</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/alberto-villoldo" element={<AlbertoVilloldo />} />
          <Route path="/munay-ki" element={<MunayKi />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Coursesheader;
