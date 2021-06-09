import "./styles/AboutMe.scss";
import React, { useEffect, useRef, useState } from "react";
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import img4 from "./images/4.png";
import img5 from "./images/5.png";
import img6 from "./images/6.png";
import img7 from "./images/7.png";

import img9 from "./images/9.png";
import KalmanFilter from "kalmanjs";

function AboutMe() {
  const images = useRef();

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    window.addEventListener("devicemotion", handleMotion);
    return () => {
      window.removeEventListener("devicemotion", handleMotion);
    };
  }, []);

  function handleMotion(event) {
    const kf = new KalmanFilter({ R: 0.1, Q: 10 });
    const kg = new KalmanFilter({ R: 0.1, Q: 10 });
    setX(kf.filter(event.accelerationIncludingGravity.x));
    setY(kg.filter(event.accelerationIncludingGravity.y));
  }

  if (window.innerWidth < 770) {
    async function change() {
      await images?.current?.childNodes?.forEach(function (move) {
        let movingValue = move.dataset.value;
        var movex = x * movingValue;
        var movey = y * movingValue;
        move.style.transform = `translateX(${movex}px) translateY(${movey}px)`;
      });
    }
    change();
  }
  function parallax(e) {
    images.current.childNodes.forEach(function (move) {
      let movingValue = move.dataset.value;

      var x = (e.clientX * movingValue) / 100;
      var y = (e.clientY * movingValue) / 100;
      move.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }

  return (
    <div className="containerWork" id="about" onMouseMove={parallax}>
      <div id="fade__bottom_top" />
      <div className="pics" ref={images}>
        <h2 className="content" data-value="-3">
          <span
            className="block"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="500"
          >
            Who &nbsp;
          </span>
          <span
            className="block"
            id="title-main"
            data-aos="zoom-in-up"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            Am &nbsp;
          </span>
          <span
            className="block"
            data-aos="zoom-in-up"
            data-aos-delay="400"
            data-aos-duration="500"
          >
            I?
          </span>
        </h2>
        <p className="content" data-value="-5">
          <span
            className="span-title"
            data-aos="zoom-out-up"
            data-aos-delay="200"
            data-aos-duration="500"
            data-aos-anchor-placement="top-bottom"
          >
            {" "}
            HELLO,
          </span>{" "}
          <span
            className="span-title"
            data-aos="zoom-in-up"
            data-aos-delay="400"
            data-aos-duration="500"
            data-aos-anchor-placement="top-bottom"
          >
            {" "}
            I'M EKLAVYA SINGH
          </span>{" "}
          <span
            className="content"
            id="content-text"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="500"
            data-aos-anchor-placement="top-bottom"
          >
            I develop websites for small business. I’ve been involved with
            developing websites for 3 years. While I'm based in Hyderbad, India.
            I build websites for people all over the world. I am currently
            B.tech Undergradute will be Graduating in 2021. I'm very much
            passionate about designing and developing website, also i have
            worked with lots of API's and having well understanding of most
            programming languages and Frameworks.
          </span>
        </p>

        <img src={img1} alt="img" className="object" data-value="2" />
        <img src={img2} alt="img" className="object" data-value="6" />
        <img src={img3} alt="img" className="object" data-value="4" />
        <img src={img4} alt="img" className="object" data-value="-6" />
        <img src={img5} alt="img" className="object" data-value="8" />
        <img src={img6} alt="img" className="object" data-value="-4" />
        <img src={img7} alt="img" className="object" data-value="5" />
        <img src={img9} alt="img" className="object" data-value="5" />
      </div>
      <div id="fade__bottom_down" />
    </div>
  );
}

export default AboutMe;
