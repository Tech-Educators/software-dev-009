const messageBtn = document.getElementById("messageBtn");
const message = document.getElementById("message");

function showMessage() {
  message.classList.remove("hide");

  setTimeout(function () {
    message.classList.add("hide");
  }, 5000);
}

messageBtn.addEventListener("click", showMessage);
