import { useEffect, useState } from 'react'
import '../assets/styles/InteruptionReport.scss'
import Select from 'react-select'
import { Button } from '@mui/material'
import axios from 'axios'

function InteruptionReport() {

  const [selectedMachine, setSelectedMachine] = useState([])

  const machineOptions = [
    { value: '123123', label: 'Machine 1' },
    { value: '123345', label: 'Machine 2' },
    { value: '123456', label: 'Machine 3' }
  ]

  const [selectedShift, setSelectedShift] = useState([])

  const [shiftOptions, setShiftOptions] = useState([])

  const handleClickSubmit = () => {
    const selectedMachineValue = selectedMachine.map((data, index) => {
      return(data.value)
    })
    const encodedMachineIds = encodeURIComponent(selectedMachineValue.join(","))

    const selectedShiftValue = selectedShift.map((data, index) => {
      return(data.value)
    })

    const encodedShift = encodeURIComponent(selectedShiftValue.join(","))


    axios.get("http://localhost:4000/interuptions?machineID=" + encodedMachineIds + "&shift=" +encodedShift)
    .then(res => {
      
    })
    .catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    const selectedMachineValue = selectedMachine.map((data, index) => {
      return(data["value"])
    })
    const encodedMachineIds = encodeURIComponent(selectedMachineValue.join(","))
    axios.get("http://localhost:4000/interuptions?machineID=" + encodedMachineIds)
      .then(res => {
        const shiftData = res.data
        if (typeof shiftData != 'object'){

        }
        else{
          setShiftOptions(shiftData.map((data, index) => {
            return ( {value: data, label: data} )
          }))
          const shift = selectedShift.map((value, index) => {
            return(
              value["value"]
            )
          })
          const isDifferent = shift.filter((value) => {
            return !shiftData.includes(value)
          })

          const newSelected = selectedShift.filter((value) => !isDifferent.includes(value.value))
          if (isDifferent.length > 0){
            setSelectedShift(newSelected) 
          }
        }
      })
      .catch(error => {
        console.log(error)
      })
  }, [selectedMachine])

  return(
    <div className="InteruptionReport">
      <div className='interuptionsInput'>
        <Select
          isMulti 
          className='interuptionsMultiSelect'
          name='machine'
          options={machineOptions}
          onChange={setSelectedMachine}
        />
        <Select 
          isMulti
          value={selectedShift}
          className='interuptionsMultiSelect'
          name='shift'
          options={shiftOptions}    
          onChange={setSelectedShift}
        />
        <Button variant='contained' onClick={handleClickSubmit}>Find Interuption</Button>
      </div>
    </div>
  )
}

export default InteruptionReport