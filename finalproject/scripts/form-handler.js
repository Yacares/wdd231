export function handleContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', e => {
    e.preventDefault();

    const name = document.getElementById('name')?.value || '';
    const email = document.getElementById('email')?.value || '';
    const message = document.getElementById('message')?.value || '';
    const age = document.getElementById('age')?.value || '';

    const sourceInputs = document.querySelectorAll("input[name='source']:checked");
    const sourceValues = Array.from(sourceInputs).map(input => input.nextSibling.textContent.trim());

    const timestamp = new Date().toLocaleString();

    const params = new URLSearchParams({
      name,
      email,
      message,
      age,
      sources: sourceValues.join(', '),
      timestamp
    });

    window.location.href = 'thankyou.html?' + params.toString();
  });
}

export function populateSubmittedData() {
  const displayDiv = document.getElementById('submitted-data');
  if (!displayDiv) return;

  const params = new URLSearchParams(window.location.search);

  for (const [key, value] of params.entries()) {
    const p = document.createElement('p');
    p.innerHTML = `<strong>${key}:</strong> ${value}`;
    displayDiv.appendChild(p);
  }
}

export function populateSources() {
  const sourcesDiv = document.getElementById("sources");
  if (!sourcesDiv) return;

  const sources = {
    social: "Social Media",
    friend: "Friend Recommendation",
    search: "Search Engine",
    walkby: "Walked by Store",
    other: "Other",
  };

  for (const key in sources) {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.name = "source";
    input.value = key;

    label.appendChild(input);
    label.appendChild(document.createTextNode(` ${sources[key]}`));
    sourcesDiv.appendChild(label);
    sourcesDiv.appendChild(document.createElement("br"));
  }
}
