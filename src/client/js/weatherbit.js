

const getWeatherData =  async(lat, lon) => {
    const baseUrl = "https://api.weatherbit.io/v2.0/forecast/daily" 
    

    const fetchUrl = `${baseUrl}&lat=${lat}&lon=${lon}&key=${process.env.WEATHERBIT_API_KEY}`

    const response = await fetch('/geolocationCall', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "lat": lat, "lon": lon, "url" : baseUrl})
    })


}

export { getWeatherData }