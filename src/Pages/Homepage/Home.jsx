import React, { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect';

import "./Home-css.css"

import Html from "../../Assets/languages/html.png"
import Css from "../../Assets/languages/css.png"
import Js from "../../Assets/languages/js.png"
import ReactI from "../../Assets/languages/react.png"
import Node from "../../Assets/languages/node.png"
import Post from "../../Assets/languages/postgresql.png"
import Python from "../../Assets/languages/python.png"
import Socket from "../../Assets/languages/socket.png"

import Linkedin from "../../Assets/linkedin.png"
import Github from "../../Assets/github.png"
import Gif from "../../Assets/gif.gif"

function Home() {

  const [transition, setTransition] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setTransition(false)
    }, 4000)
  },[])

  return (
    <>
      {transition && <div className="home-white-transition"></div>}
      <div className="home-main">
        <div className="home-title-container">
          <h1>Sebastian Amariei</h1>
          <h2>
            <Typewriter
              options={{
                strings: ['Full Stack Developer','Front End Developer', 'Back End Developer'],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p>
            Looking for a job as a <span style={{ display: 'inline-block' }}>
              <Typewriter
                options={{
                  strings: ['Full Stack Developer', 'Front End Developer', 'Back End Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>. Passionate about both front-end and back-end development, with experience in HTML, CSS, JavaScript, React, Node.js, and database management. Excited to contribute my skills to a dynamic team and take on challenging projects. Website created with entirely Html, Css and React.
          </p>
        </div>

        <div className="home-gif-container">
          <img src={Gif} className="home-gif"/>
        </div>
 
        <div className="home-image-container">
          <div className="home-socials">
            <a href="https://www.linkedin.com/in/sebastian-amariei-96a5211b3/" target="_blank">
              <img src={Linkedin} className="home-lang-img home-image-html socials"/>
            </a>
            <a href="https://github.com/SebastianAmarie1?tab=repositories" target="_blank">
              <img src={Github} className="home-lang-img home-image-html socials"/>
            </a>
          </div>
          <div className="home-languages-container">
            <img src={Html} className="home-lang-img home-image-html"/>
            <img src={Css} className="home-lang-img home-image-css"/>
            <img src={Js} className="home-lang-img home-image-js"/>
            <img src={ReactI} className="home-lang-img home-image-react"/>
            <img src={Node} className="home-lang-img home-image-node"/>
            <img src={Post} className="home-lang-img home-image-post"/>
            <img src={Python} className="home-lang-img home-image-python"/>
            <img src={Socket} className="home-lang-img home-image-socket"/>
          </div>

        </div>
      </div>
    </>
  );
}

export default Home;