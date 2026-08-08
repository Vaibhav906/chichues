const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links'); // or whatever your mobile menu container is

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
});
