import React, { useEffect, Suspense } from "react";

import "./App.scss";

import AOS from "aos"; // what is AOS? ANIMATION ON SCROLL ohh
import "aos/dist/aos.css";
import { useProgress } from "@react-three/drei";
import Loading from "./components/Loading";

import Routing from "./components/Routing";
// const Routing = React.lazy(() => import("./components/Routing"));
function App() {
  useEffect(() => {
    AOS.init();
  });

  const { active, progress, errors, item, loaded, total } = useProgress();

  console.log(item, active);

  if (active) {
    return <Loading progress={progress} />;
  }

  return (
    <div className="App">
      <Suspense fallback={<Loading progress={progress} />}>
        <Routing />
      </Suspense>
    </div>
  );
}

export default App;
