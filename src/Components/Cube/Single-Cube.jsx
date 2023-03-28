import React, { useState, useRef } from "react";

import "./Single-Cube-css.css"

function SingleCube() {


  const [isDragging, setIsDragging] = useState(false);
  const [currentPos, setCurrentPos] = useState(null)
  const [topDegrees, setTopDegrees] = useState(80)
  const [centerDegrees, setCenterDegrees] = useState(30)
  const [bottomDegrees, setBottomDegrees] = useState(-10)
  const containerRef = useRef(null);

  function handleMouseDown() {
    setIsDragging(true);
  }

  function handleMouseUp() {
    setIsDragging(false);
  }

  function handleMouseMove(event) {
    if (!isDragging) {
      return;
    }
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const width = rect.width;
    const percentage = x / width;
    const newDegrees = Math.round(percentage * 365);

    if (currentPos === 0) {
      setTopDegrees(topDegrees + (newDegrees - topDegrees) * 0.01)
    }
    else if (currentPos === 1) {
      setCenterDegrees(centerDegrees + (newDegrees - centerDegrees) * 0.01)
    }
    else if (currentPos === 2) {
      setBottomDegrees(bottomDegrees + (newDegrees - bottomDegrees) * 0.01)
    }
  }

  function handleTouchStart(pos) {
    setIsDragging(true);
    setCurrentPos(pos)
  }

  function handleTouchEnd() {
    setIsDragging(false);
    setCurrentPos(null)
  }

  function handleTouchMove(event) {
    if (!isDragging) {
      return;
    }
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const x = event.touches[0].clientX - rect.left;
    const width = rect.width;
    const percentage = x / width;
    const newDegrees = Math.round(percentage * 365);
    if (currentPos === 0) {
      setTopDegrees(topDegrees + (newDegrees - topDegrees) * 0.01)
    }
    else if (currentPos === 1) {
      setCenterDegrees(centerDegrees + (newDegrees - centerDegrees) * 0.01)
    }
    else if (currentPos === 2) {
      setBottomDegrees(bottomDegrees + (newDegrees - bottomDegrees) * 0.01)
    }
  }

  function handleWheel(event) {
    let newDegrees
    if (currentPos === 0) {
      newDegrees = topDegrees - event.deltaY;
      setTopDegrees(newDegrees);
    }
    else if (currentPos === 1) {
      newDegrees = centerDegrees - event.deltaY;
      setCenterDegrees(newDegrees);
    }
    else if (currentPos === 2) {
      newDegrees = bottomDegrees - event.deltaY;
      setBottomDegrees(newDegrees);
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
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onWheel={handleWheel}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={() => handleMouseEnter(2)}
              onTouchStart={() => handleTouchStart(2)}
              onTouchEnd={handleTouchEnd}
              onTouchMove={handleTouchMove}
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
          <div style={{'--CY': centerDegrees + 'deg'}} className="cube-holder-center-container"
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onWheel={handleWheel}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={() => handleMouseEnter(1)}
              onTouchStart={() => handleTouchStart(1)}
              onTouchEnd={handleTouchEnd}
              onTouchMove={handleTouchMove}
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
          <div style={{'--TY': topDegrees + 'deg'}} className="cube-holder-top-container" 
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onWheel={handleWheel}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={() => handleMouseEnter(0)} 
              onTouchStart={() => handleTouchStart(0)}
              onTouchEnd={handleTouchEnd}
              onTouchMove={handleTouchMove}>
            
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
                <div className="cube-face-front-indv slider"></div>
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