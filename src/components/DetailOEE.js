import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { 
  faBagShopping,
  faGaugeHigh, 
  faRankingStar, 
  faClockRotateLeft,
  faArrowTrendUp
} from "@fortawesome/free-solid-svg-icons";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from "chart.js";

function DetailOEE( {devicename, selfoeescore, producedproduct, workedtime, productperminute} ) {

  const formatter = new Intl.NumberFormat("en-US", {
    maximumFractionDigits:3
  })
  
  Chart.register(ArcElement, Tooltip)

  const [panelColor, setPanelColor] = useState("#1b9c02")

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
        rotation: 270
      }
    ]
  }

  let options = {

  }

  const textCenter = {
    id: 'textcenter',
    beforeDatasetsDraw(chart, args, pluginOptions){
      const {ctx, data} = chart;

      ctx.save();
      ctx.font = "bolder 50px sans-serif";
      ctx.fillStyle = 'black'
      ctx.textAlign = 'center'
      ctx.textBaseLine = 'middle'
      console.log(chart.getDatasetMeta(0).data[0].y)
      ctx.fillText(data.datasets[0].data[0], chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y+16)
    }
  }
  
  let gaugeText = {
    id : "gaugeText",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const {ctx, data, chartArea: {top, bottom, left, right, width, height}} = chart;

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
      <div className="detailOEEHeader" style={{backgroundColor: panelColor}}>
        <p>{devicename}</p>
      </div>
      <div className="detailOEEContent" >
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
          <div className="detailOEEProps">
            <FontAwesomeIcon className="detailOEEIcon" icon={faClockRotateLeft} />
            <p className="detailOEEProp"> 100 %</p>
          </div>
          <div className="detailOEEProps">
            <FontAwesomeIcon className="detailOEEIcon" icon={faRankingStar} />
            <p className="detailOEEProp"> 100 % </p>
          </div>
          <div className="detailOEEProps">
            <FontAwesomeIcon className="detailOEEIcon" icon={faArrowTrendUp} />
            <p className="detailOEEProp"> 100 % </p>
          </div>
        </div>
        <div className="detailOEEChart">
          <Doughnut data={data} options={options} plugins={[gaugeText]}/>
        </div>
      </div>
    </div>
  )
}

export default DetailOEE;