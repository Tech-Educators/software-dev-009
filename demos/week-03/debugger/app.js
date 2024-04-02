const timsFavouriteNumber = 82;

function countToTen() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
    debugger; // this will stop the code running here and open the debugger in your browser dev tools
  }
}

// countToTen();

function add(a, b) {
  let sum = a + b;
  console.log(sum);
  debugger;
}

function whileMyConsoleGentlyCounts() {
  let counter = 1;

  while (counter < 100) {
    console.log(counter);
    counter++;
    debugger;
  }
}

whileMyConsoleGentlyCounts();
