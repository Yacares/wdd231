
document.addEventListener("DOMContentLoaded", () => {
    const currentyear = document.getElementById("currentyear");
    const year = new Date().getFullYear();
    currentyear.textContent = `© ${year} 💻 Lautaro Rodriguez 💻 Argentina`;

    const lastModified = document.getElementById("lastmodified");
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
    lastModified.style.fontSize = "0.8rem";
});

