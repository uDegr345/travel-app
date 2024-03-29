
const getGeolocation =  async() => {
  
    const baseUrl =  'https://nominatim.openstreetmap.org/search?'
    const placeName = document.getElementById('tripDestination')

    const fetchUrl = `${baseUrl}city=${placeName.value}&format=json`

    const response = await fetch('/geolocationCall', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "nominatimUrl": fetchUrl})
    })

   const data = await response.json()
   return filterLatAndLang(data)
   

   function filterLatAndLang(res) {
    
   const lat = res[0].lat
   const lon = res[0].lon

   return [lat, lon]

   }
}



export { getGeolocation }
