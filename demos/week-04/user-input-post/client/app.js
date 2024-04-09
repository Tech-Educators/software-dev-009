const form = document.getElementById("messageform");

function handleSubmit(event) {
  event.preventDefault();
  const username = event.target.username.value;
  const message = event.target.message.value;

  console.log({ username: username, message: message });

  // make a request to the server with our form data as the body
  fetch("http://localhost:8080/message", {
    method: "POST",
    body: JSON.stringify({ username: username, message: message }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

form.addEventListener("submit", handleSubmit);
