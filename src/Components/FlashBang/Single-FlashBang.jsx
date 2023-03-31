import React, { useEffect, useState } from "react";
import "./Single-FlashBang-css.css"

function FlashBang() {

    const [flash, setFlash] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setFlash(true)
        },6000)
    })

  return (
    <div className="flashbang-main ">
        {!flash &&
            <div className="flashbang-container flashbang-animation">
                <div className="flashbang-side flashbang-top hexagon"><span></span></div>
                <div className="flashbang-side flashbang-side1 side-12 fcc">
                    <div className="flashbang-side-tape">
                        <h1>FlashBang</h1>
                    </div>
                </div>
                <div className="flashbang-side flashbang-side2 side-12 fcc">
                    <div className="flashbang-side-tape">
                        <h1>FlashBang</h1>
                    </div>
                </div>
                <div className="flashbang-side flashbang-side3 side-34 fcc">
                    <div className="flashbang-side-tape">
                        <h1>FlashBang</h1>
                    </div>
                </div>
                <div className="flashbang-side flashbang-side4 side-34 fcc">
                    <div className="flashbang-side-tape">
                        <h1>FlashBang</h1>
                    </div>
                </div>
                <div className="flashbang-side flashbang-side5 side-56 fcc">
                    <div className="flashbang-side-tape">
                        <h1>FlashBang</h1>
                    </div>
                </div>
                <div className="flashbang-side flashbang-side6 side-56 fcc">
                    <div className="flashbang-side-tape">
                        <h1>FlashBang</h1>
                    </div>
                </div>
                <div className="flashbang-side flashbang-bottom hexagon"><span></span></div>
            
                <div className="flashbang-side-top flashbang-top-top hexagon"><span></span></div>
                <div className="flashbang-side-top flashbang-side2-top side-12-top"></div>
                <div className="flashbang-side-top flashbang-side1-top side-12-top"></div>
                <div className="flashbang-side-top flashbang-side3-top side-34-top"></div>
                <div className="flashbang-side-top flashbang-side4-top side-34-top"></div>
                <div className="flashbang-side-top flashbang-side5-top side-56-top"></div>
                <div className="flashbang-side-top flashbang-side6-top side-56-top"></div>
            
        </div>
    }
    <div className={`${flash &&'flash-explosion-active'}`}> </div>
    </div>
  );
}

export default FlashBang;