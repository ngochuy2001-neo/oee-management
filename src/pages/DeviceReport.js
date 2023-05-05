import { useEffect, useState } from "react"
import "../assets/styles/DeviceReport.scss"
import Select from 'react-select'
import axios from "axios"
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement  } from "chart.js"
import { Bar, Doughnut } from "react-chartjs-2"
import { faBarChart } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import DeviceSelector from "../components/DeviceSelector"

function DeviceReport() {
  Chart.register(
    BarElement,
    ArcElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
  )

  const [machineOptions, setMachineOptions] = useState([])
  const [shiftOptions, setShiftOptions] = useState([])
  const [selectedShift, setSelectedShift] = useState({value: "", label: "Default"})
  const [selectedMachine, setSelectedMachine] = useState({value: "", label: "Default"})
  const [barChartLabel, setBarChartLabel] = useState([])
  const [barChartData, setBarChartData] = useState([])
  const [deviceData, setDeviceData] = useState(
    {
      shiftoeescore: 0,
      shiftAvailability: 0,
      shiftPerformance: 0,
      shiftQuality: 0,
      runningTime: "00:00:00",
      downTime: "00:00:00",
      runCounter: 0,
      stopCounter: 0
    }
  )
  const [gaugeColor, setGaugeColor] = useState("#000000")

  useEffect(() => {
    axios.get("http://localhost:4000/api/report?machineID=" + selectedMachine["value"])
      .then((res) => {
        const data = Object.keys(res.data)
        setShiftOptions(data.map((value, index) => {
          return(
            {value: value, label: value}
          )
        }))
      })
  },[selectedMachine])
  
  const [chart, setChart] = useState(false)

  useEffect(() => {
    axios.get("http://localhost:4000")
      .then((res) => {
        const optionArray = res.data.devicesList
        setMachineOptions(optionArray.map((data, i) =>{
          return({
            value: data, label: data
          })
        }))
      })
      .catch((error) => {
        console.log(error)
      })
  },[])

  useEffect(() => {
    if (deviceData.shiftoeescore > 80){
      setGaugeColor("#00ff00")
    }
    else if ( deviceData.shiftoeescore > 60){
      setGaugeColor("#ffd000")
    }
    else{
      setGaugeColor("#ff0000")
    }
  },[deviceData.shiftoeescore])

  const handleClickSubmit = () =>{
    axios.get("http://localhost:4000/api/report?machineID=" + selectedMachine["value"] + "&shift=" + selectedShift["value"])
      .then((res) => {
        const data = res.data
        const keys = Object.keys(data.production)
        setBarChartLabel(keys)
        const value = Object.values(data.production)
        setBarChartData(value)
        setDeviceData(data.shiftOEE)
        setChart(true)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  
  const totalOEEData = {
    labels: ["OEE", "Empty"],
    datasets: [
      {
        label: "Device shift OEE",
        "backgroundColor": [
          gaugeColor,
          "#c2c2c2"
        ],
        data: [deviceData.shiftoeescore, 100 - deviceData.shiftoeescore],
        cutout: "80%"
      }
    ]
  }

  const barData = {
    labels: barChartLabel,
    datasets: [
      {
        label: 'Product',
        data: barChartData,
        backgroundColor: 'green',
        borderColor: 'black',
        borderWidth: 1,
      },
    ]
  }

  const donutOptions = {
    plugins: {
      legend: {
        display: false
      }
    }
  }

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
  
  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart, args, pluginOption){
      const {ctx, data} = chart;
      ctx.save();
      ctx.font = 'bolder 40px sansserif';
      ctx.fillStyle = 'black';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(data.datasets[0].data[0], chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
    }
  }


  return(
    <div className="DeviceReport">
      <DeviceSelector />
    </div>
  )
}

export default DeviceReport