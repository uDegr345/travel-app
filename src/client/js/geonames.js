
const baseUrl =  'https://nominatim.openstreetmap.org/search?'



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

   const data = await response.json()
   console.log(data)
   const [lat, lon] = filterLatAndLang(data)
   
   Client.getWeatherData(lat, lon)

   

   function filterLatAndLang(res) {
    
   const lat = res[0].lat
   const lon = res[0].lon
      console.log(`lat is :${lat}`)
   console.log(`lon is : ${lon}`)

   return [lat, lon]

   }

    

    
    


   
}



export { getGeolocation }
