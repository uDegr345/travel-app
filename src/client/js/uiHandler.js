function updateTripGrid(imageLink, cityName, temp) {
createTripCard(imageLink, cityName, temp)


}

function createTripCard(imageLink, cityName, temp) {
    const section =  document.getElementById("tripGrid")
    const fragment = new DocumentFragment();

    //create the parent element
    const article = document.createElement('article')
    article.classList.add('tripCard')

    
    const tripImgContainer =  document.createElement('p')
    
    const image = document.createElement('img')
    image.setAttribute('src', imageLink)
    image.setAttribute('alt' , `a picture of ${cityName}`)
    image.classList.add('tripImg')

    const  cityNameElement =  document.createElement('p')
    cityNameElement.innerText = cityName
    cityNameElement.classList.add('name')

    const tempElement = document.createElement('temp')
    tempElement.innerText = temp
    tempElement.classList.add('tripTemp');

    tripImgContainer.appendChild(image)
    article.appendChild(tripImgContainer)
    article.appendChild(cityNameElement)
    article.appendChild(tempElement)

    fragment.appendChild(article)
    section.appendChild(fragment)

    





// Create a new parent element
const parentElement = document.createElement('div');

// Create three new child elements
const childElement1 = document.createElement('p');
const childElement2 = document.createElement('p');
const childElement3 = document.createElement('p');

// Append the three child elements to the parent element
parentElement.appendChild(childElement1);
parentElement.appendChild(childElement2);
parentElement.appendChild(childElement3);

// Append the parent element to the DocumentFragment
fragment.appendChild(parentElement);


}

export {
    updateTripGrid
}