console.log("Hello World");

//user interaction

// prompt("What's your name?");
// alert("Careful!");

//events
const myButton = document.querySelector("button");

//the user clicks the button
//our JS listens to that event
//an action happens

myButton.addEventListener("click", function () {
  console.log("Button clicks");
});

//button to add 1

const counterButton = document.getElementById("counter-button");
let count = 0;
counterButton.addEventListener("click", function () {
  count += 1;
  //   console.log((count = count + 1));
  //   console.log(count++);
  counterButton.textContent = `Clicks: ${count}`;
});

//background colour button
const backgroundButton = document.getElementById("bg-colour-button");

backgroundButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "yellow";
});
console.dir(document);
