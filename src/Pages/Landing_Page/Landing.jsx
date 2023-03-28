import React from "react";

import "./Landing-css.css"
import LandingIntro from "../../Components/Landing_Components/Landing-Intro"
import SingleCube from "../../Components/Cube/Single-Cube";

function App() {

  


  return (
    <>
    {/*<LandingIntro />*/}
    <div className="landing-main">


      <div className="landing-cube">
        <SingleCube />

      </div>
    </div>
    </>
  );
}

export default App;