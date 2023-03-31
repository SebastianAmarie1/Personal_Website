import React, { useEffect, useState } from "react";

import "./Home-css.css"

import Laptop from "../../Assets/laptop.avif"
import Html from "../../Assets/languages/html.png"
import Css from "../../Assets/languages/css.png"
import Js from "../../Assets/languages/js.png"
import ReactI from "../../Assets/languages/react.png"
import Node from "../../Assets/languages/node.png"
import Post from "../../Assets/languages/postgresql.png"
import Python from "../../Assets/languages/python.png"
import Socket from "../../Assets/languages/socket.png"

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
          <h2>Full-Stack Developer</h2>
          <p>
          Looking for a job as a full-stack developer. 
          Passionate about both front-end and back-end development,
          with experience in HTML, CSS, JavaScript, React, Node.js, and database management.
          Excited to contribute my skills to a dynamic team and take on challenging projects.
          Website created with entirely Html, Css and React.
          </p>
        </div>
 
        <div className="home-image-container">
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