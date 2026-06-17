import './style.css';
import { profile, sections } from './data.ts';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
    throw new Error('Root element not found');
}

const profilePhoto = new URL('../img/Captura de pantalla 2026-06-17 122237.png', import.meta.url).href;

type SectionItem = {
    title: string;
    meta?: string;
    details?: string;
    bullets?: string[];
    links?: { href: string; label: string }[];
    category?: string;
    source?: string;
    date?: string;
    href?: string;
};

function createElement<K extends keyof HTMLElementTagNameMap>(tag: K, options: { className?: string; text?: string; html?: string; href?: string; target?: string; rel?: string; } = {}) {
    const element = document.createElement(tag);
    if (options.className) element.className = options.className;
    if (options.text) element.textContent = options.text;
    if (options.html) element.innerHTML = options.html;
    if (options.href && element instanceof HTMLAnchorElement) element.href = options.href;
    if (options.target && element instanceof HTMLAnchorElement) element.target = options.target;
    if (options.rel && element instanceof HTMLAnchorElement) element.rel = options.rel;
    return element;
}

function buildHeader() {
    const hero = createElement('section', { className: 'hero' });
    hero.innerHTML = `
    <div class="hero-copy">
      <p class="eyebrow">Correspondent · Europe & Latin America · China</p>
      <h1>${profile.name}</h1>
      <div class="hero-image-inline">
        <img src="${profilePhoto}" alt="${profile.name}" />
      </div>
      <p class="subtitle">${profile.tagline}</p>
      <div class="contact-lines">
        <a href="mailto:${profile.contact.email}">${profile.contact.email}</a>
        <span>•</span>
        <a href="tel:${profile.contact.phone}">${profile.contact.phone}</a>
        <span>•</span>
        <a href="${profile.contact.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
      </div>
    </div>
    <div class="hero-profile">
      <div class="hero-summary">
        <h2>About me</h2>
        <p>${profile.about}</p>
      </div>
    </div>
  `;
    return hero;
}

function buildQuickFacts() {
    const facts = createElement('section', { className: 'quick-facts' });
    facts.innerHTML = `
    <div>
      <h3>Languages</h3>
      <ul>
        ${profile.languages.map((lang) => `<li><strong>${lang.name}</strong> — ${lang.level}</li>`).join('')}
      </ul>
    </div>
    <div>
      <h3>Skills</h3>
      <ul>
        ${profile.skills.map((skill) => `<li>${skill}</li>`).join('')}
      </ul>
    </div>
  `;
    return facts;
}

function buildPortfolioSection(section: typeof sections[number]) {
    const sectionEl = createElement('section', { className: 'section-card portfolio-section' });
    sectionEl.innerHTML = `
    <div class="section-header">
      <div>
        <h2>${section.title}</h2>
        ${section.subtitle ? `<p class="section-subtitle">${section.subtitle}</p>` : ''}
      </div>
      <div class="filter-row">
        <button type="button" class="filter-button active" data-filter="All">All</button>
        <button type="button" class="filter-button" data-filter="Reporting">Reporting</button>
        <button type="button" class="filter-button" data-filter="Fixer">Fixer</button>
      </div>
    </div>
    <div class="portfolio-grid">
      ${section.items
            .map((item) => `
        <article class="portfolio-card" data-category="${item.category}">
          <div class="portfolio-card-header">
            <span class="portfolio-tag">${item.category}</span>
            <span class="portfolio-date">${item.date}</span>
          </div>
          <h3>${item.title}</h3>
          <p class="portfolio-source">${item.source}</p>
          <a class="portfolio-link" href="${item.href}" target="_blank" rel="noopener">Read article</a>
        </article>
      `)
            .join('')}
    </div>
  `;

    sectionEl.querySelectorAll<HTMLButtonElement>('.filter-button').forEach((button) => {
        button.addEventListener('click', () => {
            sectionEl.querySelectorAll<HTMLButtonElement>('.filter-button').forEach((btn) => btn.classList.remove('active'));
            button.classList.add('active');
            const filter = button.dataset.filter;
            sectionEl.querySelectorAll<HTMLElement>('.portfolio-card').forEach((card) => {
                const category = card.dataset.category;
                card.style.display = filter === 'All' || category === filter ? 'grid' : 'none';
            });
        });
    });

    return sectionEl;
}

function buildSection(section: typeof sections[number]) {
    if (section.view === 'portfolio') {
        return buildPortfolioSection(section);
    }

    const sectionEl = createElement('section', { className: 'section-card' });
    sectionEl.innerHTML = `
    <div class="section-header">
      <h2>${section.title}</h2>
      ${section.subtitle ? `<p class="section-subtitle">${section.subtitle}</p>` : ''}
    </div>
    ${section.items
            .map((item) => {
                const details = item.details ? `<p class="item-details">${item.details}</p>` : '';
                const bulletList = item.bullets?.length
                    ? `<ul>${item.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}</ul>`
                    : '';
                const links = item.links?.length
                    ? `<div class="item-links">${item.links
                        .map((link) => `<a href="${link.href}" target="_blank" rel="noopener">${link.label}</a>`)
                        .join('')}</div>`
                    : '';

                return `
          <article class="item-card">
            <div class="item-headline">
              <h3>${item.title}</h3>
              ${item.meta ? `<span class="item-meta">${item.meta}</span>` : ''}
            </div>
            ${details}
            ${bulletList}
            ${links}
          </article>
        `;
            })
            .join('')}
  `;
    return sectionEl;
}

app.appendChild(buildHeader());
app.appendChild(buildQuickFacts());
sections.forEach((section) => app.appendChild(buildSection(section)));
