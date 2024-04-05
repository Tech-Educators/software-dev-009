//1 select my form and image container

const form = document.getElementById('form')
const imgContainer = document.getElementById('img-container')

let images = [];
let currentImgIndex = 0;

form.addEventListener('submit', function(event) {
    event.preventDefault()
    search(event.target.input.value)
})

async function search(query) {
    // got my response object from the API 
    let response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=LMIpfPZ7y7PH_GClYLw0JwRMTXqiIgSPDC61Xp2sV84`)
    // console.log(response)
    let data = await response.json()
    images = data.results
    createImage(images[currentImgIndex])
    // fetch
}

function createImage(image) {
    imgContainer.innerHTML = ''
    console.log(image)
    let imgTag = document.createElement('img')
    imgTag.src = image.urls.regular
    imgTag.alt = image.alt_description

    imgContainer.appendChild(imgTag)
}

// make a button
// add event listner
// check images length greater > 0
// changeCurrentImage index = Math.floor(Math.random() * imagesarray.length)
// createImages(images[currentImageIndex])