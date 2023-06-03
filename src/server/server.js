const fetch = require('node-fetch');

// Require Express to run server and routes
const express = require('express');


// Start up an instance of app
const app =  express();

/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

//dotenv for api
const dotenv = require('dotenv')

dotenv.config()


// Setup Server
const port = 3000;

const server = app.listen(port, listening);
function listening(){
     console.log("the server is running"); 
     console.log(`running on port ${port}`);
}


// Routes
app.post('/geolocationCall', async (req,res) => {
    console.log('debug')

    const user  = process.env.GEONAMES_USER
    const placeName = req.body.placeName
    const baseUrl =  req.body.url
    
    const fetchUrl = `${baseUrl}${placeName}&maxRows=10&username=${user}`

    console.log(fetchUrl)

    await fetch(fetchUrl)
    .then(data => res.send(data))
    .catch(error => console.log('error fetching geolocation', error))



});

app.post('/postData', (request, response) => {
    let newData = request.body;
    projectData.temperature = newData.temperature;
    projectData.date = newData.date;
    projectData.userResponse = newData.userResponse;;
    return projectData;
});