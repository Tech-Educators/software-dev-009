let colour = "tomato";

// this function swqaps the value of colour between tomato and teal
// then it sets the background of the page to be that colour
// is THIS magic?!
function changeBG() {
  if (colour == "tomato") {
    colour = "teal";
  } else {
    colour = "tomato";
  }
  document.body.style.backgroundColor = colour;
}

// lets make that happen every 4 seconds
let changeInterval = setInterval(changeBG, 4000);

// a function that can stop the interval from happening
// stahp
function stop() {
  clearInterval(changeInterval);
}

// staht
function start() {
  changeInterval = setInterval(changeBG, 4000);
}
