import "../assets/styles/Dashboard.scss"
import DetailOEE from "../components/DetailOEE"
import TotalOEE from "../components/TotalOEE"
import axios from "axios"
import { useEffect, useState } from "react"

function Dashboard(){

  const formatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 3
  })
  const [userInformations, setUserInformations] = useState("Hello guys!");
  const [totalOEEInformations, setTotalOEEInformations] = useState({
  'totalOEE': {
      "oeescore": 0,
      "producedproduct": 0,
      "workedtime": "0m",
      "productperminute": 0
    }
  });
  const [devicesManage, setDevicesManage] = useState([
     {
        "deviceID": 0,
        "devicename": "default",
        "producedproduct": 0,
        "workedtime": "0m",
        "productperminute": 0 
      }
  ])
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

  console.log(devicesManage)
  return(
    <div className="Dashboard">
      <div className="deviceOEE">
        {devicesManage.map((data, i) => {
          return(
            <DetailOEE key={i}
              devicename={data.devicename}
              selfoeescore={data.selfoeescore}
              producedproduct={data.producedproduct}
              workedtime={data.workedtime}
              productperminute={data.productperminute}
            />
          )
        })}
      </div>
      <TotalOEE 
        oeescore={totalOEEInformations.oeescore}
        producedproduct = {formatter.format(totalOEEInformations.producedproduct)}
        workedtime = {totalOEEInformations.workedtime}
        productperminute = {totalOEEInformations.productperminute}
      />
    </div> 
  )
}

export default Dashboard