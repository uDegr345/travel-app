function isDateInRange(pickedDate) {
    const today = new Date();
    const travelDate = new Date(pickedDate)

    const dayDifference  = travelDate - today

    const daysToTravel = Math.ceil(dayDifference / 1000 * 3600 * 24)

    if(daysToTravel<= 16) {
        return true
    } else {
        return false
    }
    
}

export {
    isDateInRange
}
