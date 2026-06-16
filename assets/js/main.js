
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

document.querySelectorAll('.copy-btn').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const text = btn.getAttribute('data-copy');
    try {
      await navigator.clipboard.writeText(text);
      const old = btn.textContent;
      btn.textContent = 'Copied';
      setTimeout(() => btn.textContent = old, 1500);
    } catch (e) {
      btn.textContent = text;
    }
  });
});

const filterButtons = document.querySelectorAll('.gallery-filters button');
const figures = document.querySelectorAll('.gallery-grid figure');
filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((b) => b.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    figures.forEach((figure) => {
      figure.style.display = filter === 'all' || figure.dataset.category === filter ? '' : 'none';
    });
  });
});
