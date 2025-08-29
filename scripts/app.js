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
