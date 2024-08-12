import React from "react";
import "./projects.css";
import Button from "../Button/Button";
import ImageCard from "./ImageCard/ImageCard";

import anime from "./projects/anime-explora.jpeg";
import arch from "./projects/architecture.jpeg";
import beast from "./projects/beast.jpeg";
import blurealm from "./projects/blurealm-web.jpeg";
import bluerealm from "./projects/bluerealm-game.jpeg";
import convoc from "./projects/convoc.jpeg";
import ecom from "./projects/ecommerce-pasge.jpeg";
import hxh from "./projects/hxh.jpeg";
import lingua from "./projects/lingualinks.jpeg";
import maeverick from "./projects/maeverick.jpeg";
import quiz from "./projects/quiz-app.jpg";
import task from "./projects/task-app.jpg";
import tps from "./projects/tpscontroller.jpeg";

function Projects() {
  function web() {
    const web = document.getElementById("web");
    const app = document.getElementById("app");
    const game = document.getElementById("game");
    const events = document.getElementById("events");
    web.style.display = "flex";
    app.style.display = "none";
    events.style.display = "none";
    game.style.display = "none";

    const webt = document.getElementById("webn");
    const appt = document.getElementById("appn");
    const gamet = document.getElementById("gamen");
    const eventst = document.getElementById("eventsn");
    webt.style.color = "orangered";
    appt.style.color = "white";
    gamet.style.color = "white";
    eventst.style.color = "white";
  }
  function app() {
    const web = document.getElementById("web");
    const app = document.getElementById("app");
    const game = document.getElementById("game");
    const events = document.getElementById("events");
    web.style.display = "none";
    app.style.display = "flex";
    events.style.display = "none";
    game.style.display = "none";

    const webt = document.getElementById("webn");
    const appt = document.getElementById("appn");
    const gamet = document.getElementById("gamen");
    const eventst = document.getElementById("eventsn");
    webt.style.color = "white";
    appt.style.color = "orangered";
    gamet.style.color = "white";
    eventst.style.color = "white";
  }
  function game() {
    const web = document.getElementById("web");
    const app = document.getElementById("app");
    const game = document.getElementById("game");

    const events = document.getElementById("events");
    web.style.display = "none";
    app.style.display = "none";
    events.style.display = "none";
    game.style.display = "flex";

    const webt = document.getElementById("webn");
    const appt = document.getElementById("appn");
    const gamet = document.getElementById("gamen");
    const eventst = document.getElementById("eventsn");
    webt.style.color = "white";
    appt.style.color = "white";
    gamet.style.color = "orangered";
    eventst.style.color = "white";
  }
  function events() {
    const web = document.getElementById("web");
    const app = document.getElementById("app");
    const game = document.getElementById("game");
    const events = document.getElementById("events");
    web.style.display = "none";
    app.style.display = "none";
    events.style.display = "flex";
    game.style.display = "none";

    const webt = document.getElementById("webn");
    const appt = document.getElementById("appn");
    const gamet = document.getElementById("gamen");
    const eventst = document.getElementById("eventsn");
    webt.style.color = "white";
    appt.style.color = "white";
    gamet.style.color = "white";
    eventst.style.color = "orangered";
  }

  return (
    <section className="project">
      <div className="projects">
        <div className="project-head">
          <h1 className="head phead">
            {" "}
            My <span>Projects:</span>
          </h1>
          <div className="project-links">
            <a onClick={web} id="webn" className="click">
              Web
            </a>
            <a onClick={app} id="appn" className="click">
              App
            </a>
            <a onClick={game} id="gamen" className="click">
              Game
            </a>
            <a onClick={events} id="eventsn" className="click">
              Events
            </a>
          </div>
        </div>

        <div className="project-body">
          <div id="web" className="web">
            <div className="body-images">
              <ImageCard
                img={anime}
                title="Anime Explora Website"
                desc="A web presence for the anime fandom youtube channel - Anime Explora!"
                src="https://github.com/JOYBOYash/FrontEndDesigns_FEDS/tree/main/AnimeExploraPage"
              ></ImageCard>
              <ImageCard
                img={beast}
                title="Beast Instinct Base"
                desc="A web project for Beast Instinkt channel to create gaming community."
                src="https://github.com/JOYBOYash/Beast.Inc_WebPage_V1"
              ></ImageCard>
              <ImageCard
                img={ecom}
                title="Joy Arts Gallery"
                desc="An Ecommerce webpage to display and sell art of various kinds made by myself!"
                src="https://github.com/JOYBOYash/DemoEcommercePage/tree/main"
              ></ImageCard>
              <ImageCard
                img={blurealm}
                title="BlueRealm Demo Page"
                desc="A Website made for the game demo presentation for BlueRealm game."
                src="https://github.com/JOYBOYash/BlueRealm_Webpage/tree/main"
              ></ImageCard>
              <ImageCard
                img={convoc}
                title="Convoc a Forum App for Debates"
                desc="Web app for the Convoc, an app to anonymously debate on any aspect of world."
                src="https://github.com/JOYBOYash/Convoc-TheBeastBreakers-DimohackVITAP/tree/main"
              ></ImageCard>
              <ImageCard
                img={lingua}
                title="LinguaLinks Login and Student Pages"
                desc="Worked on the student page and login/register pages for hackathon."
                src="https://github.com/JOYBOYash/TRINIT_TheLingualLinks_DEV02"
              ></ImageCard>
              <ImageCard
                img={arch}
                title="TSA architecture company website"
                desc="The Stone Age construction company website made for building trust."
                src="https://github.com/JOYBOYash/FrontEndDesigns_FEDS/tree/main/ArchirtecturePage"
              ></ImageCard>
              <ImageCard
                img={hxh}
                title="HxH Fandom Webpage"
                desc="Anime fandom page for HunterxHunter webpage."
                src="https://github.com/JOYBOYash/FrontEndDesigns_FEDS/tree/main/HxHCharsPage"
              ></ImageCard>
            </div>
          </div>
          <div id="app" className="web">
            <div className="body-images">
              <ImageCard
                img={task}
                title="Todo Manager App - VNSHIVA"
                desc="An Todo List App made with React Native - Worked on Styles."
                src="https://github.com/JOYBOYash/Todo_List_react-native-application/tree/master"
              ></ImageCard>
              <ImageCard
                img={quiz}
                title="Anime Quiz App"
                desc="An Anime based Quiz App made in Native - Worked on Styles."
                src="https://github.com/JOYBOYash/Anime_Quiz_ReactNative_App"
              ></ImageCard>
            </div>
          </div>
          <div id="game" className="web">
            <div className="body-images">
              <ImageCard
                img={maeverick}
                title="Maeverick - Galaxy knows no bounds!"
                desc="A open space exploration race game with simple mechanics and fun gameplay elements."
                src="https://github.com/JOYBOYash/Maverik-Game-Build"
              ></ImageCard>
              <ImageCard
                img={tps}
                title="Third Person Controller Godot"
                desc="A blockout spawn menu screen made in Godot. No repository exists for it, as it predates my github account."
              ></ImageCard>
              <ImageCard
                img={bluerealm}
                title="BlueRealm - Unity"
                desc="The Demo of the game BlueRealm with single level."
                src="https://github.com/JOYBOYash/BlueRealm-dev_Phase1"
              ></ImageCard>
            </div>
          </div>
          <div id="events" className="web">
            <div className="body-images">
              <h1>Nothing to display yet...</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
