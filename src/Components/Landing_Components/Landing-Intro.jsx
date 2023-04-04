import React, { useState } from "react";
import { useCtx } from "../../Context/Context";

import "./Landing-intro-css.css"

import Transition from "./Transition"

function LandingIntro() {

  const { SetCurrentPhase, currentPhase } = useCtx()

  const [start, setStart] = useState(false)
  const [showTransition, setShowTransition] = useState(false)


  console.log(currentPhase)

  const handleStart = () => {
    setStart(true)
    setTimeout(() => {
      setStart(false)
      setShowTransition(true)
      SetCurrentPhase("Login")
    },4000)
  }

  return (
    <>
    {showTransition 
      ? 
        <>
          <Transition />
          <div className="loading code">
            <span>Performing {currentPhase} </span>
            <span className="flashing-dots">...</span>
          </div>
        </>
      :
      <div className="landing-intro-main">
          <h1 className="landing-intro-title">Welcome</h1>

          <div className="landing-intro-function fcc">
            <h1 className="code">
              <div style={{'--index': 1}}><pre className="landing-intro-func">Function Start():</pre></div> 
              <div style={{'--index': 3}}><pre>Explosion();</pre></div> 
              <div style={{'--index': 5}}><pre>Login();</pre></div>
              <div style={{'--index': 7}}><pre>Cube();</pre></div>
            </h1>
          </div>

          <h1 style={{'--index': 8}} onClick={handleStart} className="code landing-intro-start"><pre className="landing-intro-func">Start();</pre></h1>
          {start &&
            <div className="loading code">
              <span>Performing {currentPhase} </span>
              <span className="flashing-dots">...</span>
            </div>
          }
          <div className={`landing-intro-explosion ${start && 'landing-intro-explosion-active'}`}> </div>
        
        </div>
    }
    </>
  );
}

export default LandingIntro;