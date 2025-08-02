fetch("data/members.json")
  .then(res => res.json())
  .then(data => {
    const eligible = data.filter(m => m.membership === 2 || m.membership === 3);
    const shuffled = eligible.sort(() => 0.5 - Math.random()).slice(0, 3);

    const directory = document.querySelector(".business-directory");
    directory.innerHTML = "";

    shuffled.forEach(member => {
      const card = document.createElement("div");
      card.classList.add("business-card");

      card.innerHTML = `
        <h3>${member.name}</h3>
        <p><strong>Membership:</strong> ${member.membership === 3 ? "Gold" : "Silver"}</p>
        <img src="images/${member.image}" alt="${member.name} logo">
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <p><a href="${member.website}" target="_blank">${member.website}</a></p>
      `;

      directory.appendChild(card);
    });
  })
  .catch(err => console.error("Members fetch error:", err));