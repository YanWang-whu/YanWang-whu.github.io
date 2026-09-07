function toggleActivity(button) {
    const card = button.closest('.research-card, .activity-card');
    if (!card) return;
    const open = card.classList.toggle('active');
    button.setAttribute('aria-expanded', String(open));
  }
  function toggleSectionFold(button) {
    const open = button.classList.toggle('active');
    button.setAttribute('aria-expanded', String(open));
    button.nextElementSibling?.classList.toggle('expanded', open);
  }

  const mapHashOnLoad = typeof window.openInterestMap === 'function' && (window.location.hash === '#torpor-map' || window.location.hash === '#cognition-map');
  if (mapHashOnLoad && 'scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  document.addEventListener('DOMContentLoaded', function () {
    window.renderResearchMaps?.();
    document.addEventListener('keydown', event => { if (event.key === 'Escape' && !event.defaultPrevented && !document.querySelector('dialog[open]') && document.body.classList.contains('interest-map-open')) closeInterestMap(); });

    const revealItems = document.querySelectorAll(
      '.hero, footer, .scroll-reveal-card, .section-title, .fold-hint, .edu-card, .research-card, .activity-card, .skills-card, .awards-card, .resume-side, .gallery-box, .contact-box'
    );

    document.querySelectorAll('.research-header, .activity-header, .section-fold-header').forEach((button,index) => {
      button.setAttribute('type','button');
      const content = button.classList.contains('section-fold-header') ? button.nextElementSibling : button.closest('.research-card, .activity-card')?.querySelector('.research-content, .activity-content');
      if (content) { content.id = content.id || `details-${index}`; button.setAttribute('aria-controls', content.id); button.setAttribute('aria-expanded', 'false'); }
    });
    const menuButton = document.querySelector('.nav-toggle');
    const menu = document.getElementById('main-nav');
    function closeMenu() { menu?.classList.remove('menu-open'); menuButton?.setAttribute('aria-expanded','false'); }
    menuButton?.addEventListener('click', () => { const open=menu.classList.toggle('menu-open'); menuButton.setAttribute('aria-expanded',String(open)); });
    document.addEventListener('click', event => { if (!event.target.closest('header')) closeMenu(); });
    menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { closeMenu(); if (document.body.classList.contains('interest-map-open')) window.closeInterestMap?.({ restoreFocus: false, scroll: false }); }));
    document.addEventListener('keydown', event => { if (event.key==='Escape' && menu?.classList.contains('menu-open')) { closeMenu(); menuButton.focus(); } });
    const resizeHeader = () => document.documentElement.style.setProperty('--header-height', `${document.querySelector('header').offsetHeight}px`);
    resizeHeader();
    new ResizeObserver(resizeHeader).observe(document.querySelector('header'));

    const backToTopBtn = document.getElementById('backToTopBtn');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section[id]');

    if (mapHashOnLoad && window.location.hash === '#torpor-map') {
      openInterestMap('torpor', { updateHash: false, scroll: false });
    } else if (mapHashOnLoad && window.location.hash === '#cognition-map') {
      openInterestMap('cognition', { updateHash: false, scroll: false });
    }

    if (mapHashOnLoad) {
      requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'auto' }));
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
        if ('scrollRestoration' in history) history.scrollRestoration = 'auto';
      }, 120);
    }

    document.addEventListener('click', event => {
      if (!event.target.closest('.paper-note-button')) {
        document.querySelectorAll('.paper-note-button.note-open').forEach(button => button.classList.remove('note-open'));
        window.hideNoteCard?.();
      }
    });

    window.addEventListener('scroll', () => {
      window.hidePaperCard?.();
      window.hideAuthorCard?.();
      window.hideNoteCard?.();
    }, { passive: true });

    window.addEventListener('resize', () => {
      window.hidePaperCard?.();
      window.hideAuthorCard?.();
      window.hideNoteCard?.();
    });

    function animateProgressBarsInCard(card) {
      const bars = card.querySelectorAll('.progress-fill');

      setTimeout(() => {
        bars.forEach(bar => {
          const targetWidth = getComputedStyle(bar).getPropertyValue('--target-width').trim();
          if (targetWidth && !bar.dataset.animated) {
            requestAnimationFrame(() => {
              bar.style.width = targetWidth;
              bar.dataset.animated = 'true';
            });
          }
        });
      }, 700);
    }

    function updateActiveNav() {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;
      const scrollPosition = window.scrollY + headerHeight + 120;

      let currentId = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          currentId = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        const target = link.getAttribute('href');
        if (target === '#' + currentId) {
          link.classList.add('active');
        }
      });
    }

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');

            if (entry.target.classList.contains('progress-card')) {
              animateProgressBarsInCard(entry.target);
            }

            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      });

      revealItems.forEach(item => observer.observe(item));
    } else {
      revealItems.forEach(item => item.classList.add('is-visible'));
    }

    const thumbs = [...document.querySelectorAll('[data-gallery-index]')];
    const gallery = document.querySelector('.life-gallery');
    let selectedPhoto = 0;
    function selectPhoto(index) {
      if (!thumbs.length) return;
      selectedPhoto = (index + thumbs.length) % thumbs.length;
      const selected = thumbs[selectedPhoto];
      const picture = gallery.querySelector('.gallery-image');
      picture.src = selected.querySelector('img').getAttribute('src');
      picture.alt = selected.dataset.alt;
      gallery.querySelector('figcaption').textContent = selected.dataset.caption;
      gallery.querySelector('.gallery-count').textContent = `${selectedPhoto + 1} / ${thumbs.length}`;
      thumbs.forEach((thumb,i) => thumb.setAttribute('aria-current', String(i === selectedPhoto)));
    }
    thumbs.forEach((thumb,i) => thumb.addEventListener('click', () => selectPhoto(i)));
    document.getElementById('gallery-prev')?.addEventListener('click', () => selectPhoto(selectedPhoto - 1));
    document.getElementById('gallery-next')?.addEventListener('click', () => selectPhoto(selectedPhoto + 1));
    gallery?.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault(); selectPhoto(selectedPhoto + (event.key === 'ArrowRight' ? 1 : -1));
        thumbs[selectedPhoto].focus({preventScroll:true});
      }
    });

    window.addEventListener('scroll', () => {
      if (backToTopBtn) {
        if (window.scrollY > 400) {
          backToTopBtn.classList.add('show');
        } else {
          backToTopBtn.classList.remove('show');
        }
      }

      updateActiveNav();
    });

    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
        });
      });
    }

    updateActiveNav();
  });
