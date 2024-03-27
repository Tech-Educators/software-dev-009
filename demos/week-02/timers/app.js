// TIMEOUTS
// basic setTimeout that runs something after 5 seconds
setTimeout(function () {}, 5000); // this does nothing because the function is empty

// here is an actual example
setTimeout(function () {
  console.log("I have waited for this moment.");
}, 5000);

// an example where we write the function first
function threaten() {
  console.log("Long have I waited...");
}

setTimeout(threaten, 6000);

// INTERVALS
setInterval(function () {}, 1000); // this does nothing because the function is empty

// here is an actual example
setInterval(function () {
  console.log("echo");
}, 1000);

// an example where we write the function first
function buttIn() {
  console.log("Yes but...");
}

setInterval(buttIn, 500);
