require('dotenv').config();
var path = require('path')
const fetch = require('node-fetch');
const express = require('express')
const cors = require ('cors')

const PORT = process.env.PORT
const meaningCloudBaseUrl = process.env.MC_BASE_URL
const meaningcloudApiKey = process.env.MC_API_KEY
let incomingURL = []


const app = express()
app.use(cors())
app.use(express.json())



app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})


app.post('/add-url', async (req, res) => {
 
    // passing the value of the incoming request to IncomingURL
     incomingURL = req.body.urlValue;
     // loggin it to the console
     console.log(incomingURL)

    const builtApiUrl = `${meaningCloudBaseUrl}?key=${meaningcloudApiKey}&url=${incomingURL}&lang=en`
    console.log("trying to build the api");
    console.log(builtApiUrl);
    try {

        // making the api call
    const response = await fetch(builtApiUrl);

    // converting the response to json (even though the incoming request is already in json but just making sure)
    const responseData = await response.json()

    console.log(responseData)

// creating an object of the desired data
    const dataSentToFrontEnd = {
        text: responseData.sentence_list[0].text,
        confidence : responseData.sentence_list[4].confidence,
        score_tag : responseData.sentence_list[5].score_tag,
        agreement : responseData.sentence_list[6].agreement,
        subjectivity : responseData.agreement,
        irony : responseData.irony
      }

      res.send(dataSentToFrontEnd);
      console.log('done!!, Try another link ')
    } catch {
        console.log("There is an error")
    }
})

  
    
    app.listen(PORT, (error) => {
        console.log(`Server listening on port ${PORT}!`)
    })
    

    module.exports = app