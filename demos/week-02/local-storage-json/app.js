const counterblue = document.getElementById("counterblue");
const countergreen = document.getElementById("countergreen");
const btnblue = document.getElementById("btnblue");
const btngreen = document.getElementById("btngreen");

let counts = {
  blue: 0,
  green: 0,
};

function increaseBlue() {
  counts.blue++;
  counterblue.textContent = counts.blue;
  const stringifiedCounts = JSON.stringify(counts);
  localStorage.setItem("counts", stringifiedCounts);
}

function increaseGreen() {
  counts.green++;
  countergreen.textContent = counts.green;
  const stringifiedCounts = JSON.stringify(counts);
  localStorage.setItem("counts", stringifiedCounts);
}

btnblue.addEventListener("click", increaseBlue);
btngreen.addEventListener("click", increaseGreen);

function load() {
  const countsString = localStorage.getItem("counts");
  counts = JSON.parse(countsString);

  counterblue.textContent = counts.blue;
  countergreen.textContent = counts.green;
}

// only run load if there is already an item in ls called counts
if (localStorage.getItem("counts")) {
  load();
}
