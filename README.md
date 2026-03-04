# Jace Dev Portfolio

**Michael Jace** — Full Stack Developer & Creative Technologist  
Built with Vanilla JS (ES Modules) + Vite + GSAP + Three.js + Lenis

---

## Tech Stack

| Layer       | Technology                  |
|-------------|-----------------------------|
| Build tool  | Vite 5                      |
| Language    | JavaScript (ES Modules)     |
| Styles      | Custom CSS (no framework)   |
| Animations  | GSAP 3 + ScrollTrigger      |
| 3D / WebGL  | Three.js r128               |
| Scroll      | Lenis 1.1                   |
| Icons       | Font Awesome 6              |
| Fonts       | Google Fonts (Space Grotesk + Syne) |

---

## Project Structure

```
jace-portfolio/
├── index.html                 ← Entry HTML (shell only)
├── vite.config.js             ← Vite configuration
├── package.json
│
└── src/
    ├── main.js                ← Entry point — boots all modules
    │
    ├── utils/
    │   └── data.js            ← All site content (edit this to update the site)
    │
    ├── styles/
    │   ├── base.css           ← Reset, CSS variables, utilities
    │   ├── components.css     ← All component styles
    │   └── animations.css     ← @keyframes definitions
    │
    └── components/
        ├── Renderer.js        ← Builds all HTML sections from data.js
        ├── Loader.js          ← Animated intro loader
        ├── Nav.js             ← Mobile menu
        ├── Cursor.js          ← Custom cursor (desktop)
        ├── WebGL.js           ← Three.js particle background
        ├── Lenis.js           ← Smooth scroll init
        ├── Animations.js      ← GSAP scroll animations
        └── Interactions.js    ← Tilt, magnetic buttons, FAQ
```

---

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server (opens at http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Updating Content

All site content lives in **`src/utils/data.js`** — projects, services, skills, personal info, social links. Edit that file and the whole site updates automatically. No HTML digging needed.

---

## Customising Styles

CSS variables are defined in `src/styles/base.css` under `:root`. Change colours, fonts and spacing there:

```css
:root {
  --color-accent:  #00f0ff;   /* Cyan — primary accent */
  --color-accent2: #7000ff;   /* Purple */
  --color-accent3: #ff006e;   /* Pink */
}
```
