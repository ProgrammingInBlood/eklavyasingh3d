import "./styles/Header.scss";

import { useState, useEffect } from "react";

function Header() {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };

  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => window.removeEventListener("scroll", transitionNavBar);
  }, [show]);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav-header" style={{ overflow: "hidden" }}>
        <h1>Eklavya Singh</h1>
        <button className="nav-toggle">
          <i className="fas fa-bars" onClick={handleToggle}></i>
        </button>
      </div>

      <ul className={`links ${isActive ? "" : "show-icons"}`}>
        <li>
          <a href="#home">home</a>
          <div className="underline"></div>
        </li>
        <li>
          <a href="#about">about</a>
          <div className="underline"></div>
        </li>
        <li>
          <a href="#work">projects</a>
          <div className="underline"></div>
        </li>
        <li>
          <a href="#contact">contact</a>
          <div className="underline"></div>
        </li>
      </ul>

      <ul className="social-icons" data-aos="fade-down" data-aos-duration="800">
        <li>
          <a href="https://www.instagram.com/mr.eklavya">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/coder_eklavya">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/ProgrammingInBlood">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/eklavya-singh-1376241b8">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
