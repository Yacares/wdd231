
document.addEventListener('DOMContentLoaded', () => {
  
  const jsonUrl = 'data/locations.json';
  const cardContainer = document.getElementById('card-container');

  
  async function getPlaceData() {
    try {
      const response = await fetch(jsonUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      displayPlaces(data);
    } catch (error) {
      console.error('Could not fetch place data:', error);
      
      cardContainer.innerHTML = '<p>Error loading content. Please try again later.</p>';
    }
  }

  
  const displayPlaces = (places) => {
    places.forEach((place) => {
      
      const card = document.createElement('div');
      card.classList.add('interest-card');

      
      const title = document.createElement('h2');
      title.textContent = place.name;
      card.appendChild(title);

      const figure = document.createElement('figure');
      const image = document.createElement('img');
      image.src = place.image_url;
      image.alt = place.name;
      image.setAttribute('loading', 'lazy');
      figure.appendChild(image);
      card.appendChild(figure);

      const address = document.createElement('address');
      address.textContent = place.address;
      card.appendChild(address);

      const description = document.createElement('p');
      description.textContent = place.description;
      card.appendChild(description);

      const button = document.createElement('button');
      button.textContent = 'Learn More';

      button.addEventListener('click', () => {
        alert(`You clicked 'Learn More' for ${place.name}!`);
      });
      card.appendChild(button);

      cardContainer.appendChild(card);
    });
  };

  getPlaceData();
});