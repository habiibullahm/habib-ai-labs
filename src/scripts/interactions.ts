function required<T extends HTMLElement = HTMLElement>(selector: string): T {
  const node = document.querySelector<T>(selector);
  if (!node) throw new Error('Missing element: ' + selector);
  return node;
}

const menuToggle = required<HTMLButtonElement>('.menu-toggle');
const nav = required('#site-nav');
const pageMain = required('#main');
const pageFooter = required('.site-footer');
const homeLink = required<HTMLAnchorElement>('.site-header .brand');
document.documentElement.classList.add('has-js');

function setMenu(open: boolean) {
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute(
    'aria-label',
    open ? 'Close navigation' : 'Open navigation',
  );
  nav.classList.toggle('is-open', open);
  document.body.classList.toggle('menu-open', open);
  pageMain.inert = open;
  pageFooter.inert = open;
  homeLink.inert = open;
  if (open) nav.querySelector<HTMLAnchorElement>('a')?.focus();
}

menuToggle.addEventListener('click', () =>
  setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'),
);
nav.addEventListener('click', (event) => {
  if (event.target instanceof Element && event.target.closest('a'))
    setMenu(false);
});
document.addEventListener('keydown', (event) => {
  if (menuToggle.getAttribute('aria-expanded') !== 'true') return;
  if (event.key === 'Escape') {
    setMenu(false);
    menuToggle.focus();
  }
  if (event.key === 'Tab') {
    const focusable = [
      menuToggle,
      ...nav.querySelectorAll<HTMLAnchorElement>('a'),
    ];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});
window.matchMedia('(min-width: 901px)').addEventListener('change', (event) => {
  if (event.matches) setMenu(false);
});

if (
  'IntersectionObserver' in window &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches
) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12 },
  );
  document
    .querySelectorAll('.reveal')
    .forEach((node) => observer.observe(node));
}
