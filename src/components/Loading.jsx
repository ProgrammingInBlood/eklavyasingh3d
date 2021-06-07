import React from "react";

import "./styles/Loading.scss";

function Loading({ progress }) {
  return (
    <div className="loading">
      <div className="container">
        <div className="circle"></div>
        <h1 style={{ marginBottom: "10px" }}>Eklavya Singh</h1>
        <div className="fontss">
          <svg viewBox="0 0 600 300">
            <symbol id="s-text">
              <text textAnchor="middle" x="50%" y="50%" dy=".35em">
                LOADING...
              </text>
            </symbol>

            <use class="text" xlinkHref="#s-text"></use>
            <use class="text" xlinkHref="#s-text"></use>
            <use class="text" xlinkHref="#s-text"></use>
            <use class="text" xlinkHref="#s-text"></use>
            <use class="text" xlinkHref="#s-text"></use>
          </svg>
        </div>

        <div className="a">
          <div className="b" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
