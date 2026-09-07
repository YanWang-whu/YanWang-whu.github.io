/* Reading notes share one accessible dialog across the map and reading list. */
let torporView = window.matchMedia('(max-width: 760px)').matches ? 'list' : 'map';
let torporQuery = '';
let torporCategory = 'all';

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

function openPaperNote(index) {
  const paper = torporPapers[index];
  if (!paper) return;
  const note = paper.note || paper.readingNote;
  const paragraphs = Array.isArray(note) ? note : [note];
  openReadingDialog(`
    <p class="reading-meta">${escapeText(paper.year)} · ${escapeText(paper.source)}${paper.species ? ' · ' + escapeText(paper.species) : ''}</p>
    <h2 id="reading-dialog-title">${escapeText(paper.title)}</h2>
    <p class="reading-citation">${escapeText(paper.citation)}</p>
    <section class="reading-evidence"><h3>What the paper shows</h3><p>${escapeText(paper.insight)}</p></section>
    <section class="personal-reading-note"><h3>My note</h3>${paragraphs.filter(Boolean).map(text => `<p>${escapeText(text)}</p>`).join('')}</section>
    ${paper.caveat ? `<p class="reading-caveat"><strong>Keep in mind:</strong> ${escapeText(paper.caveat)}</p>` : ''}
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

function filteredTorporPapers() {
  const query = torporQuery.toLocaleLowerCase().trim();
  return torporPapers.map((paper,index) => ({...paper,index})).filter(paper =>
    (torporCategory === 'all' || String(paper.question) === torporCategory) &&
    (!query || [paper.title,paper.citation,paper.label,paper.species,paper.insight,paper.year,paper.authors?.join(' '),paper.correspondingAuthor,torporAuthors.filter(author=>author.team===paper.team).map(author=>author.name).join(' ')].join(' ').toLocaleLowerCase().includes(query))
  );
}

function renderTorporRoadmap() {
  const grid = document.querySelector('.torpor-v3-map .torpor-grid-v3');
  if (!grid) return;
  const scroll = grid.closest('.roadmap-scroll');
  if (!document.getElementById('torpor-controls')) {
    scroll.insertAdjacentHTML('beforebegin', `<div class="torpor-controls" id="torpor-controls">
      <div class="reading-view-switch" aria-label="Reading layout"><button type="button" data-reading-view="map">Question map</button><button type="button" data-reading-view="list">Reading list</button></div>
      <div class="reading-filters"><label>Find a paper<input id="torpor-search" type="search" placeholder="Title, author, species, year" autocomplete="off"></label><label>Question<select id="torpor-category"><option value="all">All questions</option>${torporQuestions.map((q,i)=>`<option value="${i}">${escapeText(q)}</option>`).join('')}</select></label></div>
      <p id="torpor-count" class="reading-count" role="status"></p></div>`);
    scroll.insertAdjacentHTML('afterend', '<div class="torpor-reading-list" id="torpor-reading-list"></div>');
    document.getElementById('torpor-search').addEventListener('input', event => { torporQuery = event.target.value; updateTorporResults(); });
    document.getElementById('torpor-category').addEventListener('change', event => { torporCategory = event.target.value; updateTorporResults(); });
    document.querySelectorAll('[data-reading-view]').forEach(button => button.addEventListener('click', () => { torporView = button.dataset.readingView; updateTorporResults(); }));
  }
  updateTorporResults();
}

function updateTorporResults() {
  const grid = document.querySelector('.torpor-v3-map .torpor-grid-v3');
  const list = document.getElementById('torpor-reading-list');
  if (!grid || !list) return;
  const papers = filteredTorporPapers();
  const years = [...new Set(papers.map(paper=>paper.year))].sort((a,b)=>Number(b)-Number(a));
  const questions = torporCategory === 'all' ? torporQuestions.map((text,index)=>({text,index})) : [{text:torporQuestions[Number(torporCategory)],index:Number(torporCategory)}];
  const cells = ['<div class="roadmap-corner">Year</div>', ...questions.map(q=>`<div class="roadmap-question">${escapeText(q.text)}</div>`)];
  years.forEach(year => {
    cells.push(`<div class="roadmap-year">${escapeText(year)}</div>`);
    questions.forEach(question => {
      const entries = papers.filter(paper=>paper.year === year && paper.question === question.index);
      cells.push(`<div class="roadmap-cell ${entries.length ? 'node-cell' : ''}"><div class="node-stack">${entries.map(paper=>`<div class="paper-entry"><button type="button" class="paper-note-button" data-note-index="${paper.index}" aria-haspopup="dialog" aria-label="My reading note: ${escapeText(paper.title)}"><span aria-hidden="true">≡</span></button><a class="paper-node ${escapeText(paper.team)}" href="${escapeText(paper.url)}" target="_blank" rel="noopener" data-paper-index="${paper.index}" aria-label="Read source: ${escapeText(paper.title)}"><span class="paper-node-dot"></span><span class="paper-node-label">${escapeText(paper.label)}</span><span class="paper-link-cue">${escapeText(paper.source)}</span></a></div>`).join('')}</div></div>`);
    });
  });
  grid.innerHTML = cells.join('');
  grid.style.gridTemplateColumns = `64px repeat(${questions.length}, minmax(180px, 1fr))`;
  grid.style.setProperty('--roadmap-rows', years.length);
  grid.style.minWidth = `${64 + questions.length * 180}px`;
  grid.closest('.roadmap-scroll').hidden = torporView !== 'map' || !papers.length;
  list.hidden = torporView !== 'list' && papers.length > 0;
  list.innerHTML = papers.length ? papers.map(paper=>`<article class="reading-paper ${escapeText(paper.team)}"><div class="reading-paper-year">${escapeText(paper.year)}<span>${escapeText(paper.source)}</span></div><div><p class="reading-paper-question">${escapeText(torporQuestions[paper.question])}${paper.species ? ' · ' + escapeText(paper.species) : ''}</p><h4><a href="${escapeText(paper.url)}" target="_blank" rel="noopener">${escapeText(paper.title)}</a></h4><p class="reading-citation">${escapeText(paper.citation)}</p><p>${escapeText(paper.insight)}</p><button type="button" class="reading-note-link" data-note-index="${paper.index}" aria-haspopup="dialog">My reading note <span aria-hidden="true">↗</span></button></div></article>`).join('') : '<p class="reading-empty">No matching papers. Try another word or choose “All questions”.</p>';
  document.querySelectorAll('[data-note-index]').forEach(button=>button.addEventListener('click',()=>openPaperNote(Number(button.dataset.noteIndex))));
  grid.querySelectorAll('[data-paper-index]').forEach(node=>{
    node.addEventListener('pointerenter',event=>{if(event.pointerType === 'mouse') showPaperCard(torporPapers[Number(node.dataset.paperIndex)],node);});
    node.addEventListener('pointerleave',hidePaperCard);
    node.addEventListener('focus',()=>showPaperCard(torporPapers[Number(node.dataset.paperIndex)],node));
    node.addEventListener('blur',hidePaperCard);
  });
  document.querySelectorAll('[data-reading-view]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.readingView === torporView)));
  document.getElementById('torpor-count').textContent = `${papers.length} of ${torporPapers.length} papers · Notes updated September 2026${torporView === 'map' ? ' · Scroll the map horizontally for more questions.' : ''}`;
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
