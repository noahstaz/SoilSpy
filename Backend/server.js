// packages needed 
const express = require('express')
const request = require('request')
const bodyparser = require('body-parser')
const cors = require("cors")
const { all } = require('proxy-addr')
const { type } = require('os')
const { json } = require('body-parser')

/** 
 * needs to send soil info to frontend 
 * overlay the RMS 
 * Land Location field 
 */

// init app 
const app = express()
app.use(cors())  
app.use(express.static("public"))
app.use(bodyparser.json())

// index
app.get('/', (req, res) => { 
  res.status(200).send('Soil Server')
})

// route to pull soil info (requires longitude and latitude), calculate soil score, and send data to frontend 
app.post('/soil', (req, res) => { 
   var options = { 
    method: 'GET',
    url: `https://api.ambeedata.com/soil/latest/by-lat-lng?by-lat-lng`,
    qs:{lat: `${req.body.latitude}`, lng: `${req.body.longitude}`}, 
    headers: {
        'x-api-key': '8ca2bf18d51da867ef2d3cbca381e1832514d4c010d0be4d9f5f811fe9c2b8e5',
        'Content-type': 'application/json'
    }
  }

  // get info from API, calculate rating 
  request(options, function (error, response, body) {
	  if (error) throw new Error(error);
      console.log("Response recieved. \n")
      jsonBody = JSON.parse(body)
      const temp = jsonBody.data[0].soil_temperature
      const moisture = jsonBody.data[0].soil_moisture
      var score = 5 
      if (temp<18){
        var tempRating = "too cold"
        score -= 1 
      }
      else if (temp>24){
        var tempRating = "too hot"
        score -= 1
      }
      else{
        var tempRating = "optimal"
      }
      if (moisture>40){
        var moistureRating = "too wet"
        score -= 1
      }
      else if (moisture>= 20 && moisture<=30){
        var moistureRating = "somewhat dry"
        score -= 1
      }
      else if (moisture<20){
        var moistureRating = "very dry"
        score -= 2
      }
      else{
        var moistureRating = "optimal"
      }
      soilData = {
        'temp' : temp,
        'moisture' : moisture,
        'tempRaing' : tempRating,
        'moistureRating' : moistureRating,
        'score' : score 
      }
      console.log("soildata: ", soilData)
      // send data to frontend  
      res.status(200).send(soilData)
  })
})

// start server
app.listen(process.env.PORT || 3000, () => {
  console.log(`server running...`)
})