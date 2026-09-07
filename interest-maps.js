let activeCognitionTopic = 'memory';
  let activeCognitionQuestion = 0;
  let activeCognitionSection = 'question';
  let lastInterestMapTrigger = null;

  function renderCognitionMap() {
    const panel = document.querySelector('[data-interest-panel="cognition"]');
    if (!panel) return;

    panel.innerHTML = `
      <div class="cognition-map-shell">
        <div class="map-intro cognition-intro">
          <p>These questions started with things I noticed in everyday life. I have collected the papers that helped me think about them, along with what I am still trying to understand.</p>
          <details class="cognition-common-thread">
            <summary>Why these questions interest me</summary>
            <p>
        I keep wondering why some experiences leave a lasting mark while others disappear almost immediately. Reading these papers has made me more careful about what a neural recording can explain. I am especially interested in experiments that change a small part of a circuit and then test what happens to memory or behavior.
      </p>
          </details>
        </div>
        <div class="cognition-topic-tabs" aria-label="Cognition themes">
          <button type="button" class="cognition-topic-tab active" data-cognition-topic="memory" aria-pressed="true">Memory <span>4 questions</span></button>
          <button type="button" class="cognition-topic-tab" data-cognition-topic="emotion" aria-pressed="false">Emotion <span>1 question</span></button>
        </div>
        <div class="cognition-map-layout">
          <div class="cognition-question-list" id="cognition-question-list"></div>
          <article class="cognition-detail" id="cognition-detail" aria-live="polite"></article>
        </div>
      </div>
    `;

    panel.querySelectorAll('.cognition-topic-tab').forEach(tab => {
      tab.addEventListener('click', () => setCognitionTopic(tab.dataset.cognitionTopic));
    });
    updateCognitionView();
  }

  function setCognitionTopic(topic) {
    activeCognitionTopic = topic;
    activeCognitionQuestion = 0;
    activeCognitionSection = 'question';
    document.querySelectorAll('.cognition-topic-tab').forEach(tab => {
      tab.classList.toggle('active', tab.dataset.cognitionTopic === topic);
      tab.setAttribute('aria-pressed', String(tab.dataset.cognitionTopic === topic));
    });
    updateCognitionView();
  }

  function selectCognitionQuestion(index) {
    activeCognitionQuestion = index;
    activeCognitionSection = 'question';
    updateCognitionView();
  }

  function setCognitionSection(section) {
    activeCognitionSection = section;
    updateCognitionView();
  }

  function renderCognitionSection(item) {
    if (activeCognitionSection === 'evidence') {
      return `
        <div class="cognition-evidence-ladder">
          ${item.evidence.map((step, index) => `
            <section class="cognition-evidence-step">
              <span class="evidence-step-number">${String(index + 1).padStart(2, '0')}</span>
              <div>
                <span class="evidence-certainty">${step.certainty}</span>
                <h4>${step.title}</h4>
                <p>${step.text}</p>
              </div>
            </section>
          `).join('')}
        </div>
      `;
    }

    if (activeCognitionSection === 'frontier') {
      return `
        <div class="cognition-frontier-list">
          ${item.frontiers.map((frontier, index) => `
            <details ${index === 0 ? 'open' : ''}>
              <summary><span>${String(index + 1).padStart(2, '0')}</span>${frontier.question}</summary>
              <p>${frontier.note}</p>
            </details>
          `).join('')}
        </div>
      `;
    }

    if (activeCognitionSection === 'papers') {
      return `
        <div class="cognition-source-list">
          ${item.sources.map((source, index) => `
            <a href="${source.url}" target="_blank" rel="noopener">
              <span>${String(index + 1).padStart(2, '0')}</span>
              <strong>${source.label}</strong>
              <span aria-hidden="true">&#8599;</span>
            </a>
          `).join('')}
        </div>
      `;
    }

    return `
      <div class="cognition-question-origin">
        <span>Where the question started</span>
        <p>${item.origin}</p>
        <div class="cognition-thesis-band">
          <span>How I understand it so far</span>
          <p>${item.thesis}</p>
        </div>
      </div>
    `;
  }

  function updateCognitionView() {
    const list = document.getElementById('cognition-question-list');
    const detail = document.getElementById('cognition-detail');
    const items = cognitionTopics[activeCognitionTopic] || [];
    if (!list || !detail || !items.length) return;
    const focused = document.activeElement;
    const focusedQuestion = focused?.matches('.cognition-question-button');
    const focusedLayer = focused?.closest('.cognition-detail-tabs');

    list.innerHTML = items.map((item, index) => `
      <button type="button" class="cognition-question-button ${index === activeCognitionQuestion ? 'active' : ''}" aria-pressed="${index === activeCognitionQuestion}" onclick="selectCognitionQuestion(${index})">
        <span>${String(index + 1).padStart(2, '0')}</span>
        <strong>${item.title}</strong>
      </button>
    `).join('');

    const item = items[activeCognitionQuestion];
    detail.innerHTML = `
      <span class="interest-map-eyebrow">${item.eyebrow}</span>
      <h3>${item.title}</h3>
      <p class="cognition-status">${item.status}</p>
      <div class="cognition-detail-tabs" aria-label="Layers of this question">
        <button type="button" class="${activeCognitionSection === 'question' ? 'active' : ''}" aria-pressed="${activeCognitionSection === 'question'}" onclick="setCognitionSection('question')">The Question</button>
        <button type="button" class="${activeCognitionSection === 'evidence' ? 'active' : ''}" aria-pressed="${activeCognitionSection === 'evidence'}" onclick="setCognitionSection('evidence')">Papers &amp; notes</button>
        <button type="button" class="${activeCognitionSection === 'frontier' ? 'active' : ''}" aria-pressed="${activeCognitionSection === 'frontier'}" onclick="setCognitionSection('frontier')">Open questions</button>
        <button type="button" class="${activeCognitionSection === 'papers' ? 'active' : ''}" aria-pressed="${activeCognitionSection === 'papers'}" onclick="setCognitionSection('papers')">Sources</button>
      </div>
      <div class="cognition-section-content">${renderCognitionSection(item)}</div>
    `;
    if (focusedQuestion) list.querySelector('[aria-pressed="true"]')?.focus({preventScroll:true});
    else if (focusedLayer) detail.querySelector('.cognition-detail-tabs [aria-pressed="true"]')?.focus({preventScroll:true});
  }

  function renderResearchMaps() {
    renderAuthorLegend();
    renderTorporRoadmap();
    renderCognitionMap();
  }

  function switchTorporArea(areaName) {
    const panels = document.querySelectorAll('[data-torpor-area]');
    const tabs = document.querySelectorAll('[data-area-tab]');

    panels.forEach(panel => {
      panel.classList.toggle('active', panel.dataset.torporArea === areaName);
    });

    tabs.forEach(tab => {
      tab.classList.toggle('active', tab.dataset.areaTab === areaName);
      tab.setAttribute('aria-pressed', String(tab.dataset.areaTab === areaName));
    });
  }

  function toggleVisitPanel(event) {
    if (event) {
      event.stopPropagation();
    }

    const panel = document.getElementById('yinfeng-visit-panel');
    if (panel) {
      const open = panel.classList.toggle('active');
      document.querySelector('.visit-toggle')?.setAttribute('aria-expanded', String(open));
    }
  }

  function openInterestMap(mapName, options = {}) {
    const workspace = document.getElementById('interest-map-workspace');
    const heroHome = document.getElementById('hero-home');
    const hero = document.querySelector('.hero');
    const title = document.getElementById('interest-map-title');
    const panels = document.querySelectorAll('[data-interest-panel]');
    const buttons = document.querySelectorAll('.interest-map-button');

    if (!workspace) return;

    if (options.trigger) {
      lastInterestMapTrigger = options.trigger;
    } else if (document.activeElement && document.activeElement.classList.contains('interest-map-button')) {
      lastInterestMapTrigger = document.activeElement;
    }
    if (!lastInterestMapTrigger || !lastInterestMapTrigger.classList.contains(mapName)) {
      lastInterestMapTrigger = document.querySelector(`.interest-map-button.${mapName}`);
    }

    workspace.hidden = false;
    workspace.querySelector('.interest-map-close')?.focus({preventScroll:true});

    if (heroHome) {
      heroHome.hidden = true;
    }

    if (hero) {
      hero.classList.add('map-active');
    }

    document.body.classList.add('interest-map-open');

    panels.forEach(panel => {
      panel.classList.toggle('active', panel.dataset.interestPanel === mapName);
    });

    buttons.forEach(button => {
      button.classList.toggle('active', button.classList.contains(mapName));
    });

    if (title) {
      title.textContent = mapName === 'cognition'
        ? 'Questions about memory and waking'
        : 'Artificial Induction of Torpor / Hibernation';
    }

    if (options.updateHash !== false) {
      history.replaceState(null, '', mapName === 'cognition' ? '#cognition-map' : '#torpor-map');
    }

    if (options.scroll !== false) {
      const header = document.querySelector('header');
      const offset = header ? header.offsetHeight + 18 : 80;
      const target = hero || workspace;
      window.scrollTo({
        top: Math.max(target.offsetTop - offset, 0),
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
      });
    }
  }

  function closeInterestMap(options = {}) {
    const workspace = document.getElementById('interest-map-workspace');
    const heroHome = document.getElementById('hero-home');
    const hero = document.querySelector('.hero');
    const buttons = document.querySelectorAll('.interest-map-button');

    if (workspace) {
      workspace.hidden = true;
    }

    if (heroHome) {
      heroHome.hidden = false;
    }

    if (hero) {
      hero.classList.remove('map-active');
    }

    document.body.classList.remove('interest-map-open');

    buttons.forEach(button => button.classList.remove('active'));

    if (window.location.hash === '#torpor-map' || window.location.hash === '#cognition-map') {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    if (options.restoreFocus !== false) lastInterestMapTrigger?.focus({preventScroll:true});
    const returnTarget = lastInterestMapTrigger || document.getElementById('interest-maps-home') || hero;
    if (returnTarget && options.scroll !== false) {
      const header = document.querySelector('header');
      const offset = header ? header.offsetHeight + 18 : 80;
      window.scrollTo({
        top: Math.max(returnTarget.getBoundingClientRect().top + window.scrollY - offset, 0),
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
      });
    }
  }

  window.addEventListener('hashchange', () => {
    const mapName = window.location.hash === '#torpor-map' ? 'torpor' : window.location.hash === '#cognition-map' ? 'cognition' : null;
    if (mapName) openInterestMap(mapName, {updateHash:false});
    else if (document.body.classList.contains('interest-map-open')) closeInterestMap({restoreFocus:false,scroll:false});
  });
