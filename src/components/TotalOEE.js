import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Legend, Tooltip} from "chart.js";
import { faBagShopping, faGaugeHigh } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TotalOEE( props ) {
  Chart.register(ArcElement, Tooltip)
  const [percentage, setPercentage] = useState(0);
  const [color, setColor] = useState("#ff0000")

   useEffect(() => {
    if (props.oeescore >= 80){
      setColor("#1b9c02")
    }
    else if (props.oeescore >= 60){
      setColor("#ecf000")
    }
    else{
      setColor("#ff0000")
    }
  },[props.oeescore])

  let data = {
    labels:["OEE", "Empty"],
    datasets: [
      {
        label: "Total OEE",
        backgroundColor: [
          color,
          "#968a8a"
        ],
        data: [props.oeescore, 100 - props.oeescore],
        circumference: 180,
        rotation: 270,
        cutout: "80%"
      }
    ]
  };

  let options = {
    
  }

  let gaugeText = {
    id : "gaugeText",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const {ctx, data, chartArea: {top, bottom, left, right, width, height}} = chart;

      const xCenter = chart.getDatasetMeta(0).data[0].x
      const yCenter = chart.getDatasetMeta(0).data[0].y

      ctx.save();
      ctx.fillStyle = 'gray';
      ctx.font =  "bold 60px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = 'baseline';
      ctx.fillText(data.datasets[0].data[0], xCenter, yCenter - 5)
    }
  }


  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart, args, pluginOptions){
      const {ctx, data} = chart;
      ctx.save();
      ctx.font = 'bolder 30px sans-serif';
      ctx.fillStyle = "red";
      ctx.fillText("text", chart.getDatasetMeta(0).data[0].x);
    }
  }
  return(
    <div className="TotalOEE">
      <h1 className="totalOEEHeader">Total OEE</h1>
      <Doughnut data={data} options={options} plugins={[gaugeText]}/>
      <div className="TotalOEEParameter">
        <FontAwesomeIcon className="parameterIcon" icon={faBagShopping} />
        <p>{props.producedproduct} pcs</p>
      </div>
      <div className="TotalOEEParameter">
        <FontAwesomeIcon className="parameterIcon" icon={faClock} />
        <p>{props.workedtime} (63.57%)</p>
      </div>
      <div className="TotalOEEParameter">
        <FontAwesomeIcon className="parameterIcon" icon={faGaugeHigh} />
        <p>{props.productperminute} pcs/min</p>
      </div>
    </div>
  )
}

export default TotalOEE;