const express = require('express');
const url = require("url")
const app = express();
const cors = require('cors');
const querystring = require('querystring')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    'name': 'Nguyen Le Ngoc Huy',
    'username' : 'neo2001-cross',
    'totalOEE': {
      "oeescore": 80,
      "producedproduct": 9000,
      "workedtime": "3h 4m",
      "productperminute": 61.4,
      "totalAvailability": Math.floor(Math.random() * 100),
      "totalPerformance":  Math.floor(Math.random() * 100),
      "totalQuality":  Math.floor(Math.random() * 100),
    },
    'devicesList': [
      '123123',
      '123345',
      '123456'
    ],
    'devices':[
      {
        "deviceID": 1,
        "selfoeescore": 56,
        "devicename": "Machine 1",
        "producedproduct": 64000,
        "workedtime": "2h 53m",
        "productperminute": 21.2,
        "deviceAvailability": Math.floor(Math.random() * 100),
        "devicePerformance":  Math.floor(Math.random() * 100),
        "deviceQuality":  Math.floor(Math.random() * 100),
      },
      {
        "deviceID": 3,
        "selfoeescore": 86,
        "devicename": "Machine 2",
        "producedproduct": 83000,
        "workedtime": "4h 12m",
        "productperminute": 12.2, 
        "deviceAvailability": Math.floor(Math.random() * 100),
        "devicePerformance":  Math.floor(Math.random() * 100),
        "deviceQuality":  Math.floor(Math.random() * 100),
      },
      {
        "deviceID": 2,
        "devicename": "Machine 3",
        "selfoeescore": 67,
        "producedproduct": 42000,
        "workedtime": "1h 21m",
        "productperminute": 15.2,
        "deviceAvailability": Math.floor(Math.random() * 100),
        "devicePerformance":  Math.floor(Math.random() * 100),
        "deviceQuality":  Math.floor(Math.random() * 100),
      },
    ]
  })
})

app.get('/api/machine', (req, res) => {
  const machineList = {
    '123123' :{
        "deviceID": 1,
        "selfoeescore": 56,
        "devicename": "Machine 1",
        "producedproduct": 64000,
        "workedtime": "2h 53m",
        "productperminute": 21.2
    },
    '123345': {
        "deviceID": 3,
        "selfoeescore": 86,
        "devicename": "Machine 2",
        "producedproduct": 83000,
        "workedtime": "4h 12m",
        "productperminute": 12.2 
    },
    '123456':{
        "deviceID": 2,
        "devicename": "Machine 3",
        "selfoeescore": 67,
        "producedproduct": 42000,
        "workedtime": "1h 21m",
        "productperminute": 15.2
    }
  }
  const objectURL = url.parse(req.url, true)
  const query = objectURL.query
  res.json(machineList[query["machineID"]])

})

app.get('/machine', (req,res) => {
  const machineInformation = [
    {
      machineID: 123123,
      added: "23/02/2023",
      machineName: 'Assembly machine'
    },
    {
      machineID: 123345,
      added: "23/02/2023",
      machineName: 'CNC machine'
    },
    {
      machineID: 123456,
      added: "23/02/2023",
      machineName: 'Laser cutting machine'
    },
  ]
  res.send(machineInformation)
})

app.post("/machine", (req,res) => {
  console.log(req.body.machineID)
  res.send("Ok! It's fine")
})

app.get('/api/report', (req, res) => {
  const report = {
    123123: {
      shift23: {
        production: {
          "11:23": Math.floor(Math.random() *10000),
          "11:24": Math.floor(Math.random() *10000),
          "11:25": Math.floor(Math.random() *10000),
          "11:26": Math.floor(Math.random() *10000),
          "11:27": Math.floor(Math.random() *10000),
          "11:28": Math.floor(Math.random() *10000),
          "11:29": Math.floor(Math.random() *10000),
          "11:30": Math.floor(Math.random() *10000),
          "11:31": Math.floor(Math.random() *10000),
          "11:32": Math.floor(Math.random() *10000),
          "11:33": Math.floor(Math.random() *10000)
        },
        shiftOEE: {
          shiftoeescore: Math.floor(Math.random()  * 100),
          shiftAvailability: Math.floor(Math.random() * 100),
          shiftPerformance: Math.floor(Math.random() * 100),
          shiftQuality: Math.floor(Math.random() * 100),
          runningTime: "415:34:04",
          downTime: "218:09:49",
          runCounter: Math.floor(Math.random() * 1000),
          stopCounter: Math.floor(Math.random() * 1000) 
        }
      },
      shift24: {
        "10:13": Math.floor(Math.random() *10000),
        "10:14": Math.floor(Math.random() *10000),
        "10:15": Math.floor(Math.random() *10000),
        "10:16": Math.floor(Math.random() *10000),
        "10:17": Math.floor(Math.random() *10000),
        "10:18": Math.floor(Math.random() *10000),
        "10:19": Math.floor(Math.random() *10000),
        "10:20": Math.floor(Math.random() *10000),
        "10:21": Math.floor(Math.random() *10000),
        "10:22": Math.floor(Math.random() *10000),
        "10:23": Math.floor(Math.random() *10000)
      }
    },
    123345: {
      shift23: {
        "11:23": Math.floor(Math.random() *10000),
        "11:24": Math.floor(Math.random() *10000),
        "11:25": Math.floor(Math.random() *10000),
        "11:26": Math.floor(Math.random() *10000),
        "11:27": Math.floor(Math.random() *10000),
        "11:28": Math.floor(Math.random() *10000),
        "11:29": Math.floor(Math.random() *10000),
        "11:30": Math.floor(Math.random() *10000),
        "11:31": Math.floor(Math.random() *10000),
        "11:32": Math.floor(Math.random() *10000),
        "11:33": Math.floor(Math.random() *10000)
      },
      shift25: {
        "09:13": Math.floor(Math.random() *10000),
        "09:14": Math.floor(Math.random() *10000),
        "09:15": Math.floor(Math.random() *10000),
        "09:16": Math.floor(Math.random() *10000),
        "09:17": Math.floor(Math.random() *10000),
        "09:18": Math.floor(Math.random() *10000),
        "09:19": Math.floor(Math.random() *10000),
        "09:20": Math.floor(Math.random() *10000),
        "09:21": Math.floor(Math.random() *10000),
        "09:22": Math.floor(Math.random() *10000),
        "09:23": Math.floor(Math.random() *10000)
      }
    },
  }
  const objectURL = url.parse(req.url, true)
  const query = objectURL.query
  // console.log(query)
  if (query["machineID"]){
    if(query["shift"]){
      res.json(report[query["machineID"]][query["shift"]])
    }
    else{
      res.json(report[query["machineID"]])
    }
  }
  else{
    res.send("ConnectOK")
  }
})

app.get("/interuptions", (req, res) => {
  const interuptions = {
    123123: {
      shift23: {
        interuptions: ["Go to lunch", "Component stuck", "Overheat", "Broken part"],
        frequency: {
          "Go to lunch": 23,
          "Component stuck": 41,
          "Overheat": 21,
          "Broken part": 12
        },
        duration: {
          "Go to lunch": "1h 15m",
          "Component stuck": "5m",
          "Overheat": 12,
          "Broken part": 1
        }
      },
      shift24: {
        interuptions: ["Go to lunch", "Component stuck", "Overheat", "Broken part"],
        frequency: {
          "Go to lunch": 23,
          "Component stuck": 41,
          "Overheat": 21,
          "Broken part": 12
        },
        duration: {
          "Go to lunch": "1h 15m",
          "Component stuck": "5m",
          "Overheat": 12,
          "Broken part": 1
        }
      }
    },
    123345: {
      shift23:{
        interuptions: ["Go to lunch", "Component stuck", "Overheat", "Broken part"],
        frequency: {
          "Go to lunch": 23,
          "Component stuck": 41,
          "Overheat": 21,
          "Broken part": 12
        },
        duration: {
          "Go to lunch": "1h 15m",
          "Component stuck": "5m",
          "Overheat": 12,
          "Broken part": 1
        }
      },
      shift25: {
        interuptions: ["Go to lunch", "Component stuck", "Overheat", "Broken part"],
        frequency: {
          "Go to lunch": 23,
          "Component stuck": 41,
          "Overheat": 21,
          "Broken part": 12
        },
        duration: {
          "Go to lunch": "1h 15m",
          "Component stuck": "5m",
          "Overheat": 12,
          "Broken part": 1
        }
      }
    }
  }
  const objectURL = url.parse(req.url, true)
  const query = objectURL.query
  const machineIds = query.machineID.split(",")
  const shiftid = []
  
  if (machineIds[0] != ''){
    machineIds.forEach((data) => {
      shiftid.push(...Object.keys(interuptions[data]))
    })
  }

  if (machineIds[0] === ''){
    res.send("Url connected OK!!!!")
  }
  else{
    res.send(shiftid)
  }
})

app.listen(4000, function() {
  console.log('The server is running at http://localhost:4000')
})