function updateTripGrid(imageLink, cityName, tripDateValue, temp) {
    createTripCard(imageLink, cityName, tripDateValue, temp)

    //create new tip object
    const trip = {
        imageLink: imageLink,
        cityName: cityName,
        tripDateValue: tripDateValue,
        temp: temp
    }
    
    //update existing trips array or create new one
    let trips = JSON.parse(localStorage.getItem('trips')) || []
    trips.push(trip)

    //put new trips array in local storage
    localStorage.setItem('trips', JSON.stringify(trips))
}

function createTripCard(imageLink, cityName, tripDateValue, temp) {
    const section =  document.getElementById("tripGrid")
    const fragment = new DocumentFragment();

    //create the parent element
    const article = document.createElement('article')
    article.classList.add('tripCard')

    //crate the html for the image
    const tripImgContainer =  document.createElement('p')
    
    const image = document.createElement('img')
    image.setAttribute('src', imageLink)
    image.setAttribute('alt' , `a picture of ${cityName}`)
    image.classList.add('tripImg')

    //create the html for the city name
    const  cityNameElement =  document.createElement('p')
    cityNameElement.innerText = cityName
    cityNameElement.classList.add('name')

    //create the html for the travel date
    const dateElement = document.createElement('p')
    const tripDate = new Date(tripDateValue)
    const daysToTravel = Client.calculateDaysToTravel(tripDate)
    dateElement.innerText = ` The trip is in ${daysToTravel} days`
    dateElement.classList.add('tripDate')

    //create the html for the temperature
    const tempElement = document.createElement('temp')
    tempElement.innerText = `The temperature in your destination will be approximately ${temp} \u2103`
    tempElement.classList.add('tripTemp');

    //append all created elements
    tripImgContainer.appendChild(image)
    article.appendChild(tripImgContainer)
    article.appendChild(cityNameElement)
    article.appendChild(dateElement)
    article.appendChild(tempElement)
    
    fragment.appendChild(article)
    section.appendChild(fragment)
}

function displaySavedTrips() {
 let trips = JSON.parse(localStorage.getItem('trips'));

 if(trips != null){
    trips.forEach(trip => {
        createTripCard(trip.imageLink, trip.cityName, trip.tripDateValue, trip.temp);
     });
 }
 
}

export {
    updateTripGrid, 
    displaySavedTrips
}