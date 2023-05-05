import { useState } from "react"

function Machine({color}) {
  
  return(
    <div 
      className="Machine"
      style={{
        backgroundColor: color,
        right: "50%"
      }}
    >

    </div>
  )
}

export default Machine