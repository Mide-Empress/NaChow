const suggestBtn = document.getElementById("suggestBtn");
const suggestionArea = document.getElementById("suggestionArea");
const historyList = document.getElementById("historyList");
const favouritesList = document.getElementById("favouritesList");
const quoteBox = document.getElementById("quoteBox");

// ==== FOOD LOGIC ====
function getRandomFood() {
  return foods[Math.floor(Math.random() * foods.length)];
}

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

// ==== HISTORY ====
function addToHistory(food) {
  const history = JSON.parse(localStorage.getItem("history")) || [];
  history.unshift(food);
  localStorage.setItem("history", JSON.stringify(history));
  renderHistory();
}

function renderHistory() {
  const history = JSON.parse(localStorage.getItem("history")) || [];
  historyList.innerHTML = history.map(item => `<li>${item}</li>`).join("");
}

// ==== FAVOURITES ====
function addToFavourites(food) {
  const favs = JSON.parse(localStorage.getItem("favourites")) || [];
  if (!favs.includes(food)) {
    favs.push(food);
    localStorage.setItem("favourites", JSON.stringify(favs));
    renderFavourites();
  }
}

function renderFavourites() {
  const favs = JSON.parse(localStorage.getItem("favourites")) || [];
  favouritesList.innerHTML = favs.map(item => `<li>${item}</li>`).join("");
}

// ==== SUGGEST MEAL EVENT ====
if (suggestBtn) {
  suggestBtn.addEventListener("click", () => {
    playSound();
    const food = getRandomFood().name;
    const quote = getRandomQuote();
    suggestionArea.innerHTML = `
      <h3>🍽️ You should eat: <span>${food}</span></h3>
      <button onclick="addToFavourites('${food}')">❤️ Add to Favourites</button>
    `;
    quoteBox.textContent = quote;
    addToHistory(food);
  });
}

// ==== DARK MODE ====
const darkToggle = document.getElementById("darkToggle");
if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("darkMode", document.body.classList.contains("dark"));
  });

  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
  }
}

// ==== LOGOUT FUNCTION ====
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("naChowLoggedIn");
    alert("You have been logged out.");
    window.location.href = "NaChow login.html";
  });
}

// ==== PROTECT INDEX PAGE ====
if (!localStorage.getItem("naChowLoggedIn")) {
  if (window.location.pathname.includes("index.html")) {
    window.location.href = "NaChow login.html";
  }
}

// ==== LOAD ON START ====
renderFavourites();
renderHistory();
