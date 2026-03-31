// Smooth scroll to section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Book destination
function bookDestination(destination) {
  alert(`Great choice! You selected ${destination}. We'll be adding the booking system soon!`);
}

// Submit contact form
function submitForm(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const feedback = document.getElementById('form-feedback');

  // Validation
  if (!name || !email || !message) {
    feedback.textContent = '❌ Please fill in all fields!';
    feedback.classList.add('error');
    feedback.classList.remove('success');
    return;
  }

  if (!isValidEmail(email)) {
    feedback.textContent = '❌ Please enter a valid email address!';
    feedback.classList.add('error');
    feedback.classList.remove('success');
    return;
  }

  // Success message
  feedback.textContent = '✅ Message sent successfully! We will contact you soon.';
  feedback.classList.add('success');
  feedback.classList.remove('error');

  // Clear form
  document.querySelector('.contact-form').reset();

  // Clear feedback after 5 seconds
  setTimeout(() => {
    feedback.textContent = '';
    feedback.classList.remove('success', 'error');
  }, 5000);
}

// Email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Add scroll animation for cards on page load
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });
});