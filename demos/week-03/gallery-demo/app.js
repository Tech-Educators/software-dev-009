const thumbContainer = document.getElementById("thumb-container");
const displayImage = document.getElementById("display");

// the clue for using arrow keys or left and right buttons
let imageIndex = 0; // this currently does nothing, but is a start

// get some images
const images = [
  {
    url: "https://images.unsplash.com/photo-1590346320751-876ff414c050?q=80&w=2086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Space",
  },
  {
    url: "https://images.unsplash.com/photo-1616529927764-173a543493ee?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Circuit board",
  },
  {
    url: "https://images.unsplash.com/photo-1624806992221-12d8062c35e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Cheese",
  },
];

// put those images onto the page as thumbnails
function createThumbnails() {
  images.forEach(function (image) {
    // create an img DOM node
    const img = document.createElement("img");

    // add the src and alt to the img
    img.src = image.url;
    img.alt = image.alt;

    // put the img onto the page
    thumbContainer.appendChild(img);

    // make it so when we click the image something happens
    img.addEventListener("click", function () {
      createBigImage(image);
    });
  });
}

// display the large image
function createBigImage(image) {
  // clear out the display image div first (by setting it to be nothing)
  displayImage.innerHTML = "";

  // create our img
  const bigImg = document.createElement("img");

  // set the src and alt
  bigImg.src = image.url;
  bigImg.alt = image.alt;

  // add it to the page
  displayImage.appendChild(bigImg);
}

// actually do the things
createThumbnails();
createBigImage(images[0]);
