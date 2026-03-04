// ============================================================
// Cursor.js — Custom animated cursor (desktop only)
// ============================================================

export function initCursor() {
  const cursor    = document.querySelector('.cursor');
  const cursorDot = document.querySelector('.cursor-dot');

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top  = mouseY + 'px';
  });

  (function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    cursor.style.left = cursorX + 'px';
    cursor.style.top  = cursorY + 'px';
    requestAnimationFrame(animateCursor);
  })();

  document.querySelectorAll('.hover-target').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });

  document.querySelectorAll('.view-cursor').forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.classList.add('view'); cursor.classList.remove('hover'); });
    el.addEventListener('mouseleave', () => cursor.classList.remove('view'));
  });
}
