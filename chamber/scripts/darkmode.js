const toggle = document.getElementById("darkModeToggle");
const darkToggleIcon = document.getElementById("darkToggleIcon");

// Function to apply dark mode from localStorage and set the correct icon
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

// Function to toggle dark mode and update localStorage + icon
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

// Set initial state on page load
document.addEventListener("DOMContentLoaded", () => {
  applyDarkModeFromStorage();
  toggle.addEventListener("click", toggleDarkMode);
});
