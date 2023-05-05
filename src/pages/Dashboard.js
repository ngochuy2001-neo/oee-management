import "../assets/styles/Dashboard.scss"
import DetailOEE from "../components/DetailOEE"
import TotalOEE from "../components/TotalOEE"
import axios from "axios"
import { useEffect, useState } from "react"

function Dashboard(){

  const formatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 3
  })


  const [totalOEEInformations, setTotalOEEInformations] = useState({
  'totalOEE': {
      "oeescore": 0,
      "producedproduct": 0,
      "workedtime": "0m",
      "productperminute": 0
    }
  });
  const [devicesManage, setDevicesManage] = useState()
  useEffect(() => {
    function fetchData() {
      axios.get("http://localhost:4000")
        .then(res => {
          const total = res.data.totalOEE
          const devices = res.data.devices
          setTotalOEEInformations(total)
          setDevicesManage(devices)
        })
    }
    


    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 3000);

    return () => clearInterval(interval);    
  },[])
  

  return(
    <div className="Dashboard">
      <TotalOEE 
        oeescore={totalOEEInformations.oeescore}
        producedproduct = {formatter.format(totalOEEInformations.producedproduct)}
        workedtime = {totalOEEInformations.workedtime}
        productperminute = {totalOEEInformations.productperminute}
      />
      {
        devicesManage ?
        <div className="deviceOEE">
          {devicesManage.map((data, i) => {
            return(
              <DetailOEE key={i}
                devicename={data.devicename}
                selfoeescore={data.selfoeescore}
                producedproduct={data.producedproduct}
                workedtime={data.workedtime}
                productperminute={data.productperminute}
                deviceAvailability = {data.deviceAvailability}
                devicePerformance = {data.devicePerformance}
                deviceQuality = {data.deviceQuality}
              />
            )
          })}
        </div> : null
      }
    </div> 
  )
}

export default Dashboard