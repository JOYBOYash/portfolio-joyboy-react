import React from "react";
import "./about.css";
import Button from "../Button/Button";
import pfp from "./pfp.png";
function About() {
  return (
    <div id="about" className="about">
      <section className="content">
        <div className="persona">
          <div className="profile">
            <img src={pfp} alt="pfp" className="pfp" />
            <div className="details">
              <h2 className="skill">
                <span>Hey! </span>Myself,
              </h2>
              <h1 className="name0 n1">A Sri Swaroop Kumar </h1>
              <h2 className="skill">
                <span>Web</span> and <span>Game</span> design
              </h2>
              <Button label="HIRE ME !" source="" className="hire"></Button>
            </div>
          </div>
          <div className="profile profile2">
            <div className="details details2">
              <h1 className="skill">
                <span>Positions</span> Held :
              </h1>
              <div className="pos1">
                <h2 className="skill">✨ SE Fellow - Headstarter.ai</h2>
                <p className="skill">
                  {" "}
                  Pursuing My skills in app and web development fields in this
                  fellowship.
                </p>
              </div>
              <div className="pos1">
                <h2 className="skill skill2"> ✨ Secretary - ISF Club</h2>
                <p className="skill skill2">
                  {" "}
                  Plans and Conducts events on behalf of ISF - SET, DSU.
                </p>
              </div>
              <Button label="Browse Projects !  " source=""></Button>
            </div>
          </div>
        </div>
        <div className="dets">
          <div className="aboutdesc abot">
            <h1 className="main">
              Briefly <span>About Me:</span>
            </h1>
            <p className="subintro">
              Sri Swaroop Kumar is passionate about game development, web
              design, and hackathons. He excels at creating immersive games and
              user-friendly websites while thriving in competitive coding
              environments. His positive attitude drives him to overcome
              challenges and grow. He values teamwork and effective
              communication, highlighting his leadership qualities. Sri's
              journey showcases the limitless possibilities of the digital age
              through creativity, determination, and positive energy.
            </p>
          </div>
          <div className="maindesc">
            <div className="aboutdesc subdesc">
              <h1 className="main">
                My <span>Passion:</span>
              </h1>
              <br />
              <ul className="list">
                <li className="item">Artificial Intelligence</li>
                <li className="item">Blockchain</li>
                <li className="item">Games</li>
                <li className="item">Web 3.0</li>
                <li className="item">DSA</li>
                <li className="item">Android Apps</li>
              </ul>
            </div>
            <div className="aboutdesc subdesc2">
              <h1 className="main">
                My <span>Zests:</span>
              </h1>
              <br />
              <ul className="list2">
                <li className="item">Music</li>
                <li className="item">Chess</li>
                <li className="item">Game Jams</li>
                <li className="item">Hackathons</li>
                <li className="item">
                  Public <br /> Speaking
                </li>
                <li className="item">Content Creation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
