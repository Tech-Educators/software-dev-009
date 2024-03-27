// We've already seen callback functions, lets revist that!
const hilariousBtn = document.getElementById("hilariousBtn");

hilariousBtn.addEventListener("click", function () {
  console.log("poop");
});

// callback functions don't have to be annonymous
function changeBG() {
  document.body.style.backgroundColor = "tomato";
}

const bgBtn = document.getElementById("bg");

bgBtn.addEventListener("click", changeBG);
