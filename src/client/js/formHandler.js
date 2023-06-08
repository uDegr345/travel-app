

async function handleNewTravel(event) {
    const tripDateElement = document.getElementById('tripDate')
    const tripDateValue = tripDateElement.value
    if(Client.isDateInRange(tripDateValue) ==  true) {
        event.preventDefault();

        const [lat, lon] = await Client.getGeolocation()
        const [temp, cityName] = await Client.getWeatherData(lat, lon)
        const imageLink = await Client.getLocationImage(cityName)

        Client.updateTripGrid(imageLink, cityName, tripDateValue, temp)


    } else {
        alert('date is too far in the future (max 16 days)')
    }
}

export {
    handleNewTravel
}