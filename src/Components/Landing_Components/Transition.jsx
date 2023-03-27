import React, { useEffect, useState } from "react";
import { useCtx } from "../../Context/Context";
import "./Transition-css.css"

function Transition() {

  const [bypassing, setBypassing] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  
  useEffect(() => {
    setTimeout(() => {
      setBypassing(false)
    },6000)

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
  
    return () => clearTimeout(timer);
  },[])

  return (
    <>
    { bypassing 
      ?
        <div className={`transition-main ${isVisible && 'visible'} fcc`}>
          <div className="transition-bypass">
            <h1 className="code">Bypassing Login </h1>
            <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          </div>
        </div>
      :
        <div className={`transition-main-deactive ${isVisible && 'visible'} fcc`}>
          <h1 className="code transition-granted"> &lt; Bypass Complete &gt;</h1>
        </div>
    }
    </>
  );
}

export default Transition;