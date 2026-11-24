const navToggle = document.querySelector('.menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
navToggle?.addEventListener('click', () => {
  const open = mobileNav.hasAttribute('hidden');
  mobileNav.toggleAttribute('hidden', !open);
  navToggle.setAttribute('aria-expanded', String(open));
});
mobileNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mobileNav.setAttribute('hidden', '');
  navToggle.setAttribute('aria-expanded', 'false');
}));
const filters = document.querySelectorAll('.filter');
const projectCards = document.querySelectorAll('.project-card');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(other => { other.classList.toggle('active', other === button); other.setAttribute('aria-pressed', String(other === button)); });
  const selected = button.dataset.filter;
  projectCards.forEach(card => { card.hidden = selected !== 'all' && !card.dataset.cats.split(' ').includes(selected); });
}));
document.getElementById('year').textContent = new Date().getFullYear();
