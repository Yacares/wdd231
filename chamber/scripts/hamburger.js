document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.querySelector('nav.wayfinder'); // << CAMBIADO

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show'); // << ahora sí aplica al correcto
  });
});
