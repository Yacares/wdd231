document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.querySelector('nav.wayfinder ul');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
});
