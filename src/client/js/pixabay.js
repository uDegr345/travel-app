const getLocationImage =  async(location) => {

    const baseUrl = "https://pixabay.com/api/?"

    const fetchUrl = `${baseUrl}key=${process.env.PIXABAY_API_KEY}&q=${location}&image_type=photo`

    const response = await fetch('/pixabayCall', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"pixabayUrl" : fetchUrl})
    })
    const res = await response.json()
    console.log(res)
    const webformat = res.hits[0].webformatURL;
    return webformat
}

export {
    getLocationImage
}