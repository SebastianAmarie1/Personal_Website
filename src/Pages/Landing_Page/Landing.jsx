import React, { useState } from "react";

import { useCtx } from "../../Context/Context";

import "./Landing-css.css"
import LandingIntro from "../../Components/Landing_Components/Landing-Intro"
import SingleCube from "../../Components/Cube/Single-Cube";

function App() {

  const { currentPhase } = useCtx()

  const [solve, setSolve] = useState(false)

  const handleSolve = () => {
    setSolve(true)
  }

  console.log(solve)

  return (
    <>
    <LandingIntro />
    <div className="landing-main">
      <h1 className="landing-cube-title">The Cube</h1>
      <div className="landing-cube-solve">
        <p className="code">Cant Solve?</p>
        <h1 onClick={handleSolve} className="code">Solve();</h1>
      </div>

      

    { currentPhase==="Landing Page" &&
      <div className="landing-cube">
        <SingleCube solve={solve} handleSolve={handleSolve}/>
        <div className="landing-cube-blur fcc" />
      </div>
    }
    </div>
    </>
  );
}

export default App;