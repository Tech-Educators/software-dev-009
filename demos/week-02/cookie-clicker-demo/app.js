const cookieBtn = document.getElementById("cookieBtn");
const upgradeBtn = document.getElementById("upgradeBtn");
const cookiesSpan = document.getElementById("cookiesSpan");
const cpsSpan = document.getElementById("cpsSpan");

// default starting value for stats
const stats = {
  cookieCount: 0,
  cps: 0, // cookies per second
};

// if local storage exists, update stats with it
const storageStats = JSON.parse(localStorage.getItem("stats"));

if (storageStats !== null) {
  stats.cookieCount = storageStats.cookieCount;
  stats.cps = storageStats.cps;
  updatePage();
}

function buyCookie() {
  stats.cookieCount++;
  updatePage();
  updateStorage();
}

function buyUpgrade() {
  stats.cps++; // shorthand for "add 1"
  stats.cookieCount -= 10; // shorthand for "take away 10"
  updatePage();
  updateStorage();
}

function updatePage() {
  cookiesSpan.textContent = stats.cookieCount;
  cpsSpan.textContent = stats.cps;
}

function updateStorage() {
  localStorage.setItem("stats", JSON.stringify(stats));
}

cookieBtn.addEventListener("click", buyCookie);
upgradeBtn.addEventListener("click", buyUpgrade);

// start the timer than will run every second FOREVER
setInterval(function () {
  stats.cookieCount += stats.cps;
  updatePage();
  updateStorage();
}, 1000);
