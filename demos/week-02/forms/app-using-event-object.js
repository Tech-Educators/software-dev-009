// retrieve the form DOM node
const form = document.getElementById("form");

// our event handler function
function handleSubmit(event) {
  event.preventDefault(); // the default behaviour is for the page to refresh on submit
  console.log(event.target.username.value);
  console.log(event.target.password.value);

  // send email, or check a database, or something like that with the info from the form!
}

// add an event listener to my form
form.addEventListener("submit", handleSubmit);

// n.b.
// all functions that are used as an event handler (the function passed to addEventListener)
// will automatically be passed the event as a parameter
