import React, { Suspense, useState, useEffect } from 'react';
import Model from './Scene';
import { OrbitControls } from '@react-three/drei/core/OrbitControls';
import { PerspectiveCamera } from '@react-three/drei/core/PerspectiveCamera';
import { Canvas } from '@react-three/fiber';

//TESTINGGGGGGG

import './styles/Main.scss';

import Typewriter from 'typewriter-effect';

function Main() {
  var [count, setCount] = useState(1);
  var [xAxis, setXAxis] = useState(0);
  var [yAxis, setYAxis] = useState(1);

  var [size, setSize] = useState(window.innerWidth);

  var [yView, setYView] = useState(0);
  var [ZView, setZView] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    if (size < 770) {
      setYView(800);
      setZView(500);
    } else {
      setYView(0);
      setZView(0);
    }
  }, [size]);

  function mouseHover(e) {
    setCount(7);
  }

  function mouseGone(e) {
    setCount(1);
  }

  //FUNCTION 3D MOUSE MOVE

  function mouseMove(e) {
    let scale = -0.03;
    setXAxis(15 + e.screenX * scale);

    setYAxis(13 + e.screenY * scale);
  }

  return (
    <>
      <Canvas
        colorManagement
        shadowMap
        camera={{
          position: [0, 200, 520],
          fov: 90,
          far: 200000,
        }}
      >
        <OrbitControls />
        <PerspectiveCamera
          position={[xAxis, 200 + yAxis + yView, 520 + ZView]}
          fov={100}
          makeDefault="true"
          far={200000}
        />

        <Suspense fallback={null}>
          <Model mouse={count} />
        </Suspense>
      </Canvas>

      <div className="containerMain" onMouseMove={mouseMove} id="home">
        <div className="containerTitle">
          <div className="typing">
            <div
              className="mainHeading"
              data-aos="zoom-in"
              data-aos-duration="800"
            >
              <p>
                I build great apps <span id="textM">With</span>
              </p>
              <p style={{ display: 'inline-block' }}>
                <span id="text">With &nbsp;</span>
              </p>
              <Typewriter
                options={{
                  strings: ['React.', 'Next.js.', 'Three.js.', 'C.', 'Python.'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div className="description">
              <div className="buttonFlex">
                <div
                  className="button"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  onMouseOver={mouseHover}
                  onMouseOut={mouseGone}
                >
                  <a href="#myworks" className="cta">
                    <span>Hire Me</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="fade__bottom_down" />
      </div>
    </>
  );
}

export default Main;
