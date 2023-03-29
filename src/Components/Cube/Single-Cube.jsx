import React, { useState, useRef, useEffect } from "react";

import "./Single-Cube-css.css"

function SingleCube({solve, handleSolve}) {

  const [isSolved, setIsSolved] = useState(false)
  const [isDragging, setIsDragging] = useState(false);
  const [currentPos, setCurrentPos] = useState(null)
  const [topDegrees, setTopDegrees] = useState(100)
  const [centerDegrees, setCenterDegrees] = useState(-25)
  const [bottomDegrees, setBottomDegrees] = useState(0)
  const containerRef = useRef(null);

  useEffect(() => {
    const tDegree = topDegrees % 365
    const cDegree = centerDegrees % 365
    const bDegree = bottomDegrees % 365

    if (
      Math.abs(tDegree - cDegree) <= 10 &&
      Math.abs(cDegree - bDegree) <= 10 &&
      Math.abs(tDegree - bDegree) <= 10
    ) {
      setIsSolved(true)
      handleSolve(true)
      setTopDegrees(cDegree)
      setCenterDegrees(cDegree)
      setBottomDegrees(cDegree)
    }

  }, [topDegrees, centerDegrees, bottomDegrees])

  useEffect(() => {
    if (solve){
      setTopDegrees(40)
      setCenterDegrees(40)
      setBottomDegrees(40)
    }
  },[solve])

  function handleMouseDown() {
    if (isSolved){
      setIsDragging(false)
    } else{
      setIsDragging(true);
    }
  }

  function handleMouseUp() {
    if (isSolved) return
    setIsDragging(false);
  }

  function handleMouseMove(event) {
    if (isSolved) return
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
    if (isSolved) return
    setIsDragging(true);
    setCurrentPos(pos)
  }

  function handleTouchEnd() {
    if (isSolved) return
    setIsDragging(false);
    setCurrentPos(null)
  }

  function handleTouchMove(event) {
    if (isSolved) return
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
    if (isSolved) return
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
    if (isSolved) return
    setIsDragging(false);
    setCurrentPos(null)
  }

  function handleMouseEnter(pos) {
    if (isSolved) return
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
              <div className="cube-face-front-indvs d g"></div>
              <div className="cube-face-front-indvs  f2 d g"></div>
              <div className="cube-face-front-indvs d g"></div>
            </div>
            <div className="cube-face cube-face-back-bottom shorter fcc">
              <div className="cube-face-front-indvs d w"></div>
              <div className="cube-face-front-indvs d w"></div>
              <div className="cube-face-front-indvs d w"></div>
            </div>
            <div className="cube-face cube-face-right-bottom shorter fcc">
              <div className="cube-face-front-indvs d y"></div>
              <div className="cube-face-front-indvs d y"></div>
              <div className="cube-face-front-indvs d y"></div>
            </div>
            <div className="cube-face cube-face-left-bottom shorter fcc">
              <div className="cube-face-front-indvs d r"></div>
              <div className="cube-face-front-indvs d r"></div>
              <div className="cube-face-front-indvs d r"></div>
            </div>
            <div className="cube-face cube-face-top-bottom fcc">
              <div className="cube-face-front-indv a d"></div>
              <div className="cube-face-front-indv a d"></div>
              <div className="cube-face-front-indv a d"></div>
              <div className="cube-face-front-indv a d"></div>
              <div className="cube-face-front-indv a d"></div>
              <div className="cube-face-front-indv a d"></div>
              <div className="cube-face-front-indv a d"></div>
              <div className="cube-face-front-indv a d"></div>
              <div className="cube-face-front-indv a d"></div>
            </div>
            <div className="cube-face cube-face-bottom-bottom fcc">
              <div className="cube-face-front-indv d p"></div>
              <div className="cube-face-front-indv d p"></div>
              <div className="cube-face-front-indv d p"></div>
              <div className="cube-face-front-indv d p"></div>
              <div className="cube-face-front-indv d p"></div>
              <div className="cube-face-front-indv d p"></div>
              <div className="cube-face-front-indv d p"></div>
              <div className="cube-face-front-indv d p"></div>
              <div className="cube-face-front-indv d p"></div>
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
              <div className="cube-face-front-indvs d g"></div>
              <div className="cube-face-front-indvs d g"></div>
              <div className="cube-face-front-indvs d g"></div>
            </div>
            <div className="cube-face cube-face-back-center shorter fcc">
              <div className="cube-face-front-indvs d w"></div>
              <div className="cube-face-front-indvs d w"></div>
              <div className="cube-face-front-indvs d w"></div>
            </div>
            <div className="cube-face cube-face-right-center shorter fcc">
              <div className="cube-face-front-indvs d y"></div>
              <div className="cube-face-front-indvs d y"></div>
              <div className="cube-face-front-indvs d y"></div>
            </div>
            <div className="cube-face cube-face-left-center shorter fcc">
              <div className="cube-face-front-indvs d r"></div>
              <div className="cube-face-front-indvs d r"></div>
              <div className="cube-face-front-indvs d r"></div>
            </div>
            <div className="cube-face cube-face-top-center fcc">
              <div className="cube-face-front-indv a "></div>
              <div className="cube-face-front-indv a "></div>
              <div className="cube-face-front-indv a "></div>
              <div className="cube-face-front-indv a "></div>
              <div className="cube-face-front-indv a "></div>
              <div className="cube-face-front-indv a "></div>
              <div className="cube-face-front-indv a "></div>
              <div className="cube-face-front-indv a "></div>
              <div className="cube-face-front-indv a "></div>
            </div>
            <div className="cube-face cube-face-bottom-center fcc">
              <div className="cube-face-front-indv a"></div>
              <div className="cube-face-front-indv a"></div>
              <div className="cube-face-front-indv a"></div>
              <div className="cube-face-front-indv a"></div>
              <div className="cube-face-front-indv a"></div>
              <div className="cube-face-front-indv a"></div>
              <div className="cube-face-front-indv a"></div>
              <div className="cube-face-front-indv a"></div>
              <div className="cube-face-front-indv a"></div>
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
                <div className="cube-face-front-indvs d g"></div>
                <div className="cube-face-front-indvs d g"></div>
                <div className="cube-face-front-indvs d g"></div>
            </div>
            <div className="cube-face cube-face-back-top shorter fcc">
              <div className="cube-face-front-indvs d w"></div>
              <div className="cube-face-front-indvs d w"></div>
              <div className="cube-face-front-indvs d w"></div>
            </div>
            <div className="cube-face cube-face-right-top shorter fcc">
              <div className="cube-face-front-indvs d y"></div>
              <div className="cube-face-front-indvs d y" ></div>
              <div className="cube-face-front-indvs d y"></div>
            </div>
            <div className="cube-face cube-face-left-top shorter fcc">
              <div className="cube-face-front-indvs d r"></div>
              <div className="cube-face-front-indvs d r"></div>
              <div className="cube-face-front-indvs d r"></div>
            </div>
              <div className="cube-face cube-face-top-top">
                <div className="cube-face-front-indv d slider"></div>
                <div className="cube-face-front-indv d"></div>
                <div className="cube-face-front-indv d"></div>
                <div className="cube-face-front-indv d"></div>
                <div className="cube-face-front-indv d "></div>
                <div className="cube-face-front-indv d"></div>
                <div className="cube-face-front-indv d"></div>
                <div className="cube-face-front-indv d"></div>
                <div className="cube-face-front-indv d"></div>
            </div>
            <div className="cube-face cube-face-bottom-top fcc">
              <div className="cube-face-front-indv a d"></div>
              <div className="cube-face-front-indv a d"></div>
              <div className="cube-face-front-indv a"></div>
              <div className="cube-face-front-indv a d"></div>
              <div className="cube-face-front-indv a d"></div>
              <div className="cube-face-front-indv a d"></div>
              <div className="cube-face-front-indv a d"></div>
              <div className="cube-face-front-indv a d"></div>
              <div className="cube-face-front-indv a d"></div>
            </div>
          </div>

      </div>
    </>
  );
}

export default SingleCube;