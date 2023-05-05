import { memo, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { 
  faBagShopping,
  faGaugeHigh
} from "@fortawesome/free-solid-svg-icons";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend, LinearScale, CategoryScale } from "chart.js";

function DetailOEE( {devicename, selfoeescore, producedproduct, workedtime, productperminute, deviceAvailability, devicePerformance, deviceQuality} ) {

  const formatter = new Intl.NumberFormat("en-US", {
    maximumFractionDigits:3
  })
  
  Chart.register(ArcElement, LinearScale, CategoryScale, Tooltip, Legend)

  
  const [panelColor, setPanelColor] = useState("#1b9c02")
  const [barChartColor, setBarChartColor] = useState({
    availabilityColor: "#000000",
    performanceColor: "#000000",
    qualityColor: "#000000"
  })

  const [barChartAvailability, setBarChartAvailability] = useState(
    {
      width: deviceAvailability + "%",
      backgroundColor: "#00ff00"
    }
  )

  const [barChartPerformance, setBarChartPerformance] = useState(
    {
      width: devicePerformance + "%",
      backgroundColor: "#00ff00"
    }
  )

  const [barChartQuality, setBarChartQuality] = useState(
    {
      width: deviceQuality + "%",
      backgroundColor:"#00ff00"
    }
  )

  useEffect(() => {
    if (deviceAvailability >= 65){
      setBarChartAvailability({
        width: deviceAvailability + "%",
        backgroundColor: "#24ed59"
      })
    }
    else if (deviceAvailability >= 40){
      setBarChartAvailability({
        width: deviceAvailability + "%",
        backgroundColor: "#f0ca24"
      })
    }
    else{
      setBarChartAvailability({
        width: deviceAvailability + "%",
        backgroundColor: "#ff0000"
      })
    }
  }, [deviceAvailability])

  useEffect(() => {
    if (devicePerformance >= 65){
      setBarChartPerformance({
        width: devicePerformance + "%",
        backgroundColor: "#24ed59"
      })
    }
    else if (devicePerformance >= 40){
      setBarChartPerformance({
        width: devicePerformance + "%",
        backgroundColor: "#f0ca24"
      })
    }
    else{
      setBarChartPerformance({
        width: devicePerformance + "%",
        backgroundColor: "#ff0000"
      })
    }
  }, [devicePerformance])

  useEffect(() => {
    if (deviceQuality >= 65){
      setBarChartQuality({
        width: deviceQuality + "%",
        backgroundColor: "#24ed59"
      })
    }
    else if (deviceQuality >= 40){
      setBarChartQuality({
        width: deviceQuality + "%",
        backgroundColor: "#f0ca24"
      })
    }
    else{
      setBarChartQuality({
        width: deviceQuality + "%",
        backgroundColor: "#ff0000"
      })
    }
  }, [deviceQuality])

  useEffect(() => {
    if (selfoeescore >= 80) {
      setPanelColor("#1b9c02")
    }
    else if (selfoeescore >= 60) {
      setPanelColor("#ffdd00")
    }
    else {
      setPanelColor("#9e0000")
    }
  }, [selfoeescore])

  let data = {
    labels: ["OEE", "Empty"],
    datasets: [
      {
        "label": "Machine OEE",
        "backgroundColor": [
          panelColor,
          "#c2c2c2"
        ],
        data: [selfoeescore,100 - selfoeescore],
        cutout: "80%",
        circumference: 180,
        rotation: 270,
        responsive: true
      }
    ]
  }

  let options = {
    responsive: true,
    plugins: {
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
      ctx.fillStyle = 'gray';
      ctx.font =  "bold 30px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = 'baseline';
      ctx.fillText(data.datasets[0].data[0], xCenter, yCenter - 5)
    }
  }

  return(
    <div className="DetailOEE">
      <div className="detailOEEHeader" style={{backgroundColor: panelColor, borderTopLeftRadius: "5px", borderTopRightRadius: "5px"}}>
        <p>{devicename}</p>
      </div>
      <div className="detailOEEContent" >
        <div className="detailOEEFirstPart">
          <div className="detailOEEChart">
            <Doughnut data={data} options={options} plugins={[gaugeText]}/>
          </div>
          <div className="detailOEEStatistics">
            <div className="detailOEEProps">
              <FontAwesomeIcon className="detailOEEIcon" icon={faBagShopping} />
              <p className="detailOEEProp"> {formatter.format(producedproduct)} pcs</p>
            </div>
            <div className="detailOEEProps">
              <FontAwesomeIcon className="detailOEEIcon" icon={faClock} />
              <p className="detailOEEProp"> {workedtime}</p>
            </div>
            <div className="detailOEEProps">
              <FontAwesomeIcon className="detailOEEIcon" icon={faGaugeHigh} />
              <p className="detailOEEProp"> {productperminute} pcs/mins</p>
            </div>
          </div>
        </div>
        <div className="chartProps">
          <p>Availability: {deviceAvailability}</p>
          <div className="barChartBackground">
            <div className="chartValue chartAvailability" style={barChartAvailability}></div>
          </div>
          <p>Performance: {devicePerformance}</p>
          <div className="barChartBackground">
            <div className="chartValue" style={barChartPerformance}></div>
          </div>
          <p>Quality: {deviceQuality}</p>
          <div className="barChartBackground">
            <div className="chartValue" style={barChartQuality}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(DetailOEE) ;