// ============================================================
// MAIN.JS — Entry point. Imports and initialises all modules.
// ============================================================

import { initLoader }       from './components/Loader.js';
import { initNav }          from './components/Nav.js';
import { initCursor }       from './components/Cursor.js';
import { initWebGL }        from './components/WebGL.js';
import { initLenis }        from './components/Lenis.js';
import { renderSections }   from './components/Renderer.js';
import { initAnimations }   from './components/Animations.js';
import { initInteractions } from './components/Interactions.js';

const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;

// 1. Render all HTML sections into #app
renderSections();

// 2. Boot non-visual systems immediately
initWebGL(isTouchDevice);
initNav();
if (!isTouchDevice) initCursor();

// 3. Wait for full page load then fire loader → animations
window.addEventListener('load', () => {
  initLoader(() => {
    const lenis = initLenis(isTouchDevice);
    initAnimations(isTouchDevice, lenis);
    initInteractions(isTouchDevice);
  });
});

// 4. Handle resize
window.addEventListener('resize', () => {
  const canvas = document.getElementById('webgl-canvas');
  if (canvas.__camera && canvas.__renderer) {
    canvas.__camera.aspect = window.innerWidth / window.innerHeight;
    canvas.__camera.updateProjectionMatrix();
    canvas.__renderer.setSize(window.innerWidth, window.innerHeight);
  }
});
