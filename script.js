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

// Interactive 1-to-N / N-to-1 architecture map.
const systemBoard = document.querySelector('.system-board');
const nodeDetails = {
  model: ['Models & Deep Learning', 'Build and evaluate ML and deep learning models, explore Hugging Face Transformers, and bring inference into applications.'],
  agents: ['Agents & Retrieval', 'Combine RAG, knowledge grounding, LangGraph orchestration, controlled tools, and multi-agent workflows with evaluations.'],
  backend: ['Backend & Data', 'Connect Python, SQL, Java, Ruby on Rails and data services behind secure APIs and practical workflows.'],
  frontend: ['Frontend & Product', 'Turn AI capabilities into usable experiences with React, Next.js, TypeScript and responsive interfaces.'],
  cloud: ['Cloud & Delivery', 'Package, deploy and monitor applications using AWS, Azure, GCP, Docker, GitHub Actions, Supabase and Vercel.']
};
function selectNode(node) {
  const buttons = [...document.querySelectorAll('.system-node')];
  buttons.forEach((button, index) => {
    const active = button.dataset.node === node;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
    document.querySelector('.wire-' + index)?.classList.toggle('is-active', active);
  });
  document.getElementById('detail-name').textContent = nodeDetails[node][0];
  document.getElementById('detail-text').textContent = nodeDetails[node][1];
}
document.querySelectorAll('.system-node').forEach(button => {
  button.addEventListener('click', () => selectNode(button.dataset.node));
  button.addEventListener('mouseenter', () => selectNode(button.dataset.node));
  button.addEventListener('focus', () => selectNode(button.dataset.node));
});
document.querySelectorAll('.mode-btn').forEach(button => button.addEventListener('click', () => {
  const mode = button.dataset.mode;
  systemBoard.dataset.mode = mode;
  document.querySelectorAll('.mode-btn').forEach(item => {
    const active = item === button;
    item.classList.toggle('is-selected', active);
    item.setAttribute('aria-pressed', String(active));
  });
  document.getElementById('hub-overline').textContent = mode === 'expand' ? 'START WITH' : 'DELIVER';
  document.getElementById('hub-title').textContent = mode === 'expand' ? 'ONE IDEA' : 'ONE PRODUCT';
  document.getElementById('hub-caption').textContent = mode === 'expand' ? 'A useful AI product' : 'Built from many technologies';
}));
selectNode('model');
