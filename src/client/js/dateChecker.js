function isDateInRange(pickedDate) {
    const travelDate = new Date(pickedDate)
    console.log(travelDate)
    const daysToTravel = calculateDaysToTravel(travelDate)

    console.log(daysToTravel)
    if(daysToTravel<= 16) {
        return true
    } else {
        return false
    }
    
}
function calculateDaysToTravel(travelDate) {
    const today = new Date();
    console.log(today)
    const difference  = travelDate.getTime() - today.getTime()

    console.log(difference)
    const testvalue =  Math.ceil(difference / (1000 * 3600 * 24))
    console.log(testvalue)
    return testvalue
}

export {
    isDateInRange,
    calculateDaysToTravel
}
