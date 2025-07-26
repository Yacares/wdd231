const container = document.getElementById("members-container");
const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");

async function getMembers() {
  try {
    const response = await fetch("data/members.json");
    const data = await response.json();
    displayMembers(data);
  } catch (error) {
    console.error("Error fetching members:", error);
  }
}

function getMembershipLevelText(level) {
  switch (level) {
    case 1:
      return "Member";
    case 2:
      return "Silver";
    case 3:
      return "Gold";
    default:
      return "Unknown";
  }
}

function displayMembers(members) {
  container.innerHTML = "";
  members.forEach(member => {
    const card = document.createElement("section");

  
    let levelClass = "";
    switch (member.membership) {
      case 3:
        levelClass = "member-gold";
        break;
      case 2:
        levelClass = "member-silver";
        break;
      default:
        levelClass = "member-basic";
    }
    card.classList.add(levelClass);

    
    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo">
      <h3>${member.name}</h3>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><strong>Membership:</strong> ${getMembershipLevelText(member.membership)}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;

    container.appendChild(card);
  });
}


gridBtn.addEventListener("click", () => {
  container.classList.add("grid");
  container.classList.remove("list");
});

listBtn.addEventListener("click", () => {
  container.classList.add("list");
  container.classList.remove("grid");
});


getMembers();
