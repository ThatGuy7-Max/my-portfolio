// ============================================================
// Nav.js — Mobile menu open / close
// ============================================================

export function initNav() {
  const menuBtn    = document.getElementById('menu-btn');
  const closeMenu  = document.getElementById('close-menu');
  const mobileMenu = document.getElementById('mobile-menu');

  const open  = () => { mobileMenu.classList.add('active');    document.body.style.overflow = 'hidden'; };
  const close = () => { mobileMenu.classList.remove('active'); document.body.style.overflow = '';       };

  menuBtn.addEventListener('click', open);
  closeMenu.addEventListener('click', close);
  mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
}
