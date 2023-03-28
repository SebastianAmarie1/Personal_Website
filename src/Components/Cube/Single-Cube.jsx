import React, { useState } from "react";

import "./Single-Cube-css.css"

function SingleCube() {


  const [isDragging, setIsDragging] = useState(false);
  const [bottomDegrees, setBottomDegrees] = useState(80);
  const [centerDegree, setCenterDegree] = useState(30);
  const [topDegree, setTopDegree] = useState(0);
  const [currentPos, setCurrentPos] = useState(null)

  function handleMouseDown() {
    setIsDragging(true);
  }
  console.log(bottomDegrees, "Bottom")
  console.log(centerDegree, "center")
  console.log(topDegree, "Top")

  function handleMouseUp() {
    setIsDragging(false);
  }

  function handleMouseMove(event) {
    if (!isDragging) {
      return;
    }

    const slider = event.target;
    const rect = slider.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const width = rect.width;
    const percentage = x / width;
    const newDegrees = Math.round(percentage * 365);
    if (currentPos === 2){
      setBottomDegrees(bottomDegrees + (newDegrees - bottomDegrees) * 0.01);
    }
    else if (currentPos === 1){
      setCenterDegree(bottomDegrees + (newDegrees - bottomDegrees) * 0.01);
    }
    else if (currentPos === 0){
      setTopDegree(bottomDegrees + (newDegrees - bottomDegrees) * 0.01);
    }
  }

  function handleMouseLeave() {
    setIsDragging(false);
    setCurrentPos(null)
  }

  function handleMouseEnter(pos) {
    setCurrentPos(pos)
  }

  return (
    <>
      {/*Bottom holder cube*/}
      <div className="cube">

          {/* Bottom Holder Cube*/}
          <div style={{'--BY': bottomDegrees + 'deg'}} className="cube-holder-bottom-container"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={() => {handleMouseEnter(2)}}
          >
            <div className="cube-face cube-face-front-bottom shorter fcc">
              <div className="cube-face-front-indvs"></div>
              <div className="cube-face-front-indvs"></div>
              <div className="cube-face-front-indvs"></div>
            </div>
            <div className="cube-face cube-face-back-bottom shorter fcc">
              <div className="cube-face-front-indvs"></div>
              <div className="cube-face-front-indvs"></div>
              <div className="cube-face-front-indvs"></div>
            </div>
            <div className="cube-face cube-face-right-bottom shorter fcc">
              <div className="cube-face-front-indvs"></div>
              <div className="cube-face-front-indvs"></div>
              <div className="cube-face-front-indvs"></div>
            </div>
            <div className="cube-face cube-face-left-bottom shorter fcc">
              <div className="cube-face-front-indvs"></div>
              <div className="cube-face-front-indvs"></div>
              <div className="cube-face-front-indvs"></div>
            </div>
            <div className="cube-face cube-face-top-bottom fcc">
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
            </div>
            <div className="cube-face cube-face-bottom-bottom fcc">
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
            </div>
          </div>

          {/* Center Holder Cube*/}
          <div style={{'--CY': centerDegree + 'deg'}} className="cube-holder-center-container"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => {handleMouseEnter(1)}}
          >
            <div className="cube-face cube-face-front-center shorter fcc">
              <div className="cube-face-front-indvs"></div>
              <div className="cube-face-front-indvs"></div>
              <div className="cube-face-front-indvs"></div>
            </div>
            <div className="cube-face cube-face-back-center shorter fcc">
              <div className="cube-face-front-indvs"></div>
              <div className="cube-face-front-indvs"></div>
              <div className="cube-face-front-indvs"></div>
            </div>
            <div className="cube-face cube-face-right-center shorter fcc">
              <div className="cube-face-front-indvs"></div>
              <div className="cube-face-front-indvs"></div>
              <div className="cube-face-front-indvs"></div>
            </div>
            <div className="cube-face cube-face-left-center shorter fcc">
              <div className="cube-face-front-indvs"></div>
              <div className="cube-face-front-indvs"></div>
              <div className="cube-face-front-indvs"></div>
            </div>
            <div className="cube-face cube-face-top-center fcc">
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
            </div>
            <div className="cube-face cube-face-bottom-center fcc">
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
            </div>
          </div>

          {/* Top Holder Cube*/}
          <div style={{'--TY': topDegree + 'deg'}} className="cube-holder-top-container" 
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={() => {handleMouseEnter(0)}}
              >
            
            <div className="cube-face cube-face-front-top shorter fcc">
                <div className="cube-face-front-indvs"></div>
                <div className="cube-face-front-indvs"></div>
                <div className="cube-face-front-indvs"></div>
            </div>
            <div className="cube-face cube-face-back-top shorter fcc">
              <div className="cube-face-front-indvs"></div>
              <div className="cube-face-front-indvs"></div>
              <div className="cube-face-front-indvs"></div>
            </div>
            <div className="cube-face cube-face-right-top shorter fcc">
              <div className="cube-face-front-indvs"></div>
              <div className="cube-face-front-indvs"></div>
              <div className="cube-face-front-indvs"></div>
            </div>
            <div className="cube-face cube-face-left-top shorter fcc">
              <div className="cube-face-front-indvs"></div>
              <div className="cube-face-front-indvs"></div>
              <div className="cube-face-front-indvs"></div>
            </div>
            <div className="cube-face cube-face-top-top">
              <div style={{backgroundColor: 'blue'}} className="cube-face-front-indv slider"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
            </div>
            <div className="cube-face cube-face-bottom-top fcc">
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
              <div className="cube-face-front-indv"></div>
            </div>
          </div>

      </div>
    </>
  );
}

export default SingleCube;