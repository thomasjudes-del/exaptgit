import React, { useEffect } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  FileCheck2,
  FileSearch,
  Globe2,
  Link2,
  Search,
  ShieldCheck,
  UserCheck,
} from 'lucide-react';

type Language = 'en' | 'fr';

type GreenClaimsFixProps = {
  initialLang?: Language;
};

const copy = {
  en: {
    back: 'Exaptation Studio',
    venture: 'An Exaptation venture · backed by LGI Sustainable Innovation',
    eyebrow: 'Green claims review for EU-facing brands',
    title: 'Know which environmental claims need evidence — and what to do next.',
    subtitle: 'Green Claims Fix reviews your public environmental claims, identifies evidence gaps and returns a prioritised action file with the proof to collect and clearer wording to consider.',
    primary: 'Review my claims',
    secondary: 'See pricing',
    reassurance: ['France & EU focus', 'One-off review', 'Official sources cited'],
    regulation: 'Environmental claims must be clear, precise and supported. EU consumer rules on green claims tighten from 27 September 2026.',
    regulationLink: 'Read the EU directive',
    exampleLabel: 'What you receive',
    exampleTitle: 'From a vague claim to a clear next action.',
    claimLabel: 'Claim found',
    claim: '“Our packaging is eco-friendly.”',
    status: 'Review recommended',
    why: 'The environmental benefit is broad and the scope is unclear. The claim needs a more specific basis and supporting evidence.',
    evidenceLabel: 'Evidence to check',
    evidence: ['Packaging composition', 'Recycled-content percentage', 'Supplier or certification evidence'],
    actionLabel: 'Possible action',
    action: '“Packaging made with 82% recycled fibre.”',
    actionNote: 'Example only. Suggested wording always depends on the evidence actually available.',
    processTitle: 'Find. Prove. Fix.',
    findTitle: 'Find',
    findText: 'We identify environmental claims in your website, product pages and other public marketing content.',
    proveTitle: 'Prove',
    proveText: 'We show what evidence supports each priority claim — and what is still missing.',
    fixTitle: 'Fix',
    fixText: 'You receive prioritised actions, evidence requests and clearer wording to consider.',
    offersEyebrow: 'Pricing',
    offersTitle: 'Choose the answer you need next.',
    offersSubtitle: 'Start with a focused action plan, map claims to evidence, or add expert human review for higher-stakes communications.',
    bronzeTier: 'Bronze',
    bronzeName: 'Quick Fix',
    bronzePrice: '€39',
    bronzeOutcome: 'Know what to fix next.',
    bronzeTagline: 'A focused review of up to 5 priority claims, with the reason each needs attention and the concrete next action.',
    bronzeFeatures: ['Up to 5 priority claims', 'Why each claim deserves attention', 'Official source or rule behind the flag', 'Evidence to collect or request', 'Recommended next action'],
    bronzeCta: 'Get Bronze',
    silverTier: 'Silver',
    silverName: 'Green Claims Fix',
    silverPrice: '€249',
    silverTag: 'Full review',
    silverOutcome: 'Know what you can substantiate — and with what evidence.',
    silverTagline: 'Map up to 25 priority claims to evidence, identify the gaps and prepare clearer evidence-aligned wording.',
    silverFeatures: ['Up to 25 priority claims', 'Claim-to-evidence mapping', 'What is supported vs. what is still missing', 'Supplier evidence requests', 'Clearer wording suggestions', 'Green Claims Evidence Pack'],
    silverCta: 'Start Silver',
    goldTier: 'Gold',
    goldName: 'Expert Review',
    goldPrice: 'From €1,490',
    goldOutcome: 'Add expert human review before higher-stakes use.',
    goldTagline: 'Use the full Green Claims Fix review with expert scrutiny of priority claims, evidence and remediation choices.',
    goldFeatures: ['Everything in Silver', 'Human review of priority claims', 'Review of supporting documents', 'Consolidated action file', 'Review call', 'Recheck after changes'],
    goldCta: 'Request Gold',
    disclaimer: 'Green Claims Fix supports claim review, substantiation preparation and remediation. It is not legal advice, certification or assurance.',
    whoTitle: 'For consumer brands that already communicate environmental benefits.',
    whoText: 'Useful when your marketing refers to recycled content, sustainability, climate, circularity, materials, packaging, durability or other environmental characteristics.',
    channels: ['Websites', 'Product pages', 'Packaging', 'Ads & campaigns', 'Marketplace listings'],
    trustEyebrow: 'Built by Exaptation',
    trustTitle: 'European sustainability expertise behind every review.',
    trustText: 'Green Claims Fix is an Exaptation venture, backed by LGI Sustainable Innovation. LGI has worked on sustainable innovation since 2005 and on more than 150 international and European innovation missions and projects.',
    stats: [['20+', 'years of sustainable innovation'], ['150+', 'international & European missions and projects'], ['EU', 'consumer-law and sustainability focus']],
    methodTitle: 'Traceable sources. Evidence before conclusions.',
    methodText: 'Each priority flag is linked to the relevant official source or rule basis. The review considers the wording, scope and supporting evidence together rather than treating individual words as automatic violations.',
    faqTitle: 'Green claims FAQ',
    faqs: [
      ['What is a green claim?', 'A green claim is a commercial statement or representation suggesting that a product, service, brand or business has an environmental benefit, a lower environmental impact or an improved environmental performance.'],
      ['How do I know whether my green claims are sufficiently substantiated?', 'The key questions are what the claim precisely means, what it covers and whether the available evidence directly supports that wording and scope. Green Claims Fix organises those checks claim by claim.'],
      ['What does Green Claims Fix deliver?', 'Bronze tells you what needs attention and what to do next for up to 5 priority claims. Silver maps up to 25 claims to evidence, identifies gaps and prepares an Evidence Pack. Gold adds expert human review, document review, a consolidated action file and a recheck after changes.'],
      ['Which rules are considered?', 'The service focuses first on France and the EU consumer-law framework, including Directive (EU) 2024/825, together with relevant official national guidance.'],
      ['Can you review an entire website?', 'Yes. The Silver offer is designed to review public website content and prioritise the environmental claims that warrant further attention.'],
      ['Does this replace legal advice or certification?', 'No. Green Claims Fix helps you prepare and document your claims. It does not issue legal opinions, certifications or guarantees of compliance.'],
    ],
    finalTitle: 'Before your next campaign, know which claims you can stand behind.',
    finalText: 'Send us your website and choose the level of review that fits your needs.',
    finalCta: 'Review my claims',
  },
  fr: {
    back: 'Exaptation Studio',
    venture: 'Une venture Exaptation · soutenue par LGI Sustainable Innovation',
    eyebrow: 'Revue des allégations environnementales · France & UE',
    title: 'Identifiez les claims environnementaux à documenter — et ce qu’il faut faire ensuite.',
    subtitle: 'Green Claims Fix passe en revue vos allégations environnementales publiques, identifie les preuves manquantes et vous remet un plan d’action priorisé avec les justificatifs à réunir et des formulations plus précises à envisager.',
    primary: 'Faire revoir mes claims',
    secondary: 'Voir les tarifs',
    reassurance: ['France & UE', 'Mission ponctuelle', 'Sources officielles citées'],
    regulation: 'Une allégation environnementale doit être claire, précise et justifiée. Le cadre européen se renforce à partir du 27 septembre 2026.',
    regulationLink: 'Voir la directive européenne',
    exampleLabel: 'Ce que vous recevez',
    exampleTitle: 'D’un claim vague à une action concrète.',
    claimLabel: 'Claim identifié',
    claim: '« Notre emballage est éco-responsable. »',
    status: 'Revue recommandée',
    why: 'Le bénéfice environnemental est large et son périmètre n’est pas clair. Le claim nécessite une base plus précise et des éléments de preuve adaptés.',
    evidenceLabel: 'Éléments à vérifier',
    evidence: ['Composition de l’emballage', 'Pourcentage de contenu recyclé', 'Justificatif fournisseur ou certification'],
    actionLabel: 'Action possible',
    action: '« Emballage composé à 82 % de fibres recyclées. »',
    actionNote: 'Exemple illustratif. Toute suggestion de formulation dépend des preuves réellement disponibles.',
    processTitle: 'Find. Prove. Fix.',
    findTitle: 'Find',
    findText: 'Nous identifions les allégations environnementales sur votre site, vos fiches produits et vos contenus marketing publics.',
    proveTitle: 'Prove',
    proveText: 'Nous indiquons ce qui justifie chaque claim prioritaire — et les éléments qui manquent encore.',
    fixTitle: 'Fix',
    fixText: 'Vous recevez des actions priorisées, les preuves à demander et des formulations plus précises à envisager.',
    offersEyebrow: 'Tarifs',
    offersTitle: 'Choisissez le niveau de réponse dont vous avez besoin.',
    offersSubtitle: 'Commencez par un plan d’action ciblé, reliez vos claims à leurs preuves, ou ajoutez une revue humaine pour les communications à plus fort enjeu.',
    bronzeTier: 'Bronze',
    bronzeName: 'Quick Fix',
    bronzePrice: '39 €',
    bronzeOutcome: 'Savoir quoi corriger maintenant.',
    bronzeTagline: 'Une revue ciblée de jusqu’à 5 claims prioritaires, avec la raison du point d’attention et l’action concrète à mener ensuite.',
    bronzeFeatures: ['Jusqu’à 5 claims prioritaires', 'Pourquoi chaque claim mérite attention', 'Source officielle ou règle à l’origine du point d’attention', 'Preuves à réunir ou à demander', 'Action recommandée'],
    bronzeCta: 'Obtenir Bronze',
    silverTier: 'Argent',
    silverName: 'Green Claims Fix',
    silverPrice: '249 €',
    silverTag: 'Revue complète',
    silverOutcome: 'Savoir ce que vous pouvez défendre — et avec quelles preuves.',
    silverTagline: 'Reliez jusqu’à 25 claims prioritaires aux preuves disponibles, identifiez les manques et préparez des formulations plus précisément étayées.',
    silverFeatures: ['Jusqu’à 25 claims prioritaires', 'Mapping claim ↔ preuve', 'Ce qui est étayé vs. ce qui manque encore', 'Demandes de justificatifs fournisseurs', 'Suggestions de formulations plus précises', 'Green Claims Evidence Pack'],
    silverCta: 'Lancer Argent',
    goldTier: 'Gold',
    goldName: 'Expert Review',
    goldPrice: 'À partir de 1 490 €',
    goldOutcome: 'Ajouter un regard expert avant un usage à plus fort enjeu.',
    goldTagline: 'Utilisez la revue Green Claims Fix complète avec une analyse humaine des claims prioritaires, des preuves et des choix de correction.',
    goldFeatures: ['Tout Argent', 'Revue humaine des claims prioritaires', 'Revue des justificatifs', 'Plan d’action consolidé', 'Échange de restitution', 'Recheck après modifications'],
    goldCta: 'Demander Gold',
    disclaimer: 'Green Claims Fix aide à revoir, documenter et préparer la correction des allégations environnementales. Il ne constitue ni un avis juridique, ni une certification, ni une assurance de conformité.',
    whoTitle: 'Pour les marques grand public qui communiquent déjà sur des bénéfices environnementaux.',
    whoText: 'Particulièrement utile lorsque vos communications parlent de contenu recyclé, durabilité, climat, circularité, matériaux, packaging, longévité ou autres caractéristiques environnementales.',
    channels: ['Sites web', 'Fiches produits', 'Packaging', 'Publicités & campagnes', 'Marketplaces'],
    trustEyebrow: 'Créé par Exaptation',
    trustTitle: 'Une expertise européenne en innovation durable derrière chaque revue.',
    trustText: 'Green Claims Fix est une venture Exaptation, soutenue par LGI Sustainable Innovation. LGI travaille sur l’innovation durable depuis 2005 et a mené plus de 150 missions et projets internationaux et européens en innovation.',
    stats: [['20+', 'ans d’innovation durable'], ['150+', 'missions et projets internationaux & européens'], ['UE', 'focus droit de la consommation & durabilité']],
    methodTitle: 'Sources traçables. Les preuves avant les conclusions.',
    methodText: 'Chaque point prioritaire est relié à une source officielle ou à une base réglementaire identifiable. La revue examine ensemble la formulation, son périmètre et les preuves disponibles, plutôt que de considérer qu’un mot isolé constitue automatiquement une infraction.',
    faqTitle: 'FAQ Green Claims',
    faqs: [
      ['Qu’est-ce qu’une allégation environnementale ou green claim ?', 'Il s’agit d’un message commercial suggérant qu’un produit, un service, une marque ou une entreprise présente un bénéfice environnemental, un impact plus faible ou une amélioration de sa performance environnementale.'],
      ['Comment savoir si mes allégations sont suffisamment justifiées ?', 'Il faut vérifier ce que le claim signifie précisément, ce qu’il couvre et si les éléments disponibles soutiennent directement cette formulation et ce périmètre. Green Claims Fix organise ces vérifications claim par claim.'],
      ['Que reçoit-on avec Green Claims Fix ?', 'Bronze vous dit ce qui mérite attention et quoi faire ensuite pour jusqu’à 5 claims prioritaires. Argent relie jusqu’à 25 claims aux preuves, identifie les manques et prépare un Evidence Pack. Gold ajoute une revue humaine, l’examen des justificatifs, un plan consolidé et un recheck après modifications.'],
      ['Quelles règles sont prises en compte ?', 'Le service se concentre d’abord sur la France et le cadre européen du droit de la consommation, notamment la directive (UE) 2024/825, ainsi que les orientations officielles nationales pertinentes.'],
      ['Pouvez-vous revoir l’ensemble d’un site web ?', 'Oui. L’offre Argent est conçue pour examiner les contenus publics d’un site et prioriser les allégations environnementales qui nécessitent une attention supplémentaire.'],
      ['Est-ce que Green Claims Fix remplace un avocat ou une certification ?', 'Non. Green Claims Fix aide à préparer et documenter vos allégations. Il ne délivre pas d’avis juridique, de certification ni de garantie de conformité.'],
    ],
    finalTitle: 'Avant votre prochaine campagne, sachez quels claims vous pouvez réellement défendre.',
    finalText: 'Envoyez-nous votre site et choisissez le niveau de revue adapté à votre besoin.',
    finalCta: 'Faire revoir mes claims',
  },
} as const;

const frLibrary = {
  eyebrow: 'Green Claims Library',
  title: 'Les règles, claim par claim.',
  subtitle: 'Des guides courts et sourcés pour comprendre ce qu’un claim implique, ce qu’il faut pouvoir démontrer et ce qui change en 2026.',
  guides: [
    {
      label: 'Claims génériques',
      title: 'Peut-on encore dire « éco-responsable », « écologique », « green » ou « durable » en 2026 ?',
      text: 'Ce qui est déjà encadré en France, ce qui change au 27 septembre 2026 et quand un claim générique peut rester défendable.',
      href: '/fr/green-claims-fix/guides/eco-responsable-ecologique-green-durable/',
    },
    {
      label: 'Claims carbone',
      title: '« Neutre en carbone », « zéro carbone » : ce qui change en 2026.',
      text: 'Le régime français actuel, les claims fondés sur la compensation, les réductions réelles et les nouvelles interdictions européennes.',
      href: '/fr/green-claims-fix/guides/neutre-carbone-zero-carbone/',
    },
  ],
  read: 'Lire le guide',
  all: 'Voir tous les guides',
} as const;

const mailto = 'mailto:thomas@exaptation.studio?subject=Green%20Claims%20Fix';
const directiveUrl = 'https://eur-lex.europa.eu/eli/dir/2024/825/oj';
const frUrl = 'https://exaptation.studio/fr/green-claims-fix/';
const enUrl = 'https://exaptation.studio/en/green-claims-fix/';

const GreenClaimsFixV2: React.FC<GreenClaimsFixProps> = ({ initialLang = 'fr' }) => {
  const lang = initialLang;
  const t = copy[lang];
  const canonicalUrl = lang === 'fr' ? frUrl : enUrl;
  const alternateUrl = lang === 'fr' ? enUrl : frUrl;
  const alternateLabel = lang === 'fr' ? 'EN' : 'FR';

  useEffect(() => {
    const description = lang === 'fr'
      ? 'Identifiez les allégations environnementales à revoir, les preuves à réunir et les actions à mener pour vos communications en France et dans l’Union européenne.'
      : 'Identify environmental claims to review, the evidence to collect and the actions to take for communications in France and the European Union.';
    const title = lang === 'fr'
      ? 'Green Claims Fix | Revue des allégations environnementales France & UE'
      : 'Green Claims Fix | Environmental claims review for France & the EU';

    document.documentElement.lang = lang;
    document.title = title;

    const upsertMeta = (selector: string, attr: 'name' | 'property', key: string, value: string) => {
      let element = document.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', value);
    };

    const upsertLink = (selector: string, rel: string, href: string, hreflang?: string) => {
      let element = document.querySelector<HTMLLinkElement>(selector);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        if (hreflang) element.setAttribute('hreflang', hreflang);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    upsertMeta('meta[name="description"]', 'name', 'description', description);
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', title);
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', description);
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', 'website');
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', 'https://exaptation.studio/green-claims-fix-card.jpg');
    upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', 'https://exaptation.studio/green-claims-fix-card.jpg');
    upsertLink('link[rel="canonical"]', 'canonical', canonicalUrl);
    upsertLink('link[rel="alternate"][hreflang="fr"]', 'alternate', frUrl, 'fr');
    upsertLink('link[rel="alternate"][hreflang="en"]', 'alternate', enUrl, 'en');
    upsertLink('link[rel="alternate"][hreflang="x-default"]', 'alternate', frUrl, 'x-default');

    const old = document.getElementById('green-claims-fix-schema');
    old?.remove();
    const script = document.createElement('script');
    script.id = 'green-claims-fix-schema';
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Green Claims Fix',
      url: canonicalUrl,
      provider: {
        '@type': 'Organization',
        name: 'Exaptation Studio',
        parentOrganization: { '@type': 'Organization', name: 'LGI Sustainable Innovation' },
      },
      areaServed: ['France', 'European Union'],
      description,
      offers: [
        { '@type': 'Offer', name: lang === 'fr' ? 'Bronze — Quick Fix' : 'Bronze — Quick Fix', price: '39', priceCurrency: 'EUR' },
        { '@type': 'Offer', name: lang === 'fr' ? 'Argent — Green Claims Fix' : 'Silver — Green Claims Fix', price: '249', priceCurrency: 'EUR' },
        { '@type': 'Offer', name: 'Gold — Expert Review', price: '1490', priceCurrency: 'EUR' },
      ],
    });
    document.head.appendChild(script);
    return () => script.remove();
  }, [lang, canonicalUrl]);

  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-emerald-300 selection:text-slate-950">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href={canonicalUrl} className="inline-flex items-baseline gap-2.5" aria-label="Green Claims Fix — by Exaptation">
            <span className="text-base font-black tracking-tight text-white sm:text-lg">Green Claims Fix</span>
            <span className="hidden text-xs font-semibold text-white/45 sm:inline">by Exaptation</span>
          </a>
          <div className="flex items-center gap-3">
            <a href={alternateUrl} hrefLang={lang === 'fr' ? 'en' : 'fr'} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white/70 hover:text-white"><Globe2 size={14}/>{alternateLabel}</a>
            <a href={mailto} className="hidden rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-950 hover:bg-emerald-300 sm:inline-flex">{t.primary}</a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(16,185,129,0.18),transparent_30%),radial-gradient(circle_at_20%_70%,rgba(59,130,246,0.10),transparent_35%)]"/>
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="max-w-5xl">
            <span className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-300">{t.venture}</span>
            <p className="mb-5 mt-7 text-sm font-bold uppercase tracking-[0.22em] text-emerald-400">{t.eyebrow}</p>
            <h1 className="max-w-5xl text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">{t.title}</h1>
            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-slate-300 md:text-2xl">{t.subtitle}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={mailto} className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 py-3.5 font-bold text-slate-950 hover:bg-emerald-300">{t.primary}<ArrowRight size={18}/></a>
              <a href="#pricing" className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 font-bold hover:bg-white/5">{t.secondary}</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">{t.reassurance.map(item => <span key={item} className="inline-flex items-center gap-2"><CheckCircle2 size={15} className="text-emerald-400"/>{item}</span>)}</div>
            <div className="mt-8 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-relaxed text-slate-300">{t.regulation} <a href={directiveUrl} target="_blank" rel="noreferrer" className="font-semibold text-emerald-300 underline decoration-emerald-300/40 underline-offset-4">{t.regulationLink}</a></div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-slate-950 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div><span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">{t.exampleLabel}</span><h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">{t.exampleTitle}</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">{t.processTitle}</p></div>
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-xl shadow-slate-200/40">
            <div className="border-b border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-slate-500">{t.claimLabel}</div>
            <div className="space-y-6 p-6 md:p-8">
              <div><div className="flex flex-wrap items-center gap-3"><p className="text-xl font-bold md:text-2xl">{t.claim}</p><span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-800">{t.status}</span></div><p className="mt-3 text-sm leading-relaxed text-slate-600">{t.why}</p></div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-5"><p className="text-xs font-bold uppercase tracking-wider text-slate-400">{t.evidenceLabel}</p><div className="mt-4 space-y-3">{t.evidence.map(item => <div key={item} className="flex items-start gap-2 text-sm text-slate-700"><Search size={15} className="mt-0.5 shrink-0 text-amber-600"/>{item}</div>)}</div></div>
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5"><p className="text-xs font-bold uppercase tracking-wider text-emerald-700">{t.actionLabel}</p><p className="mt-4 text-lg font-bold text-emerald-950">{t.action}</p><div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-800"><FileCheck2 size={16}/>Evidence matched to claim</div></div>
              </div>
              <p className="text-xs leading-relaxed text-slate-400">{t.actionNote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 py-20 md:py-24"><div className="mx-auto max-w-7xl px-6"><h2 className="mb-10 text-4xl font-bold tracking-tight md:text-6xl">{t.processTitle}</h2><div className="grid gap-6 md:grid-cols-3">
        <article className="rounded-3xl border border-white/10 bg-white/5 p-7"><FileSearch className="mb-5 text-emerald-400"/><h3 className="text-2xl font-bold">{t.findTitle}</h3><p className="mt-3 leading-relaxed text-slate-400">{t.findText}</p></article>
        <article className="rounded-3xl border border-white/10 bg-white/5 p-7"><Link2 className="mb-5 text-emerald-400"/><h3 className="text-2xl font-bold">{t.proveTitle}</h3><p className="mt-3 leading-relaxed text-slate-400">{t.proveText}</p></article>
        <article className="rounded-3xl border border-white/10 bg-white/5 p-7"><CheckCircle2 className="mb-5 text-emerald-400"/><h3 className="text-2xl font-bold">{t.fixTitle}</h3><p className="mt-3 leading-relaxed text-slate-400">{t.fixText}</p></article>
      </div></div></section>

      <section id="pricing" className="bg-slate-100 py-20 text-slate-950 md:py-28"><div className="mx-auto max-w-7xl px-6"><div className="max-w-4xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">{t.offersEyebrow}</p><h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">{t.offersTitle}</h2><p className="mt-5 text-lg text-slate-600">{t.offersSubtitle}</p></div><div className="mt-12 grid gap-6 lg:grid-cols-3">
        <OfferCard tier={t.bronzeTier} name={t.bronzeName} price={t.bronzePrice} outcome={t.bronzeOutcome} tagline={t.bronzeTagline} features={t.bronzeFeatures} cta={t.bronzeCta}/>
        <OfferCard tier={t.silverTier} name={t.silverName} price={t.silverPrice} outcome={t.silverOutcome} tagline={t.silverTagline} features={t.silverFeatures} cta={t.silverCta} featured tag={t.silverTag}/>
        <OfferCard tier={t.goldTier} name={t.goldName} price={t.goldPrice} outcome={t.goldOutcome} tagline={t.goldTagline} features={t.goldFeatures} cta={t.goldCta}/>
      </div><p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-relaxed text-slate-500">{t.disclaimer}</p></div></section>

      {lang === 'fr' && (
        <section className="bg-white py-16 text-slate-950 md:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">{frLibrary.eyebrow}</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">{frLibrary.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">{frLibrary.subtitle}</p>
              </div>
              <a href="/fr/green-claims-fix/guides/" className="inline-flex shrink-0 items-center gap-2 font-bold text-emerald-700 hover:text-emerald-900">{frLibrary.all}<ArrowRight size={17}/></a>
            </div>
            <div className="mt-9 grid gap-5 md:grid-cols-2">
              {frLibrary.guides.map(guide => (
                <article key={guide.href} className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 md:p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">{guide.label}</p>
                  <h3 className="mt-3 text-xl font-bold leading-snug md:text-2xl">{guide.title}</h3>
                  <p className="mt-4 leading-relaxed text-slate-600">{guide.text}</p>
                  <a href={guide.href} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-950 group-hover:text-emerald-700">{frLibrary.read}<ArrowRight size={16}/></a>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white py-20 text-slate-950 md:py-24"><div className="mx-auto max-w-7xl px-6"><div className="grid gap-10 lg:grid-cols-2 lg:items-center"><div><h2 className="text-3xl font-bold tracking-tight md:text-5xl">{t.whoTitle}</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">{t.whoText}</p></div><div className="flex flex-wrap gap-3 lg:justify-end">{t.channels.map(channel => <span key={channel} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">{channel}</span>)}</div></div></div></section>

      <section className="border-y border-white/10 py-20 md:py-24"><div className="mx-auto max-w-7xl px-6"><div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">{t.trustEyebrow}</p><h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">{t.trustTitle}</h2><p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">{t.trustText}</p></div><div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">{t.stats.map(([value,label]) => <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-5"><p className="text-3xl font-bold text-emerald-400">{value}</p><p className="mt-1 text-sm leading-relaxed text-slate-400">{label}</p></div>)}</div></div><div className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 md:p-9"><div className="flex items-start gap-4"><ShieldCheck className="mt-1 shrink-0 text-emerald-400"/><div><h3 className="text-2xl font-bold">{t.methodTitle}</h3><p className="mt-3 max-w-4xl leading-relaxed text-slate-300">{t.methodText}</p></div></div></div></div></section>

      <section className="bg-slate-100 py-20 text-slate-950 md:py-24"><div className="mx-auto max-w-4xl px-6"><h2 className="text-4xl font-bold tracking-tight md:text-6xl">{t.faqTitle}</h2><div className="mt-10 divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white px-6 md:px-8">{t.faqs.map(([q,a]) => <details key={q} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold"><span>{q}</span><ChevronDown size={18} className="shrink-0 text-slate-400 transition group-open:rotate-180"/></summary><p className="max-w-3xl pt-4 leading-relaxed text-slate-600">{a}</p></details>)}</div></div></section>

      <section className="relative overflow-hidden py-20 md:py-28"><div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.16),transparent_40%)]"/><div className="relative mx-auto max-w-5xl px-6 text-center"><UserCheck className="mx-auto text-emerald-400" size={36}/><h2 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">{t.finalTitle}</h2><p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">{t.finalText}</p><a href={mailto} className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-400 px-7 py-4 font-bold text-slate-950 hover:bg-emerald-300">{t.finalCta}<ArrowRight size={18}/></a></div></section>

      <footer className="border-t border-white/10 py-8"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between"><p>Green Claims Fix · Exaptation Studio</p><a href="https://lgi.earth" target="_blank" rel="noopener noreferrer" className="hover:text-white">LGI Sustainable Innovation</a></div></footer>
    </main>
  );
};

type OfferCardProps = {
  tier: string;
  name: string;
  price: string;
  outcome: string;
  tagline: string;
  features: readonly string[];
  cta: string;
  featured?: boolean;
  tag?: string;
};

const OfferCard = ({ tier, name, price, outcome, tagline, features, cta, featured = false, tag }: OfferCardProps) => (
  <article className={`relative flex flex-col rounded-3xl p-7 ${featured ? 'border-2 border-emerald-500 bg-slate-950 text-white shadow-2xl shadow-emerald-900/15 lg:-translate-y-3' : 'border border-slate-200 bg-white shadow-sm'}`}>
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className={`text-xs font-black uppercase tracking-[0.2em] ${featured ? 'text-emerald-400' : 'text-emerald-700'}`}>{tier}</p>
        <h3 className="mt-2 text-2xl font-bold">{name}</h3>
      </div>
      {tag && <span className="rounded-full bg-emerald-400 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-950">{tag}</span>}
    </div>
    <p className="mt-4 text-4xl font-bold">{price}</p>
    <p className={`mt-5 text-lg font-bold leading-snug ${featured ? 'text-white' : 'text-slate-950'}`}>{outcome}</p>
    <p className={`mt-3 min-h-20 text-sm leading-relaxed ${featured ? 'text-slate-300' : 'text-slate-600'}`}>{tagline}</p>
    <div className={`my-7 h-px ${featured ? 'bg-white/10' : 'bg-slate-100'}`}/>
    <div className="space-y-3">{features.map(item => <p key={item} className={`flex items-start gap-2 text-sm ${featured ? 'text-slate-200' : 'text-slate-700'}`}><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-500"/>{item}</p>)}</div>
    <a href={mailto} className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold ${featured ? 'bg-emerald-400 text-slate-950 hover:bg-emerald-300' : 'border border-slate-300 hover:border-slate-950 hover:bg-slate-950 hover:text-white'}`}>{cta}</a>
  </article>
);

export default GreenClaimsFixV2;
