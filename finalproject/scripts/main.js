import { initHamburger, populateAgeSelect, trackVisits } from './center-pizza.js';
import { handleContactForm, populateSubmittedData, populateSources } from './form-handler.js';
import { highlightCurrentLink } from './wayfinder.js';
import { loadGallery } from './gallery.js';

document.addEventListener('DOMContentLoaded', () => {
    initHamburger();
    populateAgeSelect();
    trackVisits();
    highlightCurrentLink();
    handleContactForm();
    populateSubmittedData();
    populateSources();

    const galleryGrid = document.getElementById('gallery-grid');
    if (galleryGrid) {
        loadGallery();
    }
});
