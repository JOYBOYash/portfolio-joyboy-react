import React from "react";
import "./Footer.css";
import Home from "../Homepage/Home";
import About from "../Aboutpage/About";
import Skills from "../Skillspage/Skills";
import Projects from "../Projectspage/Projects";
import Contact from "../Contactpage/Contact";

function Footer() {

  const home = <Home />;
  const about = <About />;
  const skills = <Skills />;
  const projects = <Projects />;
  const contact = <Contact />;

  return (
    <footer className="foot">
      <div className="nav">
        <div className="hit">
          <a href={home} className="link">
            <ion-icon name="home-outline"></ion-icon>
          </a>
          <div className="label">HOME</div>
        </div>
        <div className="hit">
          <a href={about} className="link">
            <ion-icon name="person-outline"></ion-icon>
          </a>
          <div className="label">ABOUT</div>
        </div>

        <div className="hit">
          <a href={skills} className="link">
            <ion-icon name="star-outline"></ion-icon>
          </a>
          <div className="label">SKILLS</div>
        </div>
        <div className="hit">
          <a href={projects} className="link">
            <ion-icon name="flash-outline"></ion-icon>
          </a>
          <div className="label">PROJECTS</div>
        </div>
        <div className="hit">
          <a href={contact} className="link">
            <ion-icon name="at-outline"></ion-icon>
          </a>
          <div className="label">CONTACT</div>
        </div>
      </div>
    </footer>

    // <footer className="foot">
    // <div className="nav">
    //   <div className="hit">
    //     <Link to="home" className="link">
    //       <ion-icon name="home-outline"></ion-icon>
    //     </Link>
    //     <div className="label">HOME</div>
    //   </div>
    //   <div className="hit">
    //     <Link to="about" className="link">
    //       <ion-icon name="person-outline"></ion-icon>
    //     </Link>
    //     <div className="label">ABOUT</div>
    //   </div>

    //   <div className="hit">
    //     <Link to="skills" className="link">
    //       <ion-icon name="star-outline"></ion-icon>
    //     </Link>
    //     <div className="label">SKILLS</div>
    //   </div>
    //   <div className="hit">
    //     <Link to="projects" className="link">
    //       <ion-icon name="flash-outline"></ion-icon>
    //     </Link>
    //     <div className="label">PROJECTS</div>
    //   </div>
    //   <div className="hit">
    //     <Link to="contact" className="link">
    //       <ion-icon name="at-outline"></ion-icon>
    //     </Link>
    //     <div className="label">CONTACT</div>
    //   </div>
    // </div>
    // </footer>
  );
}

export default Footer;
