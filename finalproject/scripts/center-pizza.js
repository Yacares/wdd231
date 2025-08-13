export function initHamburger() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("show");
      hamburger.classList.toggle("open");
    });
  } else {
    console.warn("Hamburger menu or nav-menu not found.");
  }
}

export function populateAgeSelect() {
  const ageSelect = document.getElementById("age");
  if (!ageSelect) return;

  const ages = Array.from({ length: 83 }, (_, i) => i + 18);

  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "-- Select your age --";
  placeholder.disabled = true;
  placeholder.selected = true;
  ageSelect.appendChild(placeholder);

  ages.forEach(age => {
    const option = document.createElement("option");
    option.value = age;
    option.textContent = age;
    ageSelect.appendChild(option);
  });
}

export function trackVisits() {
  let visitCount = localStorage.getItem("visitCount");
  visitCount = visitCount ? Number(visitCount) : 0;
  visitCount++;
  localStorage.setItem("visitCount", visitCount);

  const footer = document.querySelector("footer");
  if (footer) {
    const visitCounterDiv = document.createElement("div");
    visitCounterDiv.style.color = "white";
    visitCounterDiv.style.fontSize = "0.8rem";
    visitCounterDiv.style.marginTop = "0.5rem";
    visitCounterDiv.textContent = `You have visited this site ${visitCount} time${visitCount > 1 ? "s" : ""}.`;
    footer.appendChild(visitCounterDiv);
  }
}
