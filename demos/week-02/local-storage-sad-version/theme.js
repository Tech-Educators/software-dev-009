let currentTheme = "light";
const themeBtn = document.getElementById("themeBtn");

function changeTheme() {
  // remove the theme class
  document.body.classList.remove(currentTheme);

  // set the theme variable to be the OTHER class
  if (currentTheme == "light") {
    currentTheme = "dark";
  } else {
    currentTheme = "light";
  }

  // add the new theme class
  document.body.classList.add(currentTheme);

  // add my theme to local storage
  localStorage.setItem("theme", currentTheme);
}

themeBtn.addEventListener("click", changeTheme);

// check local storage when the pages loads and makes ure the theme is correct
function checkLocalStorage() {
  currentTheme = localStorage.getItem("theme");
  // if theme is dark, add the class
  if (currentTheme == "dark") {
    document.body.classList.add(currentTheme);
  }
}

checkLocalStorage();
