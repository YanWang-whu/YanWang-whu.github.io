/* The question map links to papers and, where present, personal reading notes. */
let torporQuery = '';
let torporCategory = 'all';
let roadmapScrollController;

function escapeText(value = '') {
  return String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
}

function readingDialog() {
  let dialog = document.getElementById('reading-dialog');
  if (dialog) return dialog;
  dialog = document.createElement('dialog');
  dialog.id = 'reading-dialog';
  dialog.className = 'reading-dialog';
  dialog.setAttribute('aria-labelledby', 'reading-dialog-title');
  dialog.innerHTML = '<div class="reading-dialog-bar"><span>Reading notebook</span><button type="button" class="dialog-close" aria-label="Close reading note">Close <span aria-hidden="true">×</span></button></div><div class="reading-dialog-content"></div>';
  document.body.appendChild(dialog);
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => document.body.classList.remove('reading-dialog-open'));
  return dialog;
}

function openReadingDialog(content, label) {
  const dialog = readingDialog();
  dialog.querySelector('.reading-dialog-bar > span').textContent = label;
  dialog.querySelector('.reading-dialog-content').innerHTML = content;
  hidePaperCard();
  if (!dialog.open) dialog.showModal();
  document.body.classList.add('reading-dialog-open');
  dialog.scrollTop = 0;
  dialog.querySelector('.dialog-close').focus({preventScroll:true});
}

function paperNoteParagraphs(paper) {
  const paragraphs = value => (Array.isArray(value) ? value : [value])
    .filter(text => typeof text === 'string' && text.trim())
    .map(text => text.trim());
  const note = paragraphs(paper?.note);
  return note.length ? note : paragraphs(paper?.readingNote);
}

function openPaperNote(index) {
  const paper = torporPapers[index];
  const paragraphs = paperNoteParagraphs(paper);
  if (!paper || !paragraphs.length) return;
  openReadingDialog(`
    <p class="reading-meta">${escapeText(paper.year)} · ${escapeText(paper.source)}${paper.species ? ' · ' + escapeText(paper.species) : ''}</p>
    <h2 id="reading-dialog-title">${escapeText(paper.title)}</h2>
    <p class="reading-citation">${escapeText(paper.citation)}</p>
    <section class="personal-reading-note"><h3>My note</h3>${paragraphs.map(text => `<p>${escapeText(text)}</p>`).join('')}</section>
    <a class="reading-source" href="${escapeText(paper.url)}" target="_blank" rel="noopener">Read the source <span aria-hidden="true">↗</span></a>
  `, 'My reading notebook');
}

function renderAuthorLegend() {
  const legend = document.querySelector('.torpor-v3-map .paper-legend');
  if (!legend) return;
  legend.innerHTML = torporAuthors.map(author => `<button type="button" class="legend-chip author-chip ${escapeText(author.team)}" data-author-id="${escapeText(author.id)}" aria-haspopup="dialog"><img src="${escapeText(author.image)}" alt="" loading="lazy" width="30" height="30"><span>${escapeText(author.name)}</span></button>`).join('');
  legend.querySelectorAll('button').forEach(button => button.addEventListener('click', () => {
    const author = torporAuthors.find(author => author.id === button.dataset.authorId);
    openReadingDialog(`<div class="reading-author"><img src="${escapeText(author.image)}" alt="" width="72" height="72"><div><h2 id="reading-dialog-title">${escapeText(author.name)}</h2><p>${escapeText(author.role)}</p></div></div><p>${escapeText(author.connection)}</p><a class="reading-source" href="${escapeText(author.profile)}" target="_blank" rel="noopener">Research profile ↗</a>`, 'People whose work I follow');
  }));
}

function normalizePaperSearch(value) {
  return String(value ?? '').normalize('NFKD').replace(/\p{M}/gu, '').toLowerCase()
    .replace(/ß/g, 'ss').replace(/æ/g, 'ae').replace(/œ/g, 'oe')
    .replace(/[øłđð]/g, character => ({'ø':'o','ł':'l','đ':'d','ð':'d'}[character]))
    .replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
}

function filteredTorporPapers() {
  const terms = normalizePaperSearch(torporQuery).split(/\s+/).filter(Boolean);
  return torporPapers.map((paper,index) => ({...paper,index})).filter(paper => {
    if (torporCategory !== 'all' && String(paper.question) !== torporCategory) return false;
    const text = normalizePaperSearch([
      paper.title, paper.citation, paper.label, paper.species, paper.insight, paper.year,
      ...(Array.isArray(paper.authors) ? paper.authors : [paper.authors]),
      ...(Array.isArray(paper.authorAliases) ? paper.authorAliases : [])
    ].join(' '));
    return terms.every(term => text.includes(term));
  });
}

function ensureRoadmapScrolling(grid) {
  const scroll = grid.closest('.roadmap-scroll');
  if (roadmapScrollController?.scroll === scroll) return roadmapScrollController;
  grid.id = grid.id || 'torpor-question-grid';
  const top = document.createElement('div');
  top.className = 'roadmap-top-scroll';
  top.hidden = true;
  top.tabIndex = 0;
  top.setAttribute('role', 'scrollbar');
  top.setAttribute('aria-label', 'Scroll question map horizontally');
  top.setAttribute('aria-controls', grid.id);
  top.setAttribute('aria-orientation', 'horizontal');
  top.setAttribute('aria-valuemin', '0');
  top.setAttribute('aria-valuemax', '0');
  top.setAttribute('aria-valuenow', '0');
  top.innerHTML = '<div class="roadmap-top-track" aria-hidden="true"></div>';
  scroll.before(top);
  const track = top.firstElementChild;
  const maximum = () => Math.max(0, scroll.scrollWidth - scroll.clientWidth);
  const updateValue = () => {
    const max = maximum();
    const value = Math.max(0, Math.min(max, scroll.scrollLeft));
    top.setAttribute('aria-valuemax', String(Math.round(max)));
    top.setAttribute('aria-valuenow', String(Math.round(value)));
    top.setAttribute('aria-valuetext', `${max ? Math.round(value / max * 100) : 0}%`);
  };
  const followMap = () => {
    const topMax = Math.max(0, top.scrollWidth - top.clientWidth);
    const value = maximum() ? scroll.scrollLeft / maximum() * topMax : 0;
    if (Math.abs(top.scrollLeft - value) > 0.5) top.scrollLeft = value;
    updateValue();
  };
  top.addEventListener('scroll', () => {
    if (top.hidden || scroll.clientWidth === 0) return;
    const topMax = top.scrollWidth - top.clientWidth;
    const value = topMax > 0 ? top.scrollLeft / topMax * maximum() : 0;
    if (Math.abs(scroll.scrollLeft - value) > 0.5) scroll.scrollLeft = value;
    updateValue();
  }, {passive:true});
  scroll.addEventListener('scroll', followMap, {passive:true});
  top.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    const page = Math.max(40, scroll.clientWidth * 0.85);
    const targets = {ArrowLeft:scroll.scrollLeft - 40, ArrowRight:scroll.scrollLeft + 40,
      PageUp:scroll.scrollLeft - page, PageDown:scroll.scrollLeft + page, Home:0, End:maximum()};
    if (!(event.key in targets)) return;
    event.preventDefault();
    scroll.scrollLeft = Math.max(0, Math.min(maximum(), targets[event.key]));
    followMap();
  });
  let frame;
  const refresh = () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      if (scroll.hidden || scroll.clientWidth === 0) {
        top.hidden = true;
        return;
      }
      track.style.width = `${scroll.scrollWidth}px`;
      top.hidden = maximum() <= 1;
      followMap();
    });
  };
  if ('ResizeObserver' in window) {
    const observer = new ResizeObserver(refresh);
    observer.observe(scroll);
    observer.observe(grid);
  }
  // The map is initially hidden and can open without a window resize.
  const visibility = new MutationObserver(refresh);
  for (let ancestor = scroll.parentElement; ancestor; ancestor = ancestor.parentElement) {
    visibility.observe(ancestor, {attributes:true, attributeFilter:['hidden', 'class']});
  }
  window.addEventListener('resize', refresh, {passive:true});
  roadmapScrollController = {scroll, refresh};
  refresh();
  return roadmapScrollController;
}

function renderTorporRoadmap() {
  const grid = document.querySelector('.torpor-v3-map .torpor-grid-v3');
  if (!grid) return;
  const scroll = grid.closest('.roadmap-scroll');
  if (!document.getElementById('torpor-controls')) {
    scroll.insertAdjacentHTML('beforebegin', `<div class="torpor-controls" id="torpor-controls">
      <div class="reading-filters"><label>Find a paper<input id="torpor-search" type="search" placeholder="Title, author, species, year" autocomplete="off"></label><label>Question<select id="torpor-category"><option value="all">All questions</option>${torporQuestions.map((q,i)=>`<option value="${i}">${escapeText(q)}</option>`).join('')}</select></label></div>
      <p id="torpor-count" class="reading-count" role="status"></p></div>`);
    scroll.insertAdjacentHTML('afterend', '<p class="reading-empty" id="torpor-empty" hidden>No matching papers. Try another word or choose “All questions”.</p>');
    document.getElementById('torpor-search').addEventListener('input', event => { torporQuery = event.target.value; updateTorporResults(); });
    document.getElementById('torpor-category').addEventListener('change', event => { torporCategory = event.target.value; updateTorporResults(); });
  }
  ensureRoadmapScrolling(grid);
  updateTorporResults();
}

function updateTorporResults() {
  const grid = document.querySelector('.torpor-v3-map .torpor-grid-v3');
  if (!grid) return;
  const papers = filteredTorporPapers();
  const years = [...new Set(papers.map(paper=>paper.year))].sort((a,b)=>Number(b)-Number(a));
  const questions = torporCategory === 'all' ? torporQuestions.map((text,index)=>({text,index})) : [{text:torporQuestions[Number(torporCategory)],index:Number(torporCategory)}];
  const cells = ['<div class="roadmap-corner">Year</div>', ...questions.map(q=>`<div class="roadmap-question">${escapeText(q.text)}</div>`)];
  years.forEach(year => {
    cells.push(`<div class="roadmap-year">${escapeText(year)}</div>`);
    questions.forEach(question => {
      const entries = papers.filter(paper=>paper.year === year && paper.question === question.index);
      cells.push(`<div class="roadmap-cell ${entries.length ? 'node-cell' : ''}"><div class="node-stack">${entries.map(paper=>`<div class="paper-entry">${paperNoteParagraphs(paper).length ? `<button type="button" class="paper-note-button" data-note-index="${paper.index}" aria-haspopup="dialog" aria-label="My reading note: ${escapeText(paper.title)}"><svg class="paper-notebook-icon" viewBox="0 0 24 28" aria-hidden="true" focusable="false"><rect x="5" y="2" width="16" height="24" rx="2"/><path d="M9 2v24M3 7h4M3 14h4M3 21h4M12 9h6M12 13h6M12 17h4"/></svg></button>` : ''}<a class="paper-node ${escapeText(paper.team)}" href="${escapeText(paper.url)}" target="_blank" rel="noopener" data-paper-index="${paper.index}" aria-label="Read source: ${escapeText(paper.title)}"><span class="paper-node-dot"></span><span class="paper-node-label">${escapeText(paper.label)}</span><span class="paper-link-cue">${escapeText(paper.source)}</span></a></div>`).join('')}</div></div>`);
    });
  });
  grid.innerHTML = cells.join('');
  grid.style.gridTemplateColumns = `64px repeat(${questions.length}, minmax(180px, 1fr))`;
  grid.style.setProperty('--roadmap-rows', years.length);
  grid.style.minWidth = `${64 + questions.length * 180}px`;
  grid.closest('.roadmap-scroll').hidden = !papers.length;
  document.getElementById('torpor-empty').hidden = papers.length > 0;
  grid.querySelectorAll('[data-note-index]').forEach(button=>button.addEventListener('click',()=>openPaperNote(Number(button.dataset.noteIndex))));
  grid.querySelectorAll('[data-paper-index]').forEach(node=>{
    node.addEventListener('pointerenter',event=>{if(event.pointerType === 'mouse') showPaperCard(torporPapers[Number(node.dataset.paperIndex)],node);});
    node.addEventListener('pointerleave',hidePaperCard);
    node.addEventListener('focus',()=>showPaperCard(torporPapers[Number(node.dataset.paperIndex)],node));
    node.addEventListener('blur',hidePaperCard);
  });
  document.getElementById('torpor-count').textContent = `${papers.length} of ${torporPapers.length} papers · Notes updated September 2026 · Scroll the map horizontally for more questions.`;
  ensureRoadmapScrolling(grid).refresh();
}

function hidePaperCard() {
  document.getElementById('paper-hover-card')?.remove();
}
function hideAuthorCard() {}
function hideNoteCard() {}
function showPaperCard(paper,anchor) {
  if (document.getElementById('reading-dialog')?.open) return;
  hidePaperCard();
  const card = document.createElement('div');
  card.id='paper-hover-card'; card.className='paper-preview'; card.setAttribute('role','tooltip');
  card.innerHTML=`<strong>${escapeText(paper.title)}</strong><span>${escapeText(paper.citation)}</span><p>${escapeText(paper.insight)}</p>`;
  document.body.appendChild(card);
  const rect=anchor.getBoundingClientRect();
  const topMin=document.querySelector('header').getBoundingClientRect().bottom+8;
  card.style.maxHeight=`${Math.max(100,innerHeight-topMin-16)}px`;
  const measured=card.getBoundingClientRect();
  card.style.left=`${Math.max(12,Math.min(rect.left,innerWidth-measured.width-12))}px`;
  card.style.top=`${Math.max(topMin,Math.min(rect.bottom+8,innerHeight-measured.height-12))}px`;
}
document.addEventListener('keydown', event=>{if(event.key==='Escape') hidePaperCard();});
document.addEventListener('scroll',hidePaperCard,true);
