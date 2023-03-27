import React from "react";

import "./Landing-css.css"
import LandingIntro from "../../Components/Landing_Components/Landing-Intro"


function App() {
  return (
    <>
    {/*<LandingIntro />*/}
    <div className="landing-main">


      <div className="landing-cube">
        <div className="cube">
          <div className="cube-face cube-face-front fcc">Front</div>
          <div className="cube-face cube-face-back fcc">Back</div>
          <div className="cube-face cube-face-right fcc">Right</div>
          <div className="cube-face cube-face-left fcc">Left</div>
          <div className="cube-face cube-face-top fcc">Top</div>
          <div className="cube-face cube-face-bottom fcc">Bottom</div>
        </div>

      </div>
    </div>
    </>
  );
}

export default App;