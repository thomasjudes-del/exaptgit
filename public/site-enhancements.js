(() => {
  const apply = () => {
    const card = [...document.querySelectorAll('a[href]')].find((a) => {
      const href = a.getAttribute('href') || '';
      return href === '/green-claims-fix/' || href === '/green-claims-fix';
    });
    if (!card) return;

    card.setAttribute('target', '_blank');
    card.setAttribute('rel', 'noopener noreferrer');

    const img = card.querySelector('img');
    if (img) {
      img.src = '/green-claims-fix-card.svg';
      img.alt = 'Green Claims Fix — environmental claims screening and evidence analysis';
      img.loading = 'eager';
    }
  };

  const observer = new MutationObserver(apply);
  document.addEventListener('DOMContentLoaded', () => {
    apply();
    observer.observe(document.documentElement, { childList: true, subtree: true });
    setTimeout(apply, 300);
    setTimeout(apply, 1000);
  });
})();