const links = document.querySelectorAll('.wayfinder a');
const currentPath = window.location.pathname.split("/").pop(); 

links.forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPath) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});
