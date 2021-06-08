import React, { useEffect } from "react";

import "./App.scss";

import AOS from "aos"; // what is AOS? ANIMATION ON SCROLL ohh
import "aos/dist/aos.css";
import { useProgress } from "@react-three/drei";
import Loading from "./components/Loading";
import Routing from "./components/Routing";

function App() {
  useEffect(() => {
    AOS.init();
  });

  const { progress, loaded, total } = useProgress();

  console.log(progress);
  console.log(total);
  if (total !== loaded) {
    return <Loading progress={progress} />;
  }
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
