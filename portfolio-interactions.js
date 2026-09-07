/* Research cards keep long accounts and figures inside a viewport-sized panel. */
(() => {
  const originalToggle = window.toggleActivity;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  function sizePanel(card) {
    const content = card.querySelector('.research-content');
    const header = document.querySelector('header');
    const beforeContent = content.getBoundingClientRect().top - card.getBoundingClientRect().top;
    const available = innerHeight - (header?.offsetHeight || 0) - beforeContent - 36;
    card.style.setProperty('--research-panel-height', `${Math.max(160, Math.min(innerHeight * .78, available))}px`);
  }
  function openResearch(card, scroll = true) {
    const content = card.querySelector('.research-content');
    const button = card.querySelector('.research-header');
    card.classList.add('active');
    content.inert = false;
    button.setAttribute('aria-expanded', 'true');
    sizePanel(card);
    if (scroll) {
      const top = card.getBoundingClientRect().top + scrollY - (document.querySelector('header')?.offsetHeight || 0) - 16;
      window.scrollTo({top: Math.max(0, top), behavior: reduced.matches ? 'instant' : 'smooth'});
    }
  }
  window.toggleActivity = function(button) {
    const card = button.closest('.research-card');
    if (!card) { originalToggle(button); button.setAttribute('aria-expanded', String(button.parentElement.classList.contains('active'))); return; }
    if (card.classList.contains('active')) {
      card.classList.remove('active');
      card.querySelector('.research-content').inert = true;
      button.setAttribute('aria-expanded', 'false');
    } else openResearch(card);
  };
  function revealLinkedResearch() {
    const card = document.getElementById(location.hash.slice(1));
    if (card?.classList.contains('research-card')) openResearch(card);
  }
  addEventListener('resize', () => document.querySelectorAll('.research-card.active').forEach(sizePanel));
  addEventListener('hashchange', revealLinkedResearch);
  document.addEventListener('DOMContentLoaded', revealLinkedResearch);
})();
