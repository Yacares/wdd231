
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navList = document.querySelector("nav ul");

  hamburger.addEventListener("click", () => {
    navList.classList.toggle("show");
  });
});
