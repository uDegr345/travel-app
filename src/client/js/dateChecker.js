function isDateInRange(pickedDate) {
    const travelDate = new Date(pickedDate)
    const daysToTravel = calculateDaysToTravel(travelDate)

    if(daysToTravel<= 16) {
        return true
    } else {
        return false
    }
    
}
function calculateDaysToTravel(travelDate) {
    const today = new Date();
    const difference  = travelDate.getTime() - today.getTime()

    const testvalue =  Math.ceil(difference / (1000 * 3600 * 24))
    return testvalue
}

export {
    isDateInRange,
    calculateDaysToTravel
}
