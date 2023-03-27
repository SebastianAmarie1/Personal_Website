import React from "react";

import "./Single-Cube-css.css"

function SingleCube({ X,Y,Z }) {

  const style = {
    '--x': X + 'deg', 
    '--y': Y + 'deg',
    '--z': Z + 'deg',
  }

  return (
    <div style={style}className="cube">
        <div className="cube-face cube-face-front fcc">Front</div>
        <div className="cube-face cube-face-back fcc">Back</div>
        <div className="cube-face cube-face-right fcc">Right</div>
        <div className="cube-face cube-face-left fcc">Left</div>
        <div className="cube-face cube-face-top fcc">Top</div>
        <div className="cube-face cube-face-bottom fcc">Bottom</div>
    </div>
  );
}

export default SingleCube;