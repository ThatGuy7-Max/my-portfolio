// ============================================================
// Renderer.js — Builds every section's HTML from data.js
// ============================================================

import {
  siteConfig,
  stats,
  achievements,
  skills,
  techStack,
  projects,
  services,
  processSteps,
  faqs,
  marqueeItems,
} from '../utils/data.js';

export function renderSections() {
  const app = document.getElementById('app');
  app.innerHTML = [
    renderHero(),
    renderMarquee(),
    renderAbout(),
    renderSkills(),
    renderWork(),
    renderServices(),
    renderProcess(),
    renderFaq(),
    renderAchievements(),
    renderStats(),
    renderSocial(),
    renderContact(),
    renderFooter(),
  ].join('');
}

// ── Hero ──────────────────────────────────────────────────
function renderHero() {
  return /* html */`
  <section class="hero-section">
    <div class="hero-bg-radial"></div>
    <div class="hero-content">
      <div class="hero-badge" id="hero-tag">
        <span><span class="badge-dot"></span>Available for Projects</span>
      </div>
      <h1 class="hero-title">
        <div class="hero-line"><span id="hero-line1">MICHAEL</span></div>
        <div class="hero-line mt-2"><span class="gradient-text" id="hero-line2">JACE DEV</span></div>
      </h1>
      <div class="overflow-hidden mb-12">
        <p class="hero-subtitle" id="hero-subtitle">
          Full Stack Developer &amp; Creative Technologist based in Nigeria.
          <span class="highlight">6+ years</span> of engineering immersive digital experiences that dominate markets.
        </p>
      </div>
      <div class="hero-ctas">
        <a href="#work" id="hero-cta-primary" class="btn btn-primary magnetic-btn hover-target">
          View Projects <i class="fa-solid fa-arrow-down"></i>
        </a>
        <a href="${siteConfig.whatsapp}" target="_blank" id="hero-cta-secondary" class="btn btn-outline magnetic-btn hover-target">
          <i class="fa-brands fa-whatsapp"></i> Start Conversation
        </a>
      </div>
      <div class="hero-socials" id="hero-social">
        <p>Connect With Me</p>
        <div class="hero-social-links">
          <a href="${siteConfig.twitter}" target="_blank" class="hero-social-link hover-target"><i class="fa-brands fa-x-twitter"></i></a>
          <a href="${siteConfig.tiktok}"  target="_blank" class="hero-social-link hover-target"><i class="fa-brands fa-tiktok"></i></a>
          <a href="mailto:${siteConfig.email}"           class="hero-social-link hover-target"><i class="fa-solid fa-envelope"></i></a>
          <a href="${siteConfig.whatsapp}" target="_blank" class="hero-social-link hover-target"><i class="fa-brands fa-whatsapp"></i></a>
        </div>
      </div>
    </div>
    <div class="scroll-indicator" id="scroll-ind">
      <span>Scroll</span>
      <div class="scroll-line"></div>
    </div>
  </section>`;
}

// ── Marquee ───────────────────────────────────────────────
function renderMarquee() {
  const items = [...marqueeItems, ...marqueeItems]
    .map(i => `<span class="marquee-item"><span>${i}</span><span class="marquee-dot">◆</span></span>`)
    .join('');
  return `<div class="marquee-section"><div class="marquee-track">${items}</div></div>`;
}

// ── About ─────────────────────────────────────────────────
function renderAbout() {
  const statBlocks = stats.map((s, i) => {
    const colors = ['var(--color-accent)', 'var(--color-accent2)', 'var(--color-accent3)'];
    return `
    <div class="stat-item" style="border-color:${colors[i]}">
      <div class="stat-number counter-value" data-target="${parseInt(s.value)}">${parseInt(s.value)}</div>
      <div class="stat-label">${s.label}</div>
    </div>`;
  }).join('');

  return /* html */`
  <section id="about" class="about-section">
    <div class="about-bg"></div>
    <div class="about-grid">
      <div class="about-text">
        <span class="section-label">About Me</span>
        <h2 class="section-title" style="font-size:clamp(2.5rem,5vw,4rem);margin-bottom:2rem">
          CRAFTING DIGITAL<br><span class="gradient-text">EXCELLENCE</span>
        </h2>
        <p>I'm <span class="highlight">Michael</span>, also known as <span class="accent">Jace Dev</span> — a multifaceted creative and full stack developer based in Nigeria. Since <span class="highlight">2019</span>, I've been transforming complex problems into elegant, high-performance digital solutions.</p>
        <p>My approach combines <span class="highlight">technical precision</span> with <span class="highlight">creative intuition</span>. Whether it's building immersive 3D experiences, AI-powered applications, or scalable web platforms, I bring the same dedication to excellence.</p>
        <div class="about-stats">${statBlocks}</div>
        <div class="about-handles">
          <a href="${siteConfig.twitter}" target="_blank"><i class="fa-brands fa-x-twitter"></i> ${siteConfig.twitterHandle}</a>
          <span class="divider">|</span>
          <a href="${siteConfig.tiktok}"  target="_blank"><i class="fa-brands fa-tiktok"></i>  ${siteConfig.tiktokHandle}</a>
        </div>
      </div>
      <div class="about-image-wrapper">
        <div class="about-image">
          <img src="https://i.ibb.co/DD0qQcxh/3190-A108-2213-4-F4-E-AC45-86-F0-C2-DE56-CB.jpg" alt="${siteConfig.name}">
        </div>
        <div class="about-image-badge">
          <div class="badge-icon"><i class="fa-solid fa-code"></i></div>
          <div class="badge-text"><div class="title">Full Stack</div><div class="subtitle">Developer</div></div>
        </div>
        <div class="about-image-socials">
          <a href="${siteConfig.twitter}" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
          <a href="${siteConfig.tiktok}"  target="_blank"><i class="fa-brands fa-tiktok"></i></a>
        </div>
      </div>
    </div>
  </section>`;
}

// ── Skills ────────────────────────────────────────────────
function renderSkills() {
  const renderBars = (list) => list.map(s => `
    <div class="skill-item">
      <div class="skill-header"><span class="skill-name">${s.name}</span><span class="skill-pct">${s.pct}%</span></div>
      <div class="skill-bar"><div class="skill-progress" data-width="${s.pct}"></div></div>
    </div>`).join('');

  const techItems = techStack.map(t => `
    <div class="tech-item hover-target">
      <i class="${t.icon}" style="color:${t.color}"></i>
      <span>${t.label}</span>
    </div>`).join('');

  return /* html */`
  <section id="skills" class="skills-section">
    <div class="skills-header">
      <span class="section-label">Technical Proficiency</span>
      <h2 class="section-title" style="font-size:clamp(2.5rem,6vw,5rem)">SKILLS &amp; <span class="gradient-text">EXPERTISE</span></h2>
      <p style="color:var(--color-muted);max-width:42rem;margin:0 auto;font-size:1.1rem">Technologies and tools I use to bring ideas to life</p>
    </div>
    <div class="skills-grid">
      <div class="skills-group"><h3>Frontend Development</h3>${renderBars(skills.frontend)}</div>
      <div class="skills-group"><h3>Backend &amp; Others</h3>${renderBars(skills.backend)}</div>
    </div>
    <div class="tech-stack">${techItems}</div>
  </section>`;
}

// ── Work / Projects ───────────────────────────────────────
function renderWork() {
  const cards = projects.map(p => /* html */`
    <div class="project-card view-cursor hover-target" style="width:35vw;flex-shrink:0">
      <div class="project-image-wrapper aspect-[4/3] rounded-2xl mb-6 shadow-2xl">
        <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover">
        <div class="project-tag" style="background:${p.tagColor};color:${p.tagTextColor}">${p.tag}</div>
        <div class="project-meta">
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <div class="project-actions">
            <a href="https://wa.me/2348101393153?text=${encodeURIComponent(p.waMsg)}" target="_blank" class="btn-whatsapp project-action-btn" onclick="event.stopPropagation()">
              <i class="fa-brands fa-whatsapp"></i> Discuss
            </a>
            <a href="${p.liveUrl}" target="_blank" class="btn-view project-action-btn" onclick="event.stopPropagation()">
              <i class="fa-solid fa-arrow-up-right"></i> View Live
            </a>
          </div>
        </div>
      </div>
      <div class="project-footer">
        <div class="project-footer-left">
          <h3>${p.title}</h3>
          <p>${p.subtitle}</p>
        </div>
        <div class="project-footer-right">
          <a href="${p.liveUrl}" target="_blank" class="project-view-link" onclick="event.stopPropagation()">
            View Project <i class="fa-solid fa-arrow-up-right"></i>
          </a>
          <a href="https://wa.me/2348101393153?text=${encodeURIComponent(p.waMsg)}" target="_blank" class="project-wa-btn" onclick="event.stopPropagation()">
            <i class="fa-brands fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </div>`).join('');

  return /* html */`
  <section id="work" class="work-section">
    <div class="work-header">
      <div class="work-header-inner">
        <div>
          <span class="section-label">Selected Works</span>
          <h2 class="section-title" style="font-size:clamp(3rem,7vw,7rem)">FEATURED<br><span class="gradient-text">PROJECTS</span></h2>
        </div>
        <div>
          <p>Each project has a <span class="accent">View Project</span> link to preview it live, plus a WhatsApp button to discuss building something similar.</p>
        </div>
      </div>
    </div>
    <div class="horizontal-wrapper">
      <div class="horizontal-section" id="horizontal-scroll">${cards}</div>
    </div>
  </section>`;
}

// ── Services ──────────────────────────────────────────────
function renderServices() {
  const mainCards = services.main.map(s => /* html */`
    <div class="service-card tilt-card rounded-2xl p-10 hover-target">
      <div class="service-icon"><i class="${s.icon}" style="color:${s.iconColor}"></i></div>
      <h3>${s.title}</h3>
      <p class="service-desc">${s.desc}</p>
      <ul class="service-features">
        ${s.features.map(f => `<li><i class="fa-solid fa-check" style="color:${s.iconColor}"></i>${f}</li>`).join('')}
      </ul>
      <div class="service-tags">${s.tags.map(t => `<span class="service-tag">${t}</span>`).join('')}</div>
    </div>`).join('');

  const subCards = services.sub.map(s => /* html */`
    <div class="service-card rounded-2xl p-8 hover-target">
      <i class="${s.icon}" style="color:${s.iconColor};font-size:2rem;display:block;margin-bottom:1rem"></i>
      <h4>${s.title}</h4>
      <p class="service-desc" style="font-size:0.9rem">${s.desc}</p>
    </div>`).join('');

  return /* html */`
  <section id="services" class="services-section">
    <div class="services-header">
      <div>
        <span class="section-label">What I Do</span>
        <h2 class="section-title" style="font-size:clamp(2.5rem,6vw,5rem)">SERVICES &amp;<br><span class="gradient-text">EXPERTISE</span></h2>
      </div>
      <p>End-to-end digital solutions that combine technical excellence with creative innovation. From concept to deployment.</p>
    </div>
    <div class="services-main-grid">${mainCards}</div>
    <div class="services-sub-grid">${subCards}</div>
  </section>`;
}

// ── Process ───────────────────────────────────────────────
function renderProcess() {
  const steps = processSteps.map(s => /* html */`
    <div class="process-step">
      <div class="process-number">${s.num}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <ul class="process-list">
        ${s.items.map(i => `<li><i class="fa-solid fa-arrow-right"></i>${i}</li>`).join('')}
      </ul>
    </div>`).join('');

  return /* html */`
  <section id="process" class="process-section">
    <div class="process-header">
      <span class="section-label">How I Work</span>
      <h2 class="section-title" style="font-size:clamp(2.5rem,6vw,5rem)">MY <span class="gradient-text">PROCESS</span></h2>
      <p style="color:var(--color-muted);max-width:42rem;margin:1rem auto 0;font-size:1.1rem">A streamlined approach to delivering exceptional digital products</p>
    </div>
    <div class="process-grid">${steps}</div>
  </section>`;
}

// ── FAQ ───────────────────────────────────────────────────
function renderFaq() {
  const items = faqs.map(f => /* html */`
    <div class="faq-item">
      <div class="faq-question">
        <h3>${f.q}</h3>
        <i class="fa-solid fa-chevron-down faq-icon"></i>
      </div>
      <div class="faq-answer"><p>${f.a}</p></div>
    </div>`).join('');

  return /* html */`
  <section id="faq" class="faq-section">
    <div class="faq-header">
      <span class="section-label">FAQ</span>
      <h2 class="section-title" style="font-size:clamp(2.5rem,6vw,5rem)">COMMON <span class="gradient-text">QUESTIONS</span></h2>
    </div>
    <div class="faq-container">${items}</div>
  </section>`;
}

// ── Achievements ──────────────────────────────────────────
function renderAchievements() {
  const cards = achievements.map(a => /* html */`
    <div class="achievement-card rounded-2xl text-center">
      <i class="${a.icon}" style="color:${a.color}"></i>
      <div class="num">${a.value}</div>
      <div class="lbl">${a.label}</div>
    </div>`).join('');

  return `<section class="achievements-section"><div class="achievements-grid">${cards}</div></section>`;
}

// ── Stats ─────────────────────────────────────────────────
function renderStats() {
  const statsHtml = [
    { v: '96+', l: 'Projects'  },
    { v: '6+',  l: 'Years Exp' },
    { v: '87+', l: 'Clients'   },
    { v: '24/7',l: 'Support'   },
  ].map(s => /* html */`
    <div>
      <div class="stat-big ${s.v !== '24/7' ? 'counter-value' : ''}" ${s.v !== '24/7' ? `data-target="${parseInt(s.v)}"` : ''}>${s.v}</div>
      <div class="stat-big-label">${s.l}</div>
    </div>`).join('');

  return `<section class="stats-section"><div class="stats-grid">${statsHtml}</div></section>`;
}

// ── Social ────────────────────────────────────────────────
function renderSocial() {
  return /* html */`
  <section id="social" class="social-section">
    <div class="social-bg"></div>
    <div class="social-content">
      <span class="section-label">Let's Connect</span>
      <h2 class="section-title" style="font-size:clamp(2.5rem,6vw,5rem);margin-bottom:1.5rem">FOLLOW MY <span class="gradient-text">JOURNEY</span></h2>
      <p>Join me on social media for daily insights, behind-the-scenes of projects, and tech tips. Let's build a community of creators.</p>
      <div class="social-cards">
        <a href="${siteConfig.twitter}" target="_blank" class="social-card hover-target">
          <div class="social-icon"><i class="fa-brands fa-x-twitter"></i></div>
          <div class="social-info">
            <h3>X / Twitter</h3>
            <p>${siteConfig.twitterHandle}</p>
            <span class="cta">Follow for tech insights →</span>
          </div>
        </a>
        <a href="${siteConfig.tiktok}" target="_blank" class="social-card hover-target">
          <div class="social-icon"><i class="fa-brands fa-tiktok"></i></div>
          <div class="social-info">
            <h3>TikTok</h3>
            <p>${siteConfig.tiktokHandle}</p>
            <span class="cta">Creative content &amp; tips →</span>
          </div>
        </a>
      </div>
      <div class="social-links-row">
        <a href="mailto:${siteConfig.email}"><i class="fa-solid fa-envelope"></i> ${siteConfig.email}</a>
        <span class="social-divider">|</span>
        <a href="${siteConfig.whatsapp}" target="_blank"><i class="fa-brands fa-whatsapp"></i> ${siteConfig.phone}</a>
      </div>
    </div>
  </section>`;
}

// ── Contact ───────────────────────────────────────────────
function renderContact() {
  return /* html */`
  <section id="contact" class="contact-section">
    <div class="contact-bg"></div>
    <div class="contact-content">
      <span class="section-label">Get In Touch</span>
      <h2 class="glitch" data-text="LET'S BUILD">LET'S BUILD</h2>
      <p>Have a project in mind? Let's create something <span class="highlight">extraordinary</span> together.</p>
      <div class="contact-ctas">
        <a href="${siteConfig.whatsapp}" target="_blank" class="btn btn-primary magnetic-btn hover-target" style="font-size:1.1rem;padding:1.25rem 2.5rem">
          <i class="fa-brands fa-whatsapp"></i> WhatsApp Me
        </a>
        <a href="mailto:${siteConfig.email}" class="btn btn-outline magnetic-btn hover-target" style="font-size:1.1rem;padding:1.25rem 2.5rem">
          <i class="fa-solid fa-envelope"></i> Send Email
        </a>
      </div>
      <div class="contact-details">
        <div class="contact-detail">
          <div class="label"><i class="fa-solid fa-location-dot"></i> Location</div>
          <div class="value">${siteConfig.location}</div>
          <div class="sub">${siteConfig.locationDetail}</div>
        </div>
        <div class="contact-detail">
          <div class="label"><i class="fa-solid fa-envelope"></i> Email</div>
          <div class="value">${siteConfig.email}</div>
          <div class="sub">Reply within 24hrs</div>
        </div>
        <div class="contact-detail">
          <div class="label"><i class="fa-solid fa-phone"></i> Phone</div>
          <div class="value">${siteConfig.phone}</div>
          <div class="sub">Available 24/7</div>
        </div>
      </div>
    </div>
  </section>`;
}

// ── Footer ────────────────────────────────────────────────
function renderFooter() {
  return /* html */`
  <footer class="footer">
    <div class="footer-bg"></div>
    <div class="footer-inner">
      <div class="footer-top">
        <a href="#" class="footer-logo">JACE<span class="accent-dot">.</span></a>
        <div class="footer-icons">
          <a href="${siteConfig.twitter}"  target="_blank" class="footer-icon hover-target"><i class="fa-brands fa-x-twitter"></i></a>
          <a href="${siteConfig.tiktok}"   target="_blank" class="footer-icon hover-target"><i class="fa-brands fa-tiktok"></i></a>
          <a href="mailto:${siteConfig.email}"             class="footer-icon hover-target"><i class="fa-solid fa-envelope"></i></a>
          <a href="${siteConfig.whatsapp}" target="_blank" class="footer-icon hover-target"><i class="fa-brands fa-whatsapp"></i></a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© ${siteConfig.copyright} Jace Dev. All rights reserved.</p>
        <div class="footer-meta">
          <span>${siteConfig.phone}</span>
          <span class="sep"></span>
          <span>${siteConfig.location}</span>
          <span class="sep"></span>
          <span class="accent">6+ Years Experience</span>
        </div>
      </div>
    </div>
  </footer>`;
}
