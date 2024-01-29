"user client";

import React, { useRef } from "react";
import HummingPuppy from "./images/img/PopUpLogo2x.png";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function App() {
  const NavRef = useRef();

  const ShowNavbar = () => {
    NavRef.current.classList.toggle("responsive_Nav");
  };

  return (
    <main className="wrapper">
      <nav className="section-first-nav  md:bg-transparent bg-black ">
        <ul className="nav-items">
          <li>
            <a className="nav-links nav-links-1" href="/">
              melbourne
            </a>
          </li>
          <li>
            <a className="nav-links" href="/">
              sydne
            </a>
          </li>
          <li>
            <a className="nav-links" href="/">
              nyc
            </a>
          </li>
          <li>
            <a className="nav-links" href="/">
              montval
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex justify-center items-center ">
        <nav
          className="section-second-nav md:translate-y-0 -translate-y-96"
          ref={NavRef}
        >
          <ul className="second-nav-item">
            <li>
              <a className="second-nav-links" href="">
                home
              </a>
            </li>
            <li>
              <a className="second-nav-links" href="">
                <i className="fa-solid fa-plus"></i>about
              </a>
              <ul className="section-second-nav-dropdown">
                <li>
                  <a className="Second-nav-dropdown-links" href="/">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="Second-nav-dropdown-links" href="/">
                    The Experience
                  </a>
                </li>
                <li>
                  <a className="Second-nav-dropdown-links" href="/">
                    New to Humming Puppy
                  </a>
                </li>
                <li>
                  <a className="Second-nav-dropdown-links" href="/">
                    Class Styles
                  </a>
                </li>
                <li>
                  <a className="Second-nav-dropdown-links" href="/">
                    Gallery
                  </a>
                </li>
                <li>
                  <a className="Second-nav-dropdown-links" href="/">
                    Teaching Crew
                  </a>
                </li>
                <li>
                  <a className="Second-nav-dropdown-links" href="/">
                    Our culture
                  </a>
                </li>
                <li>
                  <a className="Second-nav-dropdown-links" href="/">
                    Careers
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="second-nav-links" href="">
                the hum
              </a>
            </li>
            <li>
              <a className="second-nav-links" href="">
                timetable
              </a>
            </li>
            <li>
              <a className="second-nav-links second-nav-links-hover" href="">
                <i className="fa-solid fa-plus"></i>trainings
              </a>
              <ul className="section-second-nav-dropdown">
                <li>
                  <a className="Second-nav-dropdown-links" href="/">
                    Deep rest: A yoga nidra intensive
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="second-nav-links second-nav-links-hover" href="">
                <i className="fa-solid fa-plus"></i>purchase
              </a>
              <ul className="section-second-nav-dropdown">
                <li>
                  <a className="Second-nav-dropdown-links" href="/">
                    Classes
                  </a>
                </li>
                <li>
                  <a className="Second-nav-dropdown-links" href="/">
                    Membershhips
                  </a>
                </li>
                <li>
                  <a className="Second-nav-dropdown-links" href="/">
                    Gift card
                  </a>
                </li>
                <li>
                  <a className="Second-nav-dropdown-links" href="/">
                    Studio Hire
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="second-nav-links" href="">
                hp on demand
              </a>
            </li>
            <li>
              <a className="second-nav-links second-nav-links-1" href="">
                Contact
              </a>
            </li>
          </ul>
          <button onClick={ShowNavbar} className="text-white text-3xl">
            <FaTimes />
          </button>
        </nav>
        <p className="text-white md:hidden">Menu</p>
      </div>
      <main className="section-main">
        <img src={HummingPuppy} alt="" className="section-main-heading" />
        <p>YOGA THAT RESONATES</p>
        <button className="px-4 py-2 mt-5 text-xl border-2 border-white bg-transparent ">
          <Link to="enroll-courses">Enroll Courses</Link>
        </button>
      </main>

      <footer>
        <div className="logo">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-square-facebook"></i>
          <i className="fa-solid fa-envelope"></i>
        </div>
        <div className="section-link">
          <a className="footer-a" href="">
            Term & Condition
          </a>
          <a className="footer-a" href="">
            Privact Policy
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;
