import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/base/Home";
import "./App.scss";

import AOS from "aos"; // what is AOS? ANIMATION ON SCROLL ohh
import "aos/dist/aos.css";
import { useProgress } from "@react-three/drei";
import Loading from "./components/Loading";

function App() {
  useEffect(() => {
    AOS.init();
  });

  const { progress, loaded, total } = useProgress();

  if (total !== loaded) {
    return <Loading progress={progress} />;
  }
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="*">
            <h2>NOT FOUND</h2>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
