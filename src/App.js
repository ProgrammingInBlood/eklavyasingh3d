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

  const { active } = useProgress();

  if (active) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Routing />
      </Suspense>
    </div>
  );
}

export default App;
