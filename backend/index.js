const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

app.get('/', (req, res) => {
  res.json({
    'name': 'Nguyen Le Ngoc Huy',
    'username' : 'neo2001-cross',
    'totalOEE': {
      "oeescore": 80,
      "producedproduct": 9000,
      "workedtime": "3h 4m",
      "productperminute": 61.4
    },
    'devices':[
      {
        "deviceID": 1,
        "selfoeescore": 56,
        "devicename": "Machine 1",
        "producedproduct": 64000,
        "workedtime": "2h 53m",
        "productperminute": 21.2
      },
      {
        "deviceID": 3,
        "selfoeescore": 86,
        "devicename": "Machine 2",
        "producedproduct": 83000,
        "workedtime": "4h 12m",
        "productperminute": 12.2 
      },
      {
        "deviceID": 2,
        "devicename": "Machine 3",
        "selfoeescore": 67,
        "producedproduct": 42000,
        "workedtime": "1h 21m",
        "productperminute": 15.2
      }
    ]
  })
})

app.get('/api/users', (req, res) => {
  res.send("Hello world!")
})

app.listen(4000, function() {
  console.log('The server is running at http://localhost:4000')
})