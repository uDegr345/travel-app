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

app.listen(port, listening);
function listening(){
     console.log("the server is running"); 
     console.log(`running on port ${port}`);
}


app.get('/test', (req, res) => {
    try{
        res.status(200).send()
    } catch(err) {
        res.status(500).send()
    }
})

// Routes
app.post('/geolocationCall', async (req,res) => {
    
    const nominatimUrl = req.body.nominatimUrl

    await fetch(nominatimUrl)
    .then(response => response.json())
    .then(data => res.send(data))
    .catch(error => console.log('error fetching geolocation', error))



});

app.post('/weatherbitCall', async (req,res) => {

    const weatherbitUrl  = req.body.weatherbitUrl

    await fetch(weatherbitUrl)
    .then(response => response.json())
    .then(data => res.send(data))
    .catch(error => console.log('error fetching weatherbit data', error))



})

app.post('/pixabayCall', async (req,res) => {

    const pixabayUrl  = req.body.pixabayUrl

    await fetch(pixabayUrl)
    .then(response => response.json())
    .then(data => res.send(data))
    .catch(error => console.log('error fetching pixabay data', error))



})

module.exports = app
