async function handleNewTravel(event) {
    event.preventDefault();

    const [lat, lon] = await Client.getGeolocation()
    const [temp, cityName] = await Client.getWeatherData(lat, lon)
    const imageLink = await Client.getLocationImage(cityName)

    Client.updateTripGrid(imageLink, cityName, temp)



}

export {
    handleNewTravel
}