const h1 = document.querySelector("h1");
const button = document.querySelector("button");
let count = 0; // this is our state

function increaseCount() {
  count++;
  h1.textContent = count;
}

button.addEventListener("click", increaseCount);
