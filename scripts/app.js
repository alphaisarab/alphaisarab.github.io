// Theme toggle
(function(){
  function applyTheme(mode){
    if(mode === "system"){
      document.documentElement.removeAttribute("data-theme")
    } else {
      document.documentElement.setAttribute("data-theme", mode)
    }
  }

  function cycleTheme(mode){
    return mode === "dark" ? "light" : mode === "light" ? "system" : "dark"
  }

  function updateBtn(btn, mode){
    if(!btn) return
    btn.textContent = mode === "dark" ? "🌙" : mode === "light" ? "☀️" : "🖥️"
    btn.title = "Theme: " + mode
  }

  document.addEventListener("DOMContentLoaded", () => {
    let btn = document.getElementById("theme-toggle")
    let current = localStorage.getItem("theme") || "system"

    applyTheme(current)
    updateBtn(btn, current)

    btn.addEventListener("click", () => {
      current = cycleTheme(current)
      localStorage.setItem("theme", current)
      applyTheme(current)
      updateBtn(btn, current)
    })

    // auto adjust on system change
    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    mq.addEventListener("change", () => {
      if(localStorage.getItem("theme") === "system"){
        applyTheme("system")
      }
    })
  })
})()
// Live search and game loader
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("game-grid")
  const search = document.getElementById("search")

  let games = []

  // Load games.json
  fetch("data/games.json")
    .then(res => res.json())
    .then(data => {
      games = data
      renderGames(games)
    })
    .catch(err => console.error("Failed to load games:", err))

  function renderGames(list){
    if(!grid) return
    grid.innerHTML = ""
    if(list.length === 0){
      grid.innerHTML = "<p>No games found</p>"
      return
    }
    list.forEach(game => {
      const card = document.createElement("a")
      card.href = game.url
      card.className = "card"
      card.innerHTML = `
        <img src="${game.cover}" alt="${game.title}" class="card-cover">
        <h3 class="card-title">${game.title}</h3>
      `
      grid.appendChild(card)
    })
  }

  // Live filter
  if(search){
    search.addEventListener("input", e => {
      const query = e.target.value.toLowerCase()
      const filtered = games.filter(g => g.title.toLowerCase().includes(query))
      renderGames(filtered)
    })
  }
})

document.getElementById("logout-btn").addEventListener("click", () => {
  localStorage.removeItem("sessionKey");
  window.location.href = "login.html";
});

