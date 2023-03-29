import React from "react";

import { useCtx } from "../../Context/Context";

import "./Landing-css.css"
import LandingIntro from "../../Components/Landing_Components/Landing-Intro"
import SingleCube from "../../Components/Cube/Single-Cube";

function App() {

  const { currentPhase } = useCtx()

  console.log((currentPhase))

  return (
    <>
    <LandingIntro />
    <div className="landing-main">

    { currentPhase==="Landing Page" &&
      <div className="landing-cube">
        <SingleCube />
        <div className="landing-cube-blur fcc" />
      </div>
    }
    </div>
    </>
  );
}

export default App;