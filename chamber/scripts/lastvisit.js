document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('visit-modal');
  const messageElement = document.getElementById('modal-message');
  const closeBtn = document.querySelector('.close-modal-btn');
  const today = Date.now();
  const lastVisit = localStorage.getItem('lastVisit');
  const oneDay = 1000 * 60 * 60 * 24;

  if (!lastVisit) {
    messageElement.textContent = 'Welcome! Let us know if you have any questions.';
    modal.style.display = 'flex';
  } else {
    const lastVisitDate = parseInt(lastVisit, 10);

    const timeDifference = today - lastVisitDate;
    const daysDifference = Math.floor(timeDifference / oneDay);

    if (daysDifference < 1) {
      messageElement.textContent = 'Back so soon! Awesome!';
    } else {
      const dayText = daysDifference === 1 ? 'day' : 'days';
      messageElement.textContent = `You last visited ${daysDifference} ${dayText} ago.`;
    }

    modal.style.display = 'flex';
  }

  localStorage.setItem('lastVisit', today);

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});