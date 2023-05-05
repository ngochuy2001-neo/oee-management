import Draggable from "react-draggable"
import "../assets/styles/Map.scss"
import Machine from "../components/Machine"
import { useState } from "react"
import { Resizable } from "react-resizable"

function Map() {

  const [position, setPosition] = useState({x:0, y: 0})

  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);

  const handleResize = (event, {size}) =>{
    setWidth(size.width)
    setHeight(size.height)
  }

  const handleDrag = (e, ui) => {
    const {x, y} = ui;
    setPosition({x, y});
  }
  
  return (
    <div className="Map">
      <Draggable onDrag={handleDrag}>
        <Resizable
          width={width}
          height={height}
          onResize={handleResize}
          draggableOpts={{bounds: 'parents'}}
        >
          <div className="box">
            <Machine color={"blue"}/>
          </div>
        </Resizable>
      </Draggable>
      <Draggable onDrag={handleDrag}>
        <Resizable
          width={width}
          height={height}
          onResize={handleResize}
          draggableOpts={{bounds: 'parents'}}
        >
          <div className="box">
            <Machine color={"blue"}/>
          </div>
        </Resizable>
      </Draggable>
      <Draggable onDrag={handleDrag}>
        <Resizable
          width={width}
          height={height}
          onResize={handleResize}
          draggableOpts={{bounds: 'parents'}}
        >
          <div className="box">
            <Machine color={"blue"}/>
          </div>
        </Resizable>
      </Draggable>
      <Draggable onDrag={handleDrag}>
        <Resizable
          width={width}
          height={height}
          onResize={handleResize}
          draggableOpts={{bounds: 'parents'}}
        >
          <div className="box">
            <Machine color={"blue"}/>
          </div>
        </Resizable>
      </Draggable>
      <Draggable onDrag={handleDrag}>
        <Resizable
          width={width}
          height={height}
          onResize={handleResize}
          draggableOpts={{bounds: 'parents'}}
        >
          <div className="box">
            <Machine color={"blue"}/>
          </div>
        </Resizable>
      </Draggable>
    </div>
  )
}

export default Map