import React from "react";
import "./home.css";
import backgroundvd from "./plexus.mp4";
import code from "./code.svg";
function Home() {
  return (
    <section id="home">
      <video autoPlay loop muted id="video">
        <source src={backgroundvd} type="video/mp4" />
      </video>

      {/* <!-- This will be positioned on top of our video background --> */}
      <section className="home">
        <div className="text-bx">
          <div className="codewidth">
            <img src={code} alt="code" className="code" />
          </div>
          <h1 className="name">SRI SWAROOP KUMAR</h1>
          <h2 className="name">
            I'm <span>.Dev</span>
          </h2>
          <h3 className="name desc">I design and develop experiences.</h3>
        </div>
        <div className="numbers">
          <div className="nproject np1">
            <h1 className="nhead">10+</h1>
            <h2 className="nsub">Actual Projects</h2>
          </div>
          <div className="nproject np2">
            <h1 className="nhead">5+</h1>
            <h2 className="nsub">Happy Clients</h2>
          </div>
          <div className="nproject np3">
            <h1 className="nhead">2+</h1>
            <h2 className="nsub">Years of Experience</h2>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;
