import React from "react";
import "./contact.css";
function Contact() {
  return (
    <section className="Contact">
      <div className="numbers referals">
        <h1 className="refing">
          <span>Join</span> them !
        </h1>
        <div className="refdev">
          <div className="nproject np1 ref">
            <div className="rhead">
              <ion-icon name="pulse-outline"></ion-icon>
              <h1 className="nhead rhead"> V N Shivaprasad Reddy</h1>
            </div>
            <h2 className="nsub rsub">
              It was an amazing job Swaroop had done in styling my projects.
              They're simple and yet exact!
            </h2>
          </div>
          <div className="nproject np2 ref">
            <div className="rhead">
              <ion-icon name="pulse-outline"></ion-icon>
              <h1 className="nhead rhead">Anime Explora</h1>
            </div>
            <h2 className="nsub rsub">
              We just loved our webiste & he did a good job getting the
              aesthetics right! We can't wait to publish it to community!
            </h2>
          </div>
          <div className="nproject np3 ref">
            <div className="rhead">
              <ion-icon name="pulse-outline"></ion-icon>
              <h1 className="nhead rhead"> B Jaswanth Reddy</h1>
            </div>
            <h2 className="nsub rsub">
              He's been a saviour! when I was struggling with dev process, bro
              get's things done easily! Thank you.
            </h2>
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="me">
          <h1 className="head chead">
            Reach <span>Me !</span>{" "}
          </h1>
          <div className="text">
            <h2 className="sub">
              I'd like to contribute in your projects and Open for any
              collaborations !
            </h2>
            <div className="proj">
              <div className="collab">
                <h1 className="sub-head">
                  For <span>Collab</span>:{" "}
                </h1>
                <div className="social-links">
                  <a
                    href="https://www.linkedin.com/in/sri-swaroop-kumar-joyboy/"
                    className="link clink"
                  >
                    {" "}
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                  <a href="" className="link clink">
                    {" "}
                    <ion-icon name="logo-discord"></ion-icon>
                  </a>
                </div>
              </div>
              <div className="commercial">
                <h1 className="sub-head">
                  Paid <span>Projects</span>:{" "}
                </h1>
                <div className="social-links">
                  <a
                    href="mailto:joyboyofficially@gmail.com"
                    className="link clink"
                  >
                    <ion-icon name="mail-outline"></ion-icon>
                  </a>
                  <h2 className="mail"> &larr; Kindly Mail me </h2>
                </div>
              </div>
            </div>
            <div className="support">
              <h1 className="sub-head">
                For <span>Support ❣️</span>:{" "}
              </h1>
              <div className="social-links">
                <a
                  href="https://buymeacoffee.com/joyboyash"
                  className="link clink"
                >
                  {" "}
                  <ion-icon name="cafe-outline"></ion-icon>
                </a>
                <h2>Appreciate your thought!</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
