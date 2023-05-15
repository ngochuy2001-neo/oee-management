import axios from "axios";
import { Select, MenuItem, InputLabel, FormControl, Input, Button } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

function DeviceSelector({machineOptionsData, onDeviceData}) {

  const [selectedMachine, setSelectedMachine] = useState('')
  const [selectedShift, setSelectedShift] = useState('')

  const [shiftOptionsData, setShiftOptionsData] = useState([])

  useEffect(() => {
    if(selectedMachine != ''){
      axios.get("http://localhost:4000/api/report?machineID="+ selectedMachine)
        .then((res) => {
          setSelectedShift('')
          setShiftOptionsData(Object.keys(res.data))
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [selectedMachine])

  const handleSubmitClick = () =>{
    axios.get("http://localhost:4000/api/report?machineID="+
    selectedMachine + 
    '&shift=' +
    selectedShift)
    .then((res) => {
      onDeviceData(res.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className="DeviceSelector">
      <div className="machineList">
      <FormControl fullWidth> 
          <InputLabel>Select device ID</InputLabel>
          <Select
            sx={{mr: 1}}
            value={selectedMachine}
            label="Select device ID"
            onChange={(event) => {
              setSelectedMachine(event.target.value)
            }}
          >
            {machineOptionsData.map((data,index) => {
              return(
                <MenuItem key={index} value={data.value}>Machine ID:{data.value}</MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </div>
      <div className="shiftList">
        <FormControl fullWidth>
          <InputLabel>Select shift</InputLabel>
          <Select
            value={selectedShift}
            label="Select shift"
            onChange={(event) => {
              setSelectedShift(event.target.value)
            }}
          >
            {shiftOptionsData.map((data,index) => {
              return(
                <MenuItem key={index} value={data}>{data}</MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </div>
      <div className="deviceReportSubmit">
        <FormControl
          sx={{
            marginRight: "10px",
            width: "30%"
          }}
        >
          <Button
            variant="contained"
            disabled={!selectedShift}
            onClick={handleSubmitClick}
          >Check device</Button>
        </FormControl>
      </div>
    </div>
  )
}

export default DeviceSelector