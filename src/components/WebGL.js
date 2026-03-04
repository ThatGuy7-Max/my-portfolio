// ============================================================
// WebGL.js — Three.js particle field background
// ============================================================

export function initWebGL(isTouchDevice) {
  const canvas   = document.getElementById('webgl-canvas');
  const scene    = new THREE.Scene();
  const camera   = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: !isTouchDevice });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, isTouchDevice ? 1 : 2));

  // Store refs for resize handler in main.js
  canvas.__camera   = camera;
  canvas.__renderer = renderer;

  // Particles
  const count  = isTouchDevice ? 40 : 80;
  const pos    = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) pos[i] = (Math.random() - 0.5) * 15;

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(pos, 3));

  const material = new THREE.PointsMaterial({
    size:        0.025,
    color:       0x00f0ff,
    transparent: true,
    opacity:     0.6,
    blending:    THREE.AdditiveBlending,
  });

  const mesh = new THREE.Points(geometry, material);
  scene.add(mesh);
  camera.position.z = 5;

  let mouseX = 0;
  let mouseY = 0;

  if (!isTouchDevice) {
    document.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX / window.innerWidth)  * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    });
  }

  (function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.y += 0.0008;
    mesh.rotation.x += 0.0003;
    if (!isTouchDevice) {
      mesh.rotation.y += 0.03 * (mouseX * 0.5 - mesh.rotation.y);
      mesh.rotation.x += 0.03 * (mouseY * 0.5 - mesh.rotation.x);
    }
    renderer.render(scene, camera);
  })();
}
