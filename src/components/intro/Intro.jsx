import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Angular", "Nodejs", "Clojure","python"],
    });
  }, []);

  return (

      <div className="intro" id="intro">

          <div className="left">
            <div className="imgContainer">
              <img src="assets/chester_profile_picture.jpg" alt="" />
            </div>
          </div>
          <div className="right">
            <div className="wrapper">
              <h2>Hi There, I'm</h2>
              <h1>Chester Oloo</h1>
              <h3>
                Fullstack developer <span ref={textRef}></span>
              </h3>
              <br />
              <p>
                I'm a self-taught Full stack web developer <br/>
                I've been working for 2 years and have experience in database<br/>
                management(postgresql, mysql, firestore) <br/>
                front-end development(react,re-frame,Angular)<br/>
                and backend development(clojure,nodejs,php,java)<br/>
              </p>
            </div>
            <a href="#portfolio">
              <img src="assets/down.png" alt="" />
            </a>
          </div>
      </div>
  );
}