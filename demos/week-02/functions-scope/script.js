// global variables
let counter = 0;
const username = "Manny the Steadfast";

// username = "Tim the fickle"; // this line will break my code because we can't change a const(ant)
counter++; // we CAN however change a let

function increaseCounter() {
  counter++; // increase the counter by 1
  console.log(counter);
}

// global variables can be access ANYWHERE
// inside a function? Check!
// in an if statement? Check!
// just loose in the page? Check!

// scoped variables
if (1 > 0) {
  let scopedToIf = "I am only available inside the if statement";
  console.log(scopedToIf);
}

// console.log(scopedToIf); // this breaks the page because we can't see the scopedToIf variable here

// function variables
const sum = 100; // here i am defining a GLOBAL variable call sum
function add(a, b) {
  const sum = a + b; // here i am defining a locally scoped variable called sum inside the function
  console.log(sum);
}

add(10, 2);
console.log(sum);

function usernameFunction() {
  const username = "This is a brand new variable";
  console.log(username);
}

usernameFunction();
console.log(username); // this goes and gets the global variable because it is OUTSIDE the function
