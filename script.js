// ================= PLAYERS =================

const players = [
  {
    name: "MS Dhoni",
    role: "Wicketkeeper-Batter",
    type: "wk",
    jersey: 7,
    image: "images/dhoni.jpg"
  },
  {
    name: "Ruturaj Gaikwad",
    role: "Batter",
    type: "batsman",
    jersey: 31,
    image: "images/ruturaj.webp"
  },
  {
    name: "Ravindra Jadeja",
    role: "All-rounder",
    type: "allrounder",
    jersey: 8,
    image: "images/jadeja.jpg"
  },
  {
    name: "Noor Ahmad",
    role: "Bowler",
    type: "bowler",
    jersey: 61,
    image: "images/noor.png"
  }
];

function renderPlayers(filter = "all") {
  const grid = document.getElementById("players-grid");

  const filtered =
    filter === "all"
      ? players
      : players.filter(p => p.type === filter);

  grid.innerHTML = filtered.map(player => `
    <div class="player-card">
      <img src="${player.image}" class="player-img" alt="${player.name}">
      <h3 class="text-xl font-bold text-yellow-400 mt-3">${player.name}</h3>
      <p>${player.role}</p>
      <p>Jersey: #${player.jersey}</p>
    </div>
  `).join("");
}

function filterPlayers(type) {
  renderPlayers(type);
}

// ================= MATCHES =================

const matches = [
  {
    opponent: "Mumbai Indians",
    venue: "Wankhede Stadium",
    date: "Mar 25, 2026"
  },
  {
    opponent: "Royal Challengers Bangalore",
    venue: "Chinnaswamy Stadium",
    date: "Mar 28, 2026"
  }
];

function renderMatches() {
  const container = document.getElementById("schedule-container");

  container.innerHTML = matches.map(match => `
    <div class="match-card">
      <h3 class="text-yellow-400 font-bold">
        CSK vs ${match.opponent}
      </h3>
      <p>${match.venue}</p>
      <p>${match.date}</p>
    </div>
  `).join("");
}

// Initial Load
renderPlayers();
renderMatches();