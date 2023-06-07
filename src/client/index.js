import  { getGeolocation } from './js/nominatim'
import { getWeatherData } from './js/weatherbit'
import { getLocationImage } from './js/pixabay'
import { handleNewTravel } from './js/formHandler'
import { updateTripGrid } from './js/uiHandler'
import { isDateInRange } from './js/dateChecker'
import { calculateDaysToTravel } from './js/dateChecker'

import "./styles/header.scss"
import "./styles/search.scss"
import "./styles/main.scss"
import "./styles/tripCard.scss"
import "./styles/tripGrid.scss"

export {
    getGeolocation,
    getWeatherData,
    getLocationImage,
    handleNewTravel,
    updateTripGrid,
    isDateInRange,
    calculateDaysToTravel
}

