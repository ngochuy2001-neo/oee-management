import { Delete, PrecisionManufacturing } from "@mui/icons-material"
import { Avatar, Button, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, TextField } from "@mui/material"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

function MachineSettings() {

  const [items, setItems] = useState([])
  const [machineID, setMachineID] = useState('')

  useEffect(() => {
    axios.get("http://localhost:4000/machine")
      .then((res) => {
        console.log(res.data)
        setItems(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  ,[])

  const handleInputChange = (event) => {
    setMachineID(event.target.value)
  }
  
  const handleDelete = (index) => {
    const newList = [...items]
    newList.splice(index, 1)
    setItems(newList)
  }

  const handleSubmitButton = () => {
    console.log(machineID)
    axios.post("http://localhost:4000/machine", {machineID: machineID})
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return(
    <div className="MachineSettings">
      <div className="machineSettingsInput">
        <TextField onChange={handleInputChange} className="uidInput" label="Machine UID" style={{textAlign: 'center'}}/>
        <Button onClick={handleSubmitButton} className="machineSettingSubmit" variant="contained" color="primary">
          Submit
        </Button>
      </div>
      <div className="machineList">
        <List>
          {items.map((item,index) => {
            return(
              <ListItem key={index} >
                <ListItemAvatar>
                  <Avatar>
                    <PrecisionManufacturing />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={item.machineName} secondary={item.machineID}/>
                <IconButton onClick={() => handleDelete(index)}>
                  <Delete/>
                </IconButton>
              </ListItem>
            )
          })}
        </List>
      </div>
    </div>
  )
}

export default MachineSettings