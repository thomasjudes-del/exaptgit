(() => {
  const EMAIL = 'thomas@exaptation.studio';
  const isGreenClaimsPage = () => window.location.pathname.startsWith('/green-claims-fix');

  const enhanceHomeCard = () => {
    const card = [...document.querySelectorAll('a[href]')].find((a) => {
      const href = a.getAttribute('href') || '';
      return href === '/green-claims-fix/' || href === '/green-claims-fix';
    });
    if (!card) return;

    card.setAttribute('target', '_blank');
    card.setAttribute('rel', 'noopener noreferrer');

    const img = card.querySelector('img');
    if (img && img.getAttribute('src') !== '/green-claims-fix-card.svg') {
      img.setAttribute('src', '/green-claims-fix-card.svg');
      img.setAttribute('alt', 'Green Claims Fix — screening environmental claims, evidence and risk');
      img.setAttribute('loading', 'eager');
    }
  };

  const removeLegacyHeaderInjection = () => {
    if (!isGreenClaimsPage()) return;
    document.querySelectorAll('[data-gcf-lgi-header], .gcf-header-separator').forEach((el) => el.remove());
  };

  const createLgiLockup = () => {
    const lockup = document.createElement('div');
    lockup.className = 'gcf-lgi-lockup';
    lockup.setAttribute('aria-label', 'LGI Sustainable Innovation — 20 years of impact');
    lockup.innerHTML = `
      <span class="gcf-lgi-wordmark">LGi</span>
      <span class="gcf-lgi-anniversary">20 years<br><small>of impact</small></span>
      <span class="gcf-lgi-baseline">sustainable innovation</span>
    `;
    return lockup;
  };

  const replaceAwkwardLgiImages = () => {
    if (!isGreenClaimsPage()) return;
    document.querySelectorAll('img[src="/lgi-20-years.jpg"]').forEach((img) => {
      if (img.closest('[data-gcf-footer]')) return;
      const parent = img.parentElement;
      if (!parent) return;
      parent.replaceChildren(createLgiLockup());
      parent.classList.add('gcf-lgi-card');
    });
  };

  const addGreenClaimsFooter = () => {
    if (!isGreenClaimsPage() || document.querySelector('[data-gcf-footer]')) return;
    const main = document.querySelector('main');
    if (!main) return;

    const footer = document.createElement('footer');
    footer.className = 'gcf-footer';
    footer.setAttribute('data-gcf-footer', 'true');
    footer.innerHTML = `
      <div class="gcf-footer-inner">
        <div class="gcf-footer-logos" aria-label="Green Claims Fix is an Exaptation venture backed by LGI Sustainable Innovation">
          <a class="gcf-footer-brand-link" href="/" aria-label="Exaptation Studio">
            <span class="gcf-exaptation-lockup">
              <span class="gcf-exaptation-wordmark">exaptation studio</span>
              <span class="gcf-exaptation-by">by LGi</span>
            </span>
          </a>
          <span class="gcf-footer-divider" aria-hidden="true"></span>
          <a class="gcf-footer-brand-link" href="https://lgi.earth/" target="_blank" rel="noopener noreferrer" aria-label="LGI Sustainable Innovation">
            <span class="gcf-lgi-lockup gcf-lgi-lockup-footer">
              <span class="gcf-lgi-wordmark">LGi</span>
              <span class="gcf-lgi-anniversary">20 years<br><small>of impact</small></span>
              <span class="gcf-lgi-baseline">sustainable innovation</span>
            </span>
          </a>
        </div>
        <div class="gcf-footer-contact">
          <strong>Green Claims Fix</strong><br>
          <a href="mailto:${EMAIL}">${EMAIL}</a>
        </div>
      </div>
    `;
    main.appendChild(footer);
  };

  const normalizeEmailLinks = () => {
    if (!isGreenClaimsPage()) return;
    document.querySelectorAll('a[href^="mailto:"]').forEach((a) => {
      const href = a.getAttribute('href') || '';
      const subjectMatch = href.match(/subject=([^&]+)/);
      const subject = subjectMatch ? `?subject=${subjectMatch[1]}` : '';
      a.setAttribute('href', `mailto:${EMAIL}${subject}`);
    });
  };

  const apply = () => {
    enhanceHomeCard();
    removeLegacyHeaderInjection();
    replaceAwkwardLgiImages();
    addGreenClaimsFooter();
    normalizeEmailLinks();
  };

  document.addEventListener('DOMContentLoaded', () => {
    apply();
    const observer = new MutationObserver(() => apply());
    observer.observe(document.documentElement, { childList: true, subtree: true });
    setTimeout(apply, 250);
    setTimeout(apply, 1000);
  });
})();