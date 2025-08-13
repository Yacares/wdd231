import { setupModal } from './modal.js';

export async function loadGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    const modal = setupModal();

    try {
        const response = await fetch('data/gallery.json');
        const data = await response.json();
        const galleryItems = data.slice(0, 15);

        galleryItems.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('gallery-card');

            card.innerHTML = `
                <h3 class="pizza-name">${item.name}</h3>
                <img src="${item.src}" alt="${item.alt}" loading="lazy">
                <p class="description">${item.description}</p>
                <p class="portion"><strong>Portion:</strong> ${item.portion}</p>
            `;

            card.querySelector('img').addEventListener('click', () => {
                modal.openModal(item);
            });

            galleryGrid.appendChild(card);
        });

    } catch (error) {
        console.error('Error loading gallery:', error);
        galleryGrid.innerHTML = '<p>Sorry, the gallery could not load at this time.</p>';
    }
}
