import "./styles/MyWorks.scss";

function MyWorks() {
  function cardMove(e) {
    var l = e.nativeEvent.offsetX;
    var t = e.nativeEvent.offsetY;
    var h = e.target.offsetHeight;
    var w = e.target.offsetWidth;
    var lp = Math.abs(Math.floor((100 / w) * l) - 100);
    var tp = Math.abs(Math.floor((100 / h) * t) - 100);
    var lp2 = 50 - Math.abs(Math.floor((100 / w) * l) - 100) / 10 + 5;
    var tp2 = 50 - Math.abs(Math.floor((100 / h) * t) - 100) / 10 + 5;
    var ty = (tp - 50) / 2;
    var tx = (lp - 50) * 0.5 * -1;

    e.target.style.backgroundPosition = `${lp}% ${tp}%`;
    e.target.style.backgroundPosition += `${lp2}% ${tp2}%`;
    e.target.style.transform = `rotateX(${ty}deg) rotateY(${tx}deg)`;
    e.target.classList.add("active");
  }
  function cardOut(e) {
    e.target.classList.remove("active");
  }

  return (
    <div className="works" id="work">
      <div id="fade__bottom_top" />
      <main id="app">
        <h1>
          <div
            data-aos="zoom-in-up"
            data-aos-delay="200"
            data-aos-duration="500"
            className="block"
          >
            MY&nbsp;
          </div>
          <div
            id="works-main"
            data-aos="zoom-in-up"
            data-aos-delay="300"
            data-aos-duration="500"
            className="block"
          >
            {" "}
            WORKS
          </div>
        </h1>
        <section
          className="cards"
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-duration="700"
          data-aos-anchor-placement="top-bottom"
        >
          <div
            className="card charizard"
            onMouseMove={cardMove}
            onMouseOut={cardOut}
          >
            <h3>
              AIR <span> TUNE</span>
            </h3>
          </div>
          <div
            className="card pika"
            onMouseMove={cardMove}
            onMouseOut={cardOut}
          >
            <h3 style={{ color: "black" }}>
              MUSIC <span> PLAYER</span>
            </h3>
          </div>
          <div className="card mew" onMouseMove={cardMove} onMouseOut={cardOut}>
            <h3>
              MY <span> PORTFOLIO</span>
            </h3>
          </div>
        </section>

        <style className="hover"></style>
      </main>
      <div id="fade__bottom_down" />
    </div>
  );
}

export default MyWorks;
