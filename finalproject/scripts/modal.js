export function setupModal() {
    const modal = document.getElementById("pizza-modal");
    if (!modal) {
        console.warn("Modal not found in DOM.");
        return { openModal: () => {} };
    }

    const modalImg = document.getElementById("modal-img");
    const modalName = document.getElementById("modal-name");
    const modalDescription = document.getElementById("modal-description");
    const modalPortion = document.getElementById("modal-portion");
    const closeBtn = modal.querySelector(".close");

    if (!modalImg || !modalName || !modalDescription || !modalPortion || !closeBtn) {
        console.warn("Some modal elements are missing.");
        return { openModal: () => {} };
    }

    function openModal(item) {
        modalImg.src = item.src;
        modalImg.alt = item.alt;
        modalName.textContent = item.name;
        modalDescription.textContent = item.description;
        modalPortion.textContent = `Portion: ${item.portion}`;
        modal.style.display = "block";
    }

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", e => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    return { openModal };
}
