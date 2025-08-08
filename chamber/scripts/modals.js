
document.querySelectorAll('[data-modal]').forEach(btn => {
  btn.addEventListener('click', e => {

    e.preventDefault();

    const modal = document.getElementById(`modal-${btn.dataset.modal}`);

    if (modal) {
      modal.classList.add('show');
    }
  });
});


document.querySelectorAll('.close').forEach(closeBtn => {
  closeBtn.addEventListener('click', () => {

    closeBtn.closest('.modal').classList.remove('show');
  });
});


window.addEventListener('click', e => {

  if (e.target.classList.contains('modal')) {

    e.target.classList.remove('show');
  }
});
