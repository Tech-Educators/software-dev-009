console.log("Hello world");
console.log(document);

//select one HTML element to manipulate

document.querySelector("h2");
document.querySelector("h1");

const secondTitle = document.getElementById("second-title");

//change the content of my h2
secondTitle.textContent = "Amazing title";

//create a new element
const section = document.querySelector("section");

const newImg = document.createElement("img");
newImg.src =
  "https://static.independent.co.uk/2023/01/19/12/Red%20bird%20of%20paradise.jpg?width=1200&height=900&fit=crop";
newImg.alt = "bird-of-paradise";
newImg.className = "bird-image";
section.appendChild(newImg);

//remove an element
const removedH2 = document.getElementById("remove-please");

removedH2.remove();

//change the background colour
document.body.style.backgroundColor = "aquamarine";
