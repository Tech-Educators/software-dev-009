console.log("Conditionals fun!");

//conditional structure

// if (condition) {
//   action;
// }

if (5 > 3) {
  console.log("5 is more than 3");
}

if (3 < 1) {
  console.log("3 is less than 1");
} // this is not going to work

let myAge = 15;

if (myAge === 67) {
  console.log("Good job being this old");
} else if (myAge === 30) {
  console.log("Wow, you are soooooooo young");
} else {
  console.log("Sorry, I don't know your age");
}

// myAge === 67 //value and data type
// myAge == 67 // value

//Practical examples
let loggedIn = false;

if (loggedIn) {
  console.log("Welcome!");
} else if (loggedIn === false) {
  console.log("Please, log in");
}

//a simple dark and light theme

let themeAnswer = prompt("Do you prefer white or black theme?");

if (themeAnswer === "white") {
  document.body.style.backgroundColor = themeAnswer;
} else if (themeAnswer === "black") {
  document.body.style.backgroundColor = themeAnswer;
} else {
  document.body.style.backgroundColor = "yellow";
}
