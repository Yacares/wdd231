const toggle = document.getElementById("darkModeToggle");
const darkToggleIcon = document.getElementById("darkToggleIcon");


function applyDarkModeFromStorage() {
  const darkMode = localStorage.getItem("darkMode");

  if (darkMode === "enabled") {
    document.body.classList.add("dark-mode");
    darkToggleIcon.src = "images/dark-theme-white.svg";
  } else {
    document.body.classList.remove("dark-mode");
    darkToggleIcon.src = "images/dark-theme.svg";
  }
}


function toggleDarkMode() {
  const isDark = document.body.classList.toggle("dark-mode");

  if (isDark) {
    localStorage.setItem("darkMode", "enabled");
    darkToggleIcon.src = "images/dark-theme-white.svg";
  } else {
    localStorage.setItem("darkMode", "disabled");
    darkToggleIcon.src = "images/dark-theme.svg";
  }
}


document.addEventListener("DOMContentLoaded", () => {
  applyDarkModeFromStorage();
  toggle.addEventListener("click", toggleDarkMode);
});
