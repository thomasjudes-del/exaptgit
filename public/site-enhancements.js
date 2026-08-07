(() => {
  const EMAIL = 'thomas@exaptation.studio';
  const GCF_PATH = '/green-claims-fix';

  const ensureStyles = () => {
    if (document.getElementById('gcf-enhancement-styles')) return;
    const style = document.createElement('style');
    style.id = 'gcf-enhancement-styles';
    style.textContent = `
      .gcf-price-card {
        transition: transform .24s ease, box-shadow .24s ease, border-color .24s ease !important;
        transform-origin: center center;
        position: relative;
      }
      .gcf-price-card:hover {
        transform: translateY(-8px) scale(1.035) !important;
        box-shadow: 0 28px 65px rgba(15,23,42,.20) !important;
        z-index: 8;
      }
      .gcf-trust-logos {
        margin-top: 2rem;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 1.1rem;
      }
      .gcf-trust-logo-card {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 82px;
        padding: 14px 20px;
        border-radius: 18px;
        background: #fff;
        border: 1px solid rgba(148,163,184,.22);
      }
      .gcf-trust-logo-card img { display:block; object-fit:contain; }
      .gcf-exaptation-logo { width: min(300px, 62vw); max-height: 64px; }
      .gcf-lgi-logo { width: 150px; max-height: 72px; mix-blend-mode: multiply; }
      .gcf-contact-email {
        display:inline-flex;
        margin-top: 1rem;
        color: rgb(52 211 153);
        font-weight: 700;
        text-decoration: none;
      }
      .gcf-contact-email:hover { text-decoration: underline; }
      @media (max-width: 768px) {
        .gcf-price-card:hover { transform: translateY(-3px) scale(1.015) !important; }
      }
    `;
    document.head.appendChild(style);
  };

  const enhanceHomeCard = () => {
    const card = [...document.querySelectorAll('a[href]')].find((a) => {
      const href = a.getAttribute('href') || '';
      return href === '/green-claims-fix/' || href === '/green-claims-fix';
    });
    if (!card) return;

    card.setAttribute('target', '_blank');
    card.setAttribute('rel', 'noopener noreferrer');
    const img = card.querySelector('img');
    if (img) {
      img.src = '/green-claims-fix-card.jpg';
      img.alt = 'Green Claims Fix — environmental claims screening and evidence analysis';
      img.loading = 'lazy';
    }
  };

  const addTrustLogos = () => {
    if (document.querySelector('[data-gcf-trust-logos]')) return;
    const headings = [...document.querySelectorAll('h2')];
    const credibilityHeading = headings.find((h) => {
      const text = (h.textContent || '').toLowerCase();
      return text.includes('european sustainability') || text.includes('expertise européenne');
    });
    if (!credibilityHeading) return;

    const container = credibilityHeading.parentElement;
    if (!container) return;

    const logos = document.createElement('div');
    logos.className = 'gcf-trust-logos';
    logos.setAttribute('data-gcf-trust-logos', 'true');
    logos.innerHTML = `
      <div class="gcf-trust-logo-card">
        <img class="gcf-exaptation-logo" src="/exaptation-logo.png" alt="Exaptation Studio by LGI">
      </div>
      <div class="gcf-trust-logo-card" title="LGI Sustainable Innovation — 20 years of impact">
        <img class="gcf-lgi-logo" src="/lgi-20-years.jpg" alt="LGI Sustainable Innovation — 20 years of impact">
      </div>
    `;
    container.appendChild(logos);
  };

  const addVisibleContact = () => {
    if (document.querySelector('[data-gcf-contact-email]')) return;
    const finalLinks = [...document.querySelectorAll('a[href^="mailto:"]')];
    const anchor = finalLinks[finalLinks.length - 1];
    if (!anchor || !anchor.parentElement) return;
    const email = document.createElement('a');
    email.href = `mailto:${EMAIL}`;
    email.className = 'gcf-contact-email';
    email.setAttribute('data-gcf-contact-email', 'true');
    email.textContent = EMAIL;
    anchor.parentElement.appendChild(document.createElement('br'));
    anchor.parentElement.appendChild(email);
  };

  const normalizeEmailLinks = () => {
    document.querySelectorAll('a[href^="mailto:"]').forEach((a) => {
      const current = a.getAttribute('href') || '';
      const subject = current.includes('subject=') ? current.split('subject=')[1] : '';
      a.setAttribute('href', `mailto:${EMAIL}${subject ? `?subject=${subject}` : ''}`);
    });
  };

  const addStructuredData = () => {
    const details = [...document.querySelectorAll('details')];
    const faqItems = details.map((detail) => {
      const summary = detail.querySelector('summary');
      const answer = detail.querySelector('p');
      const q = summary?.textContent?.trim();
      const a = answer?.textContent?.trim();
      return q && a ? {
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      } : null;
    }).filter(Boolean);

    const graph = [
      {
        '@type': 'Organization',
        '@id': 'https://exaptation.studio/#organization',
        name: 'Exaptation Studio',
        url: 'https://exaptation.studio/',
        email: EMAIL,
        parentOrganization: {
          '@type': 'Organization',
          name: 'LGI Sustainable Innovation',
          url: 'https://lgi.earth/'
        }
      },
      {
        '@type': 'Service',
        '@id': 'https://exaptation.studio/green-claims-fix/#service',
        name: 'Green Claims Fix',
        url: 'https://exaptation.studio/green-claims-fix/',
        description: 'Green Claims Fix helps brands identify environmental marketing claims, map the evidence needed to substantiate them, identify evidence gaps and prepare clearer evidence-aligned wording.',
        provider: { '@id': 'https://exaptation.studio/#organization' },
        areaServed: ['European Union', 'France'],
        serviceType: 'Environmental claims screening and evidence readiness'
      }
    ];

    if (faqItems.length) {
      graph.push({ '@type': 'FAQPage', mainEntity: faqItems });
    }

    let script = document.getElementById('gcf-structured-data');
    if (!script) {
      script = document.createElement('script');
      script.id = 'gcf-structured-data';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
  };

  const ensureSeoMeta = () => {
    const upsertMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    upsertMeta('robots', 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://exaptation.studio/green-claims-fix/');
  };

  const enhanceGreenClaimsFix = () => {
    if (!location.pathname.startsWith(GCF_PATH)) return;
    ensureStyles();
    normalizeEmailLinks();

    const offers = document.querySelector('#offers');
    offers?.querySelectorAll('article').forEach((card) => card.classList.add('gcf-price-card'));

    addTrustLogos();
    addVisibleContact();
    addStructuredData();
    ensureSeoMeta();
  };

  const apply = () => {
    enhanceHomeCard();
    enhanceGreenClaimsFix();
  };

  let scheduled = false;
  const observer = new MutationObserver(() => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      apply();
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    apply();
    observer.observe(document.documentElement, { childList: true, subtree: true });
    setTimeout(apply, 250);
    setTimeout(apply, 1000);
  });
})();
