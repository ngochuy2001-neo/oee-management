import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Legend, Tooltip} from "chart.js";
import { faTemperatureEmpty } from "@fortawesome/free-solid-svg-icons";

function TotalOEE() {
  Chart.register(ArcElement, Legend, Tooltip)
  let data = {
    labels:["OEE", "Empty"],
    datasets: [
      {
        label: "Total OEE",
        backgroundColor: [
          "#0c8f00",
          "#ff0000"
        ],
        data: [60, 40],
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
      const {ctx, chartArea: {top, bottom, left, right, width, height}} = chart;

      const xCenter = chart.getDatasetMeta(0).data[0].x
      const yCenter = chart.getDatasetMeta(0).data[0].y

      ctx.save();
      ctx.fillStyle = 'gray';
      ctx.font =  "bold 16px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = 'baseline';
      ctx.fillText('Test', xCenter, yCenter - 15)
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
      <Doughnut data={data} options={options} plugins={[gaugeText]}/>
    </div>
  )
}

export default TotalOEE;