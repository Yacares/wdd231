export function highlightCurrentLink() {
  const links = document.querySelectorAll('.nav-bar a');
  let currentPath = window.location.pathname.split("/").pop();
  if (!currentPath) currentPath = "index.html";

  links.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === currentPath);
  });
}
