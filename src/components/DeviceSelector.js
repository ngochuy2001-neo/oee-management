import axios from "axios";
import { Select, MenuItem, InputLabel, FormControl, Input, Button } from "@mui/material";
import { useState } from "react";

function DeviceSelector() {

  const [selectedMachine, setSelectedMachine] = useState('')
  const [selectedShift, setSelectedShift] = useState('')

  const handleClickSubmit = (selectedMachine, selectedShift) => {
    
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
            <MenuItem value={"123123"}>Machine 1</MenuItem>
            <MenuItem value={"123345"}>Machine 2</MenuItem>
            <MenuItem value={"123456"}>Machine 3</MenuItem>
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
            <MenuItem value={"shift23"}>Shift 1</MenuItem>
            <MenuItem value={"shift24"}>Shift 2</MenuItem>
            <MenuItem value={"shift25"}>Shift 3</MenuItem>
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
          >Check device</Button>
        </FormControl>
      </div>
    </div>
  )
}

export default DeviceSelector