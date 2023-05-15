import { Doughnut } from "react-chartjs-2";
import { useEffect, useState } from "react";

function ReportGaugeChart({ data }) {
  const [doughnutColor, setDoughnutColor] = useState("");
  const [availabilityColor, setAvailabilityColor] = useState("")
  const [qualtiyColor, setQualityColor] = useState("")
  const [performanceColor, setPerformanceColor] = useState("")

  const green = "#3d9140"
  const yellow = "#f7b500"
  const red = "#dd4646"

  useEffect(() => {
    if (data.shiftoeescore >= 80) {
      setDoughnutColor("#3d9140");
    } else if (data.shiftoeescore >= 60) {
      setDoughnutColor("#f7b500");
    } else {
      setDoughnutColor("#dd4646");
    }
  }, [data.shiftoeescore]);

  const [doughnutData, setDoughnutData] = useState({
    labels: ["oee", ""],
    datasets: [
      {
        label: "Shift OEE Score",
        data: [data.shiftoeescore, 100 - data.shiftoeescore],
        backgroundColor: [doughnutColor, "#4c4d4c"],
        hoverOffset: 4,
      },
    ],
  });

  useEffect(() => {
    setDoughnutData({
      labels: ["oee", ""],
      datasets: [
        {
          label: "Shift OEE Score",
          data: [data.shiftoeescore, 100 - data.shiftoeescore],
          backgroundColor: [doughnutColor, "#4c4d4c"],
          hoverOffset: 4,
        },
      ],
    });
  }, [data, doughnutColor]);

  useEffect(() => {
    if(data.shiftAvailability >= 80){
      setAvailabilityColor(green)
    }
    else if (data.shiftPerformance >= 60) {
      setAvailabilityColor(yellow)
    }
    else{
      setAvailabilityColor(red)
    }
    if(data.shiftPerformance >= 80){
      setPerformanceColor(green)
    }
    else if (data.shiftPerformance >= 60){
      setPerformanceColor(yellow)
    }
    else{
      setPerformanceColor(red)
    }
    if(data.shiftQuality >= 80){
      setQualityColor(green)
    }
    else if (data.shiftQuality >= 60){
      setQualityColor(yellow)
    }
    else{
      setQualityColor(red)
    }
  }, [data.shiftAvailability, data.shiftPerformance, data.shiftQuality])

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: "80%",
  };

  const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;
      ctx.save();
      ctx.font = "bolder 50px sans-serif";
      ctx.fillStyle = doughnutColor;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        data.datasets[0].data[0],
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
    },
  };

  return (
    <div className="ReportGaugeChart">
      <div className="mainGaugeChart">
        <Doughnut data={doughnutData} options={options} plugins={[textCenter]} />
      </div>
      <div className="sideBarChart">
        <div className="oneBarChart">
          <p><b>Availability</b></p>
          <div className="barchartBackground">
            <div className="barchartMainBar"
            style={{height: data.shiftAvailability + "%", backgroundColor: availabilityColor}}></div>
          </div>
        </div>
        <div className="oneBarChart">
          <p><b>Quality</b></p>
          <div className="barchartBackground">
            <div className="barchartMainBar"
            style={{height: data.shiftQuality + "%", backgroundColor: qualtiyColor}}></div>
          </div>
        </div>
        <div className="oneBarChart">
          <p><b>Performance</b></p>
          <div className="barchartBackground">
            <div className="barchartMainBar"
            style={{height: data.shiftPerformance + "%", backgroundColor: performanceColor}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportGaugeChart;
