import React from "react";

import "./styles/Loading.scss";

function Loading() {
  return (
    <div className="loading">
      <div id="load">
        <div>G</div>
        <div>N</div>
        <div>I</div>
        <div>D</div>
        <div>A</div>
        <div>O</div>
        <div>L</div>
      </div>
      <div class="sp-container">
        <h2 class="frame-1">Welcome</h2>
        <h2 class="frame-2" style={{ fontSize: 12 }}>
          Usually it takes less than 1 minutes to load
        </h2>
        <h2 class="frame-3">So please be patient</h2>
        <h2 class="frame-4">Hint: Hover on (hire me) Button </h2>
        <h2 class="frame-5">
          <span>Experience </span>
          <span> The </span>
          <span> 3D. </span>
        </h2>
      </div>
    </div>
  );
}

export default Loading;
