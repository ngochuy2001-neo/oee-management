import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip} from "chart.js";
import { faBagShopping, faGaugeHigh } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { useState,useEffect, memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TotalOEE( props ) {
  Chart.register(ArcElement, Tooltip)

  const [color, setColor] = useState("#ff0000")
  const [availabilityColor, setAvailabilityColor] = useState("#000000")
  const [performanceColor, setPerformanceColor] = useState("#000000")
  const [qualityColor, setQualityColor] = useState("#000000")

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

  useEffect(() => {
    if (props.totalAvailability >= 80){
      setAvailabilityColor("#0ba600")
    }
    else if (props.totalAvailability >= 60){
      setAvailabilityColor("#f7eb05")
    }
    else{
      setAvailabilityColor("#d90016")
    }
    if (props.totalPerformance >= 80){
      setPerformanceColor("#0ba600")
    }
    else if (props.totalPerformance >= 60){
      setPerformanceColor("#f7eb05")
    }
    else{
      setPerformanceColor("#d90016")
    }
    if (props.totalQuality >= 80){
      setQualityColor("#0ba600")
    }
    else if (props.totalQuality >= 60){
      setQualityColor("#f7eb05")
    }
    else{
      setQualityColor("#d90016")
    }
  }, [props.totalAvailability, props.totalPerformance, props.totalQuality])

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
    plugins:{
      legend: {
        display: false
      }
    }
  }

  let gaugeText = {
    id : "gaugeText",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const {ctx, data} = chart;

      const xCenter = chart.getDatasetMeta(0).data[0].x
      const yCenter = chart.getDatasetMeta(0).data[0].y

      ctx.save();
      ctx.fillStyle = 'black';
      ctx.font =  "bold 60px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = 'baseline';
      ctx.fillText(data.datasets[0].data[0], xCenter, yCenter - 5)
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
      <div className="TotalOEEParameter">
        <p style={{fontWeight: "bolder"}}>Availability</p>
        <div className="statisticBarChart" style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
          <div 
            className="horizontalBarChart"
            style={{
              height: "30px",
              backgroundColor: "gray",
              marginTop: "5px",
              flex: 1
            }}
          >
            <div className="insideChart"
              style={{
                height: "100%",
                width: props.totalAvailability.toString() +"%",
                backgroundColor: availabilityColor,
                transition: "1s"
              }}
            ></div>
          </div>
          <p
            style={{
              marginLeft: "5px",
              fontWeight: "bolder" 
            }}
          >{props.totalAvailability}%</p>
        </div>
      </div>
      <div className="TotalOEEParameter">
        <p style={{fontWeight: "bolder"}}>Performance</p>
        <div className="statisticBarChart" style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
          <div 
            className="horizontalBarChart"
            style={{
              height: "30px",
              backgroundColor: "gray",
              marginTop: "5px",
              flex: 1
            }}
          >
            <div className="insideChart"
              style={{
                height: "100%",
                width: props.totalPerformance + "%",
                backgroundColor: performanceColor,
                transition: "1s"
              }}
            ></div>
          </div>
          <p
            style={{
              marginLeft: "5px",
              fontWeight: "bolder" 
            }}
          >{props.totalPerformance}%</p>
        </div>
      </div>
      <div className="TotalOEEParameter">
        <p style={{fontWeight: "bolder"}}>Quality</p>
        <div className="statisticBarChart" style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
          <div 
            className="horizontalBarChart"
            style={{
              height: "30px",
              backgroundColor: "gray",
              marginTop: "5px",
              flex: 1
            }}
          >
            <div className="insideChart"
              style={{
                height: "100%",
                width: props.totalQuality.toString() + "%",
                backgroundColor: qualityColor,
                transition: "1s" 
              }}
            ></div>
          </div>
          <p
            style={{
              marginLeft: "5px",
              fontWeight: "bolder" 
            }}
          >{props.totalQuality}%</p>
        </div>
      </div>
    </div>
  )
}

export default memo(TotalOEE);