const gamesWrapper = document.getElementById("gamesWrapper");

// get the games from my api
async function getGames() {
  const response = await fetch("http://localhost:8080/games");
  const games = await response.json();
  console.log(games);

  // put the games onto the page
  games.forEach(function (game) {
    // DOM manipulation to put the games onto the html
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const img = document.createElement("img");

    h2.textContent = game.title;
    p.textContent = `Came out in ${game.year}`;
    img.src = game.imgUrl;
    img.alt = game.title;

    gamesWrapper.appendChild(h2);
    gamesWrapper.appendChild(p);
    gamesWrapper.appendChild(img);
  });
}

getGames();
