window.onload = function() {

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
  
        const timestampField = document.getElementById('timestamp');
        if (timestampField) {
            const now = new Date();
            timestampField.value = now.toLocaleString();
        }
    }


    const displayDiv = document.getElementById('submitted-data');
    if (displayDiv) {
       
        const params = new URLSearchParams(window.location.search);
        const requiredFields = {
            'First Name': params.get('given-name'), 
            'Last Name': params.get('family-name'),
            'Email Address': params.get('email'),
            'Mobile Phone': params.get('phone'),
            'Business/Organization Name': params.get('organization'), 
            'Membership Level': params.get('membership-level'), 
            'Timestamp': params.get('timestamp')
        };

        for (const [key, value] of Object.entries(requiredFields)) {
            if (value) {
                const p = document.createElement('p');
                p.innerHTML = `<strong>${key}:</strong> ${decodeURIComponent(value)}`;
                displayDiv.appendChild(p);
            }
        }
    }
};

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