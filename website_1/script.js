document.querySelector('#year').textContent = new Date().getFullYear();

const button = document.querySelector('.menu-button');
const nav = document.querySelector('#site-nav');

button.addEventListener('click', () => {
  const isOpen = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('is-open', !isOpen);
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  button.setAttribute('aria-expanded', 'false');
  nav.classList.remove('is-open');
}));
