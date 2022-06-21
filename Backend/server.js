// packages needed 
const express = require('express')
const request = require('request')
const bodyparser = require('body-parser')
const cors = require("cors")
const { all } = require('proxy-addr')
const { type } = require('os')

/**
 * needs route to get soil data
 * needs route to get long and lat from frontend 
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

// route to pull soil info (requires longitude and latitude)
app.get('/soil', (req, res) => {
   res.send('soil data')
   var options = { 
    method: 'GET',
    url: `https://api.ambeedata.com/soil/latest/by-lat-lng?by-lat-lng`,
    qs:{lat: '49.438420', lng: '-106.596238'}, 
    headers: {
        'x-api-key': '8ca2bf18d51da867ef2d3cbca381e1832514d4c010d0be4d9f5f811fe9c2b8e5',
        'Content-type': 'application/json'
    }
  }

  request(options, function (error, response, body) {
	  if (error) throw new Error(error);
      console.log("Response recieved. \n")
      jsonBody = JSON.parse(body)
      console.log("temperature: ", jsonBody.data[0].soil_temperature)
      console.log("temperature: ", jsonBody.data[0].soil_moisture)
  })
})

/*
// Route to match games with teams that user has chosen, then sends list of those games to client
app.get('/games', (req, res) => {
  var options = { 
    method: 'GET',
    url: 'https://api-nba-v1.p.rapidapi.com/games/seasonYear/2020',
    headers: {
      'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
      'x-rapidapi-key': '71b806f988msh6c00084b722b3a3p17923cjsnee5cd7d8c0af',
      useQueryString: true
    }
  }
    // get all games played in 2020 from API
  request(options, function (error, response, body) {
	  if (error) throw new Error(error);
    console.log("Response recieved. \n")
    JsonOutput = JSON.parse(body)
    allGames = JsonOutput.api.games
    
    // get teams chosen by user 1 in database 
    mongo.db("floarDb").collection("floarCollection").findOne({userid: "1"}, function(err, result){
      if (err) throw err
      userTeams = result.teams
      // make array of games that include teams from user 
      const filteredGames = allGames.filter(game => {
        return userTeams.includes(game.hTeam.teamId)
      })
      console.log(filteredGames)
      res.status(200).send(filteredGames)
    })
  })
})
*/ 

// start server
app.listen(process.env.PORT || 3000, () => {
  console.log(`server running...`)
})