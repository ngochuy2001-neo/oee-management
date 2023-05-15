import { useState } from "react"
import { useEffect } from "react"
import { Bar } from "react-chartjs-2"

function ReportBarChart({ data }) {
  
  useEffect(() => {
    setBarData({
      labels: Object.keys(data),
      datasets: [
        {
          label: "Production",
          backgroundColor: "#52b788",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 1,
          data: Object.values(data)
        }
      ]
    })
  },[data])

  const [barData, setBarData] = useState({
    labels: Object.keys(data),
    datasets: [
      {
        label: "Production",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1,
        data: Object.values(data)
      }
    ]
  })

  return(
    <div className="ReportBarChart">
      {data ? <Bar data={barData}/> : <div></div>}
    </div>
  )
}

export default ReportBarChart