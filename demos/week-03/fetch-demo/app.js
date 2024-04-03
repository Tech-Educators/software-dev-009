//get data from API
async function getFoxes() {
  //use fetch() to get data
  const response = await fetch("https://randomfox.ca/floof");
  console.log(response);

  //parse the response
  const data = await response.json();
  console.log(data);

  //(optional) data wrangling
  const wrangledData = data.image;
  console.log(wrangledData);
  return wrangledData;
}

function displayFoxes(wrangledDataParameter) {
  const foxImg = document.getElementById("fox-img");
  foxImg.src = wrangledDataParameter;
  foxImg.alt = "image of happy foxes";
}

async function addFoxesToPage() {
  //getFoxes contains our data
  const wrangledDataArgument = await getFoxes();
  displayFoxes(wrangledDataArgument);
}
addFoxesToPage();
