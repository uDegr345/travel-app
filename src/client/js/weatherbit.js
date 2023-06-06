

const getWeatherData =  async(lat, lon) => {
    const baseUrl = "https://api.weatherbit.io/v2.0/forecast/daily?" 
    

    const fetchUrl = `${baseUrl}lat=${lat}&lon=${lon}&key=${process.env.WEATHERBIT_API_KEY}`

    const response = await fetch('/weatherbitCall', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"weatherbitUrl" : fetchUrl})
    })
    const res = await response.json()
    console.log(res)

    const temp = res.data[0].temp
    const cityName = res.city_name

    return [temp,cityName]



}

export { getWeatherData }