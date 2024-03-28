const counterP = document.getElementById("counter");
const btn = document.getElementById("btn");
let count = 0;

function increaseCount() {
  // increase count by 1
  count++;

  // update the counterP with the new coutn value
  counterP.textContent = count;

  // put the count value into localStorage
  localStorage.setItem("count", count);
}

// run increaeCount when we click the button
btn.addEventListener("click", increaseCount);

// on page load, retrieve the count from localStorage
function load() {
  // check if they already have count in LS
  if (localStorage.getItem("count") != null) {
    // get the current count value from local storage
    count = localStorage.getItem("count");

    // update the counterP with the new coutn value
    counterP.textContent = localStorage.getItem("count");
  }
}

load();
