import React from "react";
import "./skills.css";
import blender from "./svg/blender.svg";
import chip from "./svg/chip.svg";
import code from "./svg/code.svg";
import cs from "./svg/cs.svg";
import js from "./svg/js.svg";
import design from "./svg/design.svg";
import edit from "./svg/edit.svg";
import github from "./svg/github.svg";
import java from "./svg/java.svg";
import mic from "./svg/mic.svg";
import plan from "./svg/plan.svg";
import present from "./svg/present.svg";
import python from "./svg/python.svg";
import technical from "./svg/technical.svg";
import unity from "./svg/unity.svg";
import vscode from "./svg/vscode.svg";
function Skills() {
  return (
    <>
      <section className="skillsect">
        <div className="skills">
          <h1 className="sethead">
            My <span>Skill Sets</span> :
          </h1>
          <div className="setbody">
            {" "}
            <div className="stacks">
              <div className="set">
                <div className="head">
                  <img src={code} alt="code" className="code code2" />
                  <h2 className="main">Programming:</h2>
                </div>
                <div className="body">
                  <div className=" bod bod1">
                    <div className="lvl">
                      <img src={java} alt="c#" className="svg cs" />
                      <h2 className="lvlname"> Learner </h2>
                    </div>
                    <div className="lvl">
                      <img src={cs} alt="c#" className="svg cs" />
                      <h2 className="lvlname"> Learner </h2>
                    </div>
                  </div>
                  <div className=" bod bod2 bod3">
                    <div className="lvl">
                      <img src={js} alt="c#" className="svg cs" />
                      <h2 className="lvlname"> Intermediate </h2>
                    </div>
                    <div className="lvl">
                      <img src={python} alt="c#" className="svg cs" />
                      <h2 className="lvlname"> Advanced </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="work">
                <h1 className="title">
                  What's my <span>Magic</span>?
                </h1>
                <p className="workdes">
                  I bring extensive design and <span>swift</span> development to
                  the table. My skills aid me in effeciency and to be
                  <span> flexible</span>.
                </p>
                <p className="workdes">
                  Hence, I can quickly pick things up and get working on them
                  easily
                  <span></span>.
                </p>
              </div>
              <div className="set">
                <div className="head">
                  <img src={chip} alt="code" className="code code2" />
                  <h2 className="main">Software Stack:</h2>
                </div>
                <div className="body">
                  <div className=" bod bod1 bod5">
                    <div className="lvl">
                      <img src={unity} alt="c#" className="svg cs" />
                      <h2 className="lvlname"> Game </h2>
                    </div>
                    <div className="lvl">
                      <img src={blender} alt="c#" className="svg cs" />
                      <h2 className="lvlname"> Modelling </h2>
                    </div>
                  </div>
                  <div className=" bod bod2 bod4">
                    <div className="lvl">
                      <img src={github} alt="c#" className="svg cs" />
                      <h2 className="lvlname"> Codebase </h2>
                    </div>
                    <div className="lvl">
                      <img src={vscode} alt="c#" className="svg cs" />
                      <h2 className="lvlname"> Editor </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="techs">
              <div className="set">
                <div className="head">
                  <img src={technical} alt="code" className="code code2" />
                  <h2 className="main">Technical Skills:</h2>
                </div>
                <div className="body">
                  <div className="teskills">
                    <img src={present} alt="code" className="code code2" />
                    <h2 className="teskill">Presentations</h2>
                  </div>
                  <div className="teskills ">
                    <img src={plan} alt="code" className="code code2" />
                    <h2 className="teskill">Plan & Host Events</h2>
                  </div>
                  <div className="teskills ">
                    <img src={design} alt="code" className="code code2" />
                    <h2 className="teskill">Designing Apps</h2>
                  </div>
                  <div className="teskills ">
                    <img src={mic} alt="code" className="code code2" />
                    <h2 className="teskill">Editing/Content Creation</h2>
                  </div>
                </div>
              </div>
              <div className="set newset">
                <div className="head">
                  <img src={edit} alt="code" className="code code2" />
                  <h2 className="main">Skill levels:</h2>
                </div>
                <div className="body">
                  <div className="teskills skilllvl lvl1">
                    <h2 className="teskill">95%</h2>
                  </div>
                  <div className="teskills skilllvl lvl2">
                    <h2 className="teskill">100%</h2>
                  </div>
                  <div className="teskills skilllvl lvl3">
                    <h2 className="teskill">85%</h2>
                  </div>
                  <div className="teskills skilllvl lvl4">
                    <h2 className="teskill">90%</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
