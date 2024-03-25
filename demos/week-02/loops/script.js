// LOOPS
// while
let counter = 0;

while (counter < 10) {
  console.log("WHILE: " + counter);
  counter++; // VERY IMPORTANT to give the while loop a way to finish
}

// for
// for(instansiation, condition, afterthought)
for (let i = 0; i < 10; i++) {
  console.log("FOR: ", i);
}

// for loops and arrays
const staff = [
  "Tim",
  "Manny",
  "Davina",
  "Sam",
  "Joe",
  "Jez",
  "Coreliad",
  "Akshat",
];

for (let i = 0; i < staff.length; i++) {
  console.log("Hello", staff[i]);
}

// these ones are not the main two, but they are useful (you may never use the below ones, and that is ok)

// do while
// a do while loop will always run ONCE before checking the condition
let doCounter = 10;
do {
  console.log("DOWHILE: " + doCounter);
  doCounter++;
} while (doCounter < 10);

// for of
for (const person of staff) {
  console.log("for of:", person);
}
