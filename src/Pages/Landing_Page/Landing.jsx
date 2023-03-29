import React, { useState } from "react";

import { useCtx } from "../../Context/Context";

import "./Landing-css.css"
import LandingIntro from "../../Components/Landing_Components/Landing-Intro"
import SingleCube from "../../Components/Cube/Single-Cube";

function App() {

  const { currentPhase } = useCtx()

  const [solve, setSolve] = useState(false)
  const [startbeam, setStartBeam] = useState(false)
  const [beam, setBeam] = useState(false)

  const handleSolve = () => {
    setTimeout(() => {
      setStartBeam(true)
      setBeam(true)
    },1500)

    setTimeout(() => {
      setBeam(false)
    },7500)

    setSolve(true)
  }

  console.log(beam)
  return (
    <>
    <LandingIntro />
    {currentPhase === "Cube" &&
      <div className="landing-main">
        <h1 className="landing-cube-title">The Cube</h1>
        <div className="landing-cube-solve">
          <p className="code">Cant Solve?</p>
          <h1 onClick={handleSolve} className="code">Solve();</h1>
        </div>
        <div className="landing-wall" />

        <div className="landing-floor solid" />
        <div className="landing-floor">
          {startbeam && beam &&
            <div className={`landing-floor-beam appear`}></div>
          }
        </div>
        {startbeam && beam &&
          <>
            <div className={`landing-cube-shadow appear fade`}></div>
            <div className={`landing-cube-beam appear`} /> 
          </>
        }
        

      
        <div className="landing-cube">
          <SingleCube solve={solve} handleSolve={handleSolve} startbeam={startbeam}/>
          <div className="landing-cube-blur fcc" />
        </div>
      
      </div>
    }
    </>
  );
}

export default App;