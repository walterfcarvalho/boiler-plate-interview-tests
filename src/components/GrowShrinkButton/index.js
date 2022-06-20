import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

import './GrowShrinkButton.css'

const GrowShrinkButton = () => {
  const [hw, setHw] = useState({ h: 30, w: 40 })
  const [isGrowing, setIsGrowing] = useState(true)


  useEffect(() => {
 
    const timer = setInterval(() => ajustSize(), 500);
 
    return () => {
      clearInterval(timer);
      console.log("bye")
    };
      function ajustSize() {

    if (isGrowing && hw.h < 300) {
      setHw({h: hw.h + 10, w: hw.w + 10})
    }  
    
     if (!isGrowing && hw.h > 40) {
       setHw({h: hw.h - 10, w: hw.w - 10})      
     }

  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hw, isGrowing])


  function ajustSize() {

    if (isGrowing && hw.h < 300) {
      setHw({h: hw.h + 10, w: hw.w + 10})
    }  
    
     if (!isGrowing && hw.h > 40) {
       setHw({h: hw.h - 10, w: hw.w - 10})      
     }

  }

  return <div>
    <h1> <Link to = "/" > return to begin </Link></h1>


    <button 
    onClick={() => setIsGrowing(!isGrowing) } 
    style={{ width: hw.w, height: hw.h }}> ok </button>

  </div>

}

export default GrowShrinkButton
