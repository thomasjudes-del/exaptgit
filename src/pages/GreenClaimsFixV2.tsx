import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
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
    offersTitle: 'Choose the level that matches the stakes.',
    offersSubtitle: 'Start small, review a full set of priority claims, or add expert human review.',
    bronzeName: 'Quick Fix',
    bronzePrice: '€39',
    bronzeTagline: 'A fast review of your highest-priority claims.',
    bronzeFeatures: ['Up to 5 priority claims', 'Why each claim needs attention', 'Official source or rule reference', 'Evidence checklist', 'Recommended next action'],
    bronzeCta: 'Get Quick Fix',
    silverName: 'Green Claims Fix',
    silverPrice: '€249',
    silverTag: 'Best for brands',
    silverTagline: 'A structured review of claims, evidence and remediation actions.',
    silverFeatures: ['Up to 25 priority claims', 'Claim-to-evidence mapping', 'Evidence-gap analysis', 'Supplier evidence requests', 'Clearer wording suggestions', 'Green Claims Evidence Pack'],
    silverCta: 'Start Green Claims Fix',
    goldName: 'Expert Review',
    goldPrice: 'From €1,490',
    goldTagline: 'Add a human review when the claims or campaign carry more risk.',
    goldFeatures: ['Everything in Green Claims Fix', 'Human review of priority claims', 'Review of supporting documents', 'Consolidated action file', 'Review call', 'Recheck after changes'],
    goldCta: 'Request Expert Review',
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
      ['What does Green Claims Fix deliver?', 'Depending on the offer, you receive a prioritised claim review, source references, an evidence checklist or evidence-gap analysis, recommended actions and wording suggestions. The Green Claims Fix offer also includes a structured Evidence Pack.'],
      ['Which rules are considered?', 'The service focuses first on France and the EU consumer-law framework, including Directive (EU) 2024/825, together with relevant official national guidance.'],
      ['Can you review an entire website?', 'Yes. The Green Claims Fix offer is designed to review public website content and prioritise the environmental claims that warrant further attention.'],
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
    offersTitle: 'Choisissez le niveau adapté à vos enjeux.',
    offersSubtitle: 'Commencez par quelques claims, passez en revue vos principales allégations ou ajoutez une revue humaine experte.',
    bronzeName: 'Quick Fix',
    bronzePrice: '39 €',
    bronzeTagline: 'Une revue rapide de vos claims les plus prioritaires.',
    bronzeFeatures: ['Jusqu’à 5 claims prioritaires', 'Pourquoi chaque claim mérite attention', 'Source officielle ou règle associée', 'Checklist des preuves', 'Action recommandée'],
    bronzeCta: 'Obtenir Quick Fix',
    silverName: 'Green Claims Fix',
    silverPrice: '249 €',
    silverTag: 'Idéal pour une marque',
    silverTagline: 'Une revue structurée de vos claims, preuves et actions correctives.',
    silverFeatures: ['Jusqu’à 25 claims prioritaires', 'Mapping claim ↔ preuve', 'Analyse des preuves manquantes', 'Demandes de justificatifs fournisseurs', 'Suggestions de formulations plus précises', 'Green Claims Evidence Pack'],
    silverCta: 'Lancer Green Claims Fix',
    goldName: 'Expert Review',
    goldPrice: 'À partir de 1 490 €',
    goldTagline: 'Ajoutez une revue humaine lorsque l’enjeu du claim ou de la campagne est plus élevé.',
    goldFeatures: ['Tout Green Claims Fix', 'Revue humaine des claims prioritaires', 'Revue des justificatifs', 'Plan d’action consolidé', 'Échange de restitution', 'Recheck après modifications'],
    goldCta: 'Demander une Expert Review',
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
      ['Que reçoit-on avec Green Claims Fix ?', 'Selon l’offre choisie : revue priorisée des claims, références aux sources, checklist ou analyse des preuves manquantes, actions recommandées et suggestions de formulations. L’offre Green Claims Fix comprend également un Evidence Pack structuré.'],
      ['Quelles règles sont prises en compte ?', 'Le service se concentre d’abord sur la France et le cadre européen du droit de la consommation, notamment la directive (UE) 2024/825, ainsi que les orientations officielles nationales pertinentes.'],
      ['Pouvez-vous revoir l’ensemble d’un site web ?', 'Oui. L’offre Green Claims Fix est conçue pour examiner les contenus publics d’un site et prioriser les allégations environnementales qui nécessitent une attention supplémentaire.'],
      ['Est-ce que Green Claims Fix remplace un avocat ou une certification ?', 'Non. Green Claims Fix aide à préparer et documenter vos allégations. Il ne délivre pas d’avis juridique, de certification ni de garantie de conformité.'],
    ],
    finalTitle: 'Avant votre prochaine campagne, sachez quels claims vous pouvez réellement défendre.',
    finalText: 'Envoyez-nous votre site et choisissez le niveau de revue adapté à votre besoin.',
    finalCta: 'Faire revoir mes claims',
  },
} as const;

const mailto = 'mailto:thomas@exaptation.studio?subject=Green%20Claims%20Fix';
const directiveUrl = 'https://eur-lex.europa.eu/eli/dir/2024/825/oj';

const GreenClaimsFixV2: React.FC = () => {
  const [lang, setLang] = useState<Language>('fr');
  const t = copy[lang];

  useEffect(() => {
    document.title = 'Green Claims Fix | Exaptation';
    const description = lang === 'fr'
      ? 'Green Claims Fix aide les marques à identifier, documenter et corriger leurs allégations environnementales en France et dans l’Union européenne.'
      : 'Green Claims Fix helps brands identify, substantiate and remediate environmental marketing claims in France and the European Union.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);

    const old = document.getElementById('green-claims-fix-schema');
    old?.remove();
    const script = document.createElement('script');
    script.id = 'green-claims-fix-schema';
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Green Claims Fix',
      provider: { '@type': 'Organization', name: 'Exaptation Studio', parentOrganization: { '@type': 'Organization', name: 'LGI Sustainable Innovation' } },
      areaServed: ['France', 'European Union'],
      description,
      offers: [
        { '@type': 'Offer', name: 'Quick Fix', price: '39', priceCurrency: 'EUR' },
        { '@type': 'Offer', name: 'Green Claims Fix', price: '249', priceCurrency: 'EUR' },
      ],
    });
    document.head.appendChild(script);
    return () => script.remove();
  }, [lang]);

  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-emerald-300 selection:text-slate-950">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white"><ArrowLeft size={16}/>{t.back}</a>
          <div className="flex items-center gap-3">
            <button onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white/70 hover:text-white"><Globe2 size={14}/>{lang === 'fr' ? 'EN' : 'FR'}</button>
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

      <section id="pricing" className="bg-slate-100 py-20 text-slate-950 md:py-28"><div className="mx-auto max-w-7xl px-6"><div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">{t.offersEyebrow}</p><h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">{t.offersTitle}</h2><p className="mt-5 text-lg text-slate-600">{t.offersSubtitle}</p></div><div className="mt-12 grid gap-6 lg:grid-cols-3">
        <OfferCard name={t.bronzeName} price={t.bronzePrice} tagline={t.bronzeTagline} features={t.bronzeFeatures} cta={t.bronzeCta}/>
        <OfferCard name={t.silverName} price={t.silverPrice} tagline={t.silverTagline} features={t.silverFeatures} cta={t.silverCta} featured tag={t.silverTag}/>
        <OfferCard name={t.goldName} price={t.goldPrice} tagline={t.goldTagline} features={t.goldFeatures} cta={t.goldCta}/>
      </div><p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-relaxed text-slate-500">{t.disclaimer}</p></div></section>

      <section className="bg-white py-20 text-slate-950 md:py-24"><div className="mx-auto max-w-7xl px-6"><div className="grid gap-10 lg:grid-cols-2 lg:items-center"><div><h2 className="text-3xl font-bold tracking-tight md:text-5xl">{t.whoTitle}</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">{t.whoText}</p></div><div className="flex flex-wrap gap-3 lg:justify-end">{t.channels.map(channel => <span key={channel} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">{channel}</span>)}</div></div></div></section>

      <section className="border-y border-white/10 py-20 md:py-24"><div className="mx-auto max-w-7xl px-6"><div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">{t.trustEyebrow}</p><h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">{t.trustTitle}</h2><p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">{t.trustText}</p></div><div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">{t.stats.map(([value,label]) => <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-5"><p className="text-3xl font-bold text-emerald-400">{value}</p><p className="mt-1 text-sm leading-relaxed text-slate-400">{label}</p></div>)}</div></div><div className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 md:p-9"><div className="flex items-start gap-4"><ShieldCheck className="mt-1 shrink-0 text-emerald-400"/><div><h3 className="text-2xl font-bold">{t.methodTitle}</h3><p className="mt-3 max-w-4xl leading-relaxed text-slate-300">{t.methodText}</p></div></div></div></div></section>

      <section className="bg-slate-100 py-20 text-slate-950 md:py-24"><div className="mx-auto max-w-4xl px-6"><h2 className="text-4xl font-bold tracking-tight md:text-6xl">{t.faqTitle}</h2><div className="mt-10 divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white px-6 md:px-8">{t.faqs.map(([q,a]) => <details key={q} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold"><span>{q}</span><ChevronDown size={18} className="shrink-0 text-slate-400 transition group-open:rotate-180"/></summary><p className="max-w-3xl pt-4 leading-relaxed text-slate-600">{a}</p></details>)}</div></div></section>

      <section className="relative overflow-hidden py-20 md:py-28"><div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.16),transparent_40%)]"/><div className="relative mx-auto max-w-5xl px-6 text-center"><UserCheck className="mx-auto text-emerald-400" size={36}/><h2 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">{t.finalTitle}</h2><p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">{t.finalText}</p><a href={mailto} className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-400 px-7 py-4 font-bold text-slate-950 hover:bg-emerald-300">{t.finalCta}<ArrowRight size={18}/></a></div></section>

      <footer className="border-t border-white/10 py-8"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between"><p>Green Claims Fix · Exaptation Studio</p><a href="https://lgi.earth" target="_blank" rel="noopener noreferrer" className="hover:text-white">LGI Sustainable Innovation</a></div></footer>
    </main>
  );
};

const OfferCard = ({name,price,tagline,features,cta,featured=false,tag}:{name:string;price:string;tagline:string;features:readonly string[];cta:string;featured?:boolean;tag?:string}) => (
  <article className={`relative flex flex-col rounded-3xl p-7 ${featured ? 'border-2 border-emerald-500 bg-slate-950 text-white shadow-2xl shadow-emerald-900/15 lg:-translate-y-3' : 'border border-slate-200 bg-white shadow-sm'}`}>
    {tag && <span className="absolute right-6 top-6 rounded-full bg-emerald-400 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-950">{tag}</span>}
    <h3 className="text-2xl font-bold">{name}</h3><p className="mt-3 text-4xl font-bold">{price}</p><p className={`mt-4 min-h-16 ${featured ? 'text-slate-300' : 'text-slate-600'}`}>{tagline}</p><div className={`my-7 h-px ${featured ? 'bg-white/10' : 'bg-slate-100'}`}/><div className="space-y-3">{features.map(item => <p key={item} className={`flex items-start gap-2 text-sm ${featured ? 'text-slate-200' : 'text-slate-700'}`}><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-500"/>{item}</p>)}</div><a href={mailto} className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold ${featured ? 'bg-emerald-400 text-slate-950 hover:bg-emerald-300' : 'border border-slate-300 hover:border-slate-950 hover:bg-slate-950 hover:text-white'}`}>{cta}</a>
  </article>
);

export default GreenClaimsFixV2;
