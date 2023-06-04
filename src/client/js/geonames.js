

const baseUrl = 'http://api.geonames.org/searchJSON?q=';



async function getGeolocation(event) {
    event.preventDefault();
    const placeName = document.getElementById('tripDestination')

    console.log(baseUrl)
    console.log(placeName.value)

    const response = await fetch('/geolocationCall', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "placeName": placeName.value, "url" : baseUrl})
    })
    const responseData = await response.json()
    console.log(responseData)

    

    
    


   
}



export { getGeolocation }