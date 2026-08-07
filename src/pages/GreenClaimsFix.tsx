import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
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
    heroEyebrow: 'Green Claims Fix · France & EU',
    heroTitle: 'Find the green claims that need attention. Build the evidence behind them.',
    heroSubtitle:
      'Green Claims Fix helps brands identify environmental marketing claims, see what evidence is missing and prepare clearer, evidence-aligned wording and a structured substantiation file.',
    primaryCta: 'Talk to us',
    secondaryCta: 'See plans',
    reassurance: ['Official-source based', 'France + EU first', 'No subscription required'],
    exampleEyebrow: 'What you get',
    exampleTitle: 'From a vague claim to a documented next step.',
    exampleClaimLabel: 'Claim detected',
    exampleClaim: '“Our packaging is eco-friendly.”',
    exampleStatus: 'Needs attention',
    exampleWhy:
      'The environmental benefit is broad and the scope is unclear. The public wording does not show what evidence supports it.',
    missingLabel: 'Evidence to verify',
    missingItems: ['Packaging composition', 'Recycled-content data', 'Exact scope of the claim'],
    suggestedLabel: 'Evidence-aligned wording',
    suggested: '“Packaging made with 82% recycled fibre.”',
    exampleFootnote: 'Illustrative example. Final wording always depends on the evidence actually available.',
    processTitle: 'Find. Prove. Fix.',
    processSubtitle: 'A practical workflow from public claim to evidence file.',
    findTitle: 'Find',
    findText: 'Identify environmental claims across websites, product pages, packaging copy and campaigns.',
    proveTitle: 'Prove',
    proveText: 'Connect each priority claim to supporting documents and identify evidence gaps.',
    fixTitle: 'Fix',
    fixText: 'Clarify, substantiate or rewrite priority claims and prepare a structured evidence pack.',
    offersEyebrow: 'Choose your level',
    offersTitle: 'Three levels of support',
    offersSubtitle: 'Start small, go deeper when the commercial or regulatory stakes are higher.',
    bronzeName: 'Quick Fix',
    bronzePrice: '€39',
    bronzeTagline: 'A fast check of your priority claims.',
    bronzeFeatures: ['Up to 5 priority claims', 'Reason + source for each flag', 'Evidence checklist', 'Recommended next action'],
    bronzeCta: 'Choose Quick Fix',
    silverName: 'Green Claims Fix',
    silverPrice: '€249',
    silverTag: 'Most useful',
    silverTagline: 'Turn priority claims into an evidence-ready file.',
    silverFeatures: ['Up to 25 priority claims', 'Evidence-gap analysis', 'Guided evidence collection', 'Evidence-aligned wording suggestions', 'Structured Green Claims Evidence Pack'],
    silverCta: 'Choose Green Claims Fix',
    goldName: 'Expert Review',
    goldPrice: 'From €1,490',
    goldTagline: 'Add a human review when the stakes are higher.',
    goldFeatures: ['Everything in Green Claims Fix', 'Human review of priority claims', 'Review of supporting evidence', 'Reviewed action file', 'Recheck after changes'],
    goldCta: 'Discuss Expert Review',
    disclaimer: 'Green Claims Fix supports compliance preparation and evidence readiness. It is not legal advice, certification or assurance.',
    whoTitle: 'Built for brands already making environmental claims',
    whoText:
      'Especially useful for consumer brands communicating on recycled content, sustainability, climate, circularity, materials, packaging or other environmental benefits.',
    channels: ['Website', 'Product pages', 'Packaging', 'Ads & campaigns', 'Marketplaces'],
    trustEyebrow: 'Built by Exaptation · backed by LGI',
    trustTitle: 'Sustainability and European innovation experience behind the product.',
    trustText:
      'Green Claims Fix is an Exaptation venture. Exaptation is the startup studio of LGI Sustainable Innovation, bringing more than 20 years of European innovation and sustainability experience into the product.',
    stats: [
      ['20+', 'years of European innovation experience'],
      ['150+', 'European R&I projects'],
      ['EU', 'sustainability and regulation focus'],
    ],
    methodTitle: 'Evidence first. Sources visible.',
    methodText:
      'Flags are tied to traceable rules or official sources. The analysis focuses on what a claim says, what it covers and whether the available evidence actually supports that wording.',
    faqEyebrow: 'FAQ',
    faqTitle: 'Questions people ask about green claims',
    faqs: [
      ['What is a green claim?', 'A green claim is any statement, label or representation suggesting that a product, service or company has an environmental benefit or a lower environmental impact. It can appear on a website, product page, packaging, advertisement or marketplace listing.'],
      ['How do I check whether my environmental claims are properly substantiated?', 'For each priority claim, identify exactly what is being promised, define its scope and connect it to evidence that directly supports the wording. Green Claims Fix is designed to structure that process and surface missing or weak evidence.'],
      ['What evidence can support a green claim?', 'Depending on the claim, evidence may include supplier declarations, material or composition data, test results, certificates, lifecycle information, emissions data or other documentation that directly supports the wording and scope used in marketing.'],
      ['Which EU rules does Green Claims Fix consider?', 'The service is designed around the EU consumer-law framework for environmental claims, including Directive (EU) 2024/825 (EmpCo), together with relevant national guidance starting with France.'],
      ['What changes from 27 September 2026?', 'Directive (EU) 2024/825 requires Member States to apply the new consumer-protection measures from 27 September 2026. Existing rules against misleading environmental marketing already apply, so brands should not wait until that date to review claims.'],
      ['Can Green Claims Fix scan an ecommerce website?', 'Yes. The intended workflow starts from public website and product-page content, then prioritises environmental claims that need review. Coverage can also extend to packaging copy, campaigns and marketplace listings.'],
      ['Does Green Claims Fix replace a lawyer or certification body?', 'No. Green Claims Fix is a compliance-preparation and evidence-readiness service. It helps organise claims, evidence and remediation actions, but it does not provide legal advice, certification or assurance.'],
      ['How much does a green claims review cost?', 'Green Claims Fix currently offers three levels: Quick Fix at €39, Green Claims Fix at €249, and Expert Review from €1,490. The right level depends on the number of priority claims and whether human review is needed.'],
    ],
    finalTitle: 'Make your environmental claims easier to defend.',
    finalText: 'Send us your site or your priority claims and we will tell you which level fits best.',
    finalCta: 'Contact Green Claims Fix',
    contactLabel: 'Direct contact',
  },
  fr: {
    back: 'Exaptation Studio',
    heroEyebrow: 'Green Claims Fix · France & UE',
    heroTitle: 'Identifiez les green claims à examiner. Construisez les preuves qui les soutiennent.',
    heroSubtitle:
      'Green Claims Fix aide les marques à identifier leurs allégations environnementales, voir les preuves manquantes et préparer des formulations plus précises ainsi qu’un dossier de justification structuré.',
    primaryCta: 'Nous contacter',
    secondaryCta: 'Voir les offres',
    reassurance: ['Sources officielles', 'France + UE en priorité', 'Sans abonnement obligatoire'],
    exampleEyebrow: 'Ce que vous obtenez',
    exampleTitle: 'D’un claim vague à une prochaine action documentée.',
    exampleClaimLabel: 'Claim détecté',
    exampleClaim: '« Notre emballage est éco-responsable. »',
    exampleStatus: 'À examiner',
    exampleWhy:
      'Le bénéfice environnemental est trop large et le périmètre n’est pas clair. La formulation publique ne montre pas quelles preuves la soutiennent.',
    missingLabel: 'Preuves à vérifier',
    missingItems: ['Composition de l’emballage', 'Données de contenu recyclé', 'Périmètre exact du claim'],
    suggestedLabel: 'Formulation alignée sur la preuve',
    suggested: '« Emballage composé à 82 % de fibres recyclées. »',
    exampleFootnote: 'Exemple illustratif. La formulation finale dépend toujours des preuves réellement disponibles.',
    processTitle: 'Find. Prove. Fix.',
    processSubtitle: 'Un workflow pratique, du claim public au dossier de preuves.',
    findTitle: 'Find',
    findText: 'Identifier les allégations environnementales dans les sites, fiches produits, packagings et campagnes.',
    proveTitle: 'Prove',
    proveText: 'Relier chaque claim prioritaire aux justificatifs disponibles et identifier les preuves manquantes.',
    fixTitle: 'Fix',
    fixText: 'Préciser, documenter ou reformuler les claims prioritaires et préparer un dossier structuré.',
    offersEyebrow: 'Choisissez votre niveau',
    offersTitle: 'Trois niveaux d’accompagnement',
    offersSubtitle: 'Commencez simplement, puis approfondissez lorsque les enjeux commerciaux ou réglementaires augmentent.',
    bronzeName: 'Quick Fix',
    bronzePrice: '39 €',
    bronzeTagline: 'Un check rapide de vos claims prioritaires.',
    bronzeFeatures: ['Jusqu’à 5 claims prioritaires', 'Raison + source pour chaque flag', 'Checklist des preuves', 'Prochaine action recommandée'],
    bronzeCta: 'Choisir Quick Fix',
    silverName: 'Green Claims Fix',
    silverPrice: '249 €',
    silverTag: 'Le plus utile',
    silverTagline: 'Transformez vos claims prioritaires en dossier evidence-ready.',
    silverFeatures: ['Jusqu’à 25 claims prioritaires', 'Analyse des preuves manquantes', 'Collecte guidée des justificatifs', 'Suggestions de formulation alignées sur les preuves', 'Green Claims Evidence Pack structuré'],
    silverCta: 'Choisir Green Claims Fix',
    goldName: 'Expert Review',
    goldPrice: 'À partir de 1 490 €',
    goldTagline: 'Ajoutez une revue humaine lorsque les enjeux sont plus élevés.',
    goldFeatures: ['Tout Green Claims Fix', 'Revue humaine des claims prioritaires', 'Revue des justificatifs', 'Dossier d’actions revu', 'Recheck après modifications'],
    goldCta: 'Parler de l’Expert Review',
    disclaimer: 'Green Claims Fix aide à préparer la conformité et la documentation des preuves. Il ne constitue ni un avis juridique, ni une certification, ni une assurance de conformité.',
    whoTitle: 'Pour les marques qui utilisent déjà des allégations environnementales',
    whoText:
      'Particulièrement utile aux marques grand public qui communiquent sur le recyclé, la durabilité, le climat, la circularité, les matériaux, les emballages ou d’autres bénéfices environnementaux.',
    channels: ['Site web', 'Fiches produits', 'Packaging', 'Publicités & campagnes', 'Marketplaces'],
    trustEyebrow: 'Construit par Exaptation · adossé à LGI',
    trustTitle: 'L’expérience durabilité et innovation européenne derrière le produit.',
    trustText:
      'Green Claims Fix est une venture Exaptation. Exaptation est le startup studio de LGI Sustainable Innovation et met plus de 20 ans d’expérience européenne en innovation et durabilité au service du produit.',
    stats: [
      ['20+', 'ans d’expérience européenne en innovation'],
      ['150+', 'projets européens R&I'],
      ['UE', 'focus durabilité et réglementation'],
    ],
    methodTitle: 'Les preuves d’abord. Les sources visibles.',
    methodText:
      'Les flags sont reliés à des règles ou sources officielles traçables. L’analyse porte sur ce que promet le claim, son périmètre et l’adéquation réelle entre la formulation utilisée et les preuves disponibles.',
    faqEyebrow: 'FAQ',
    faqTitle: 'Les questions que l’on pose sur les green claims',
    faqs: [
      ['Qu’est-ce qu’une allégation environnementale ou green claim ?', 'Un green claim est toute affirmation, étiquette ou représentation suggérant qu’un produit, un service ou une entreprise présente un bénéfice environnemental ou un impact plus faible. Il peut apparaître sur un site, une fiche produit, un emballage, une publicité ou une marketplace.'],
      ['Comment vérifier si mes allégations environnementales sont suffisamment justifiées ?', 'Pour chaque claim prioritaire, il faut préciser exactement ce qui est promis, définir son périmètre et le relier à des preuves qui soutiennent directement la formulation. Green Claims Fix structure ce travail et fait ressortir les preuves manquantes ou trop faibles.'],
      ['Quelles preuves peuvent justifier un green claim ?', 'Selon l’allégation, il peut s’agir de déclarations fournisseurs, données de composition, résultats de tests, certificats, informations de cycle de vie, données d’émissions ou de tout document soutenant directement la formulation et son périmètre.'],
      ['Quelles règles européennes Green Claims sont prises en compte ?', 'Le service est conçu autour du droit européen de la consommation applicable aux allégations environnementales, notamment la Directive (UE) 2024/825 dite EmpCo, ainsi que des orientations nationales pertinentes en commençant par la France.'],
      ['Que change le 27 septembre 2026 ?', 'La Directive (UE) 2024/825 prévoit l’application des nouvelles mesures de protection des consommateurs à compter du 27 septembre 2026. Les règles existantes contre les pratiques commerciales trompeuses s’appliquent déjà : il n’est donc pas pertinent d’attendre cette date pour revoir ses claims.'],
      ['Green Claims Fix peut-il analyser un site e-commerce ?', 'Oui. Le workflow est conçu pour partir du contenu public des sites et fiches produits, puis prioriser les allégations environnementales à examiner. Le périmètre peut également inclure packaging, campagnes et marketplaces.'],
      ['Green Claims Fix remplace-t-il un avocat ou un organisme certificateur ?', 'Non. Green Claims Fix est un service de préparation à la conformité et d’evidence readiness. Il aide à organiser claims, preuves et actions de remédiation, sans fournir d’avis juridique, de certification ou d’assurance.'],
      ['Combien coûte une revue de green claims ?', 'Green Claims Fix propose actuellement trois niveaux : Quick Fix à 39 €, Green Claims Fix à 249 €, et Expert Review à partir de 1 490 €. Le bon niveau dépend du nombre de claims prioritaires et du besoin ou non d’une revue humaine.'],
    ],
    finalTitle: 'Rendez vos allégations environnementales plus faciles à défendre.',
    finalText: 'Envoyez-nous votre site ou vos claims prioritaires : nous vous indiquerons le niveau le plus adapté.',
    finalCta: 'Contacter Green Claims Fix',
    contactLabel: 'Contact direct',
  },
} as const;

const EMAIL = 'thomas@exaptation.studio';
const mailto = `mailto:${EMAIL}?subject=Green%20Claims%20Fix`;

const upsertMeta = (name: string, content: string) => {
  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = name;
    document.head.appendChild(meta);
  }
  meta.content = content;
};

const GreenClaimsFix: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = 'Green Claims Fix | Environmental claims review | Exaptation';

    const description = lang === 'en'
      ? 'Green Claims Fix helps brands review environmental marketing claims, identify evidence gaps and prepare evidence-ready wording and substantiation files for France and the EU.'
      : 'Green Claims Fix aide les marques à revoir leurs allégations environnementales, identifier les preuves manquantes et préparer un dossier de justification pour la France et l’UE.';

    upsertMeta('description', description);
    upsertMeta('robots', 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1');

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://exaptation.studio/green-claims-fix/';

    const faqEntity = t.faqs.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    }));

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://exaptation.studio/#organization',
          name: 'Exaptation Studio',
          url: 'https://exaptation.studio/',
          email: EMAIL,
          parentOrganization: {
            '@type': 'Organization',
            name: 'LGI Sustainable Innovation',
            url: 'https://lgi.earth/',
          },
        },
        {
          '@type': 'Service',
          '@id': 'https://exaptation.studio/green-claims-fix/#service',
          name: 'Green Claims Fix',
          url: 'https://exaptation.studio/green-claims-fix/',
          description,
          provider: { '@id': 'https://exaptation.studio/#organization' },
          areaServed: ['France', 'European Union'],
          serviceType: 'Environmental claims review, evidence readiness and green claims substantiation',
          offers: [
            { '@type': 'Offer', name: 'Quick Fix', price: '39', priceCurrency: 'EUR' },
            { '@type': 'Offer', name: 'Green Claims Fix', price: '249', priceCurrency: 'EUR' },
          ],
        },
        {
          '@type': 'FAQPage',
          mainEntity: faqEntity,
        },
      ],
    };

    let script = document.getElementById('green-claims-fix-schema') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = 'green-claims-fix-schema';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, [lang, t.faqs]);

  const priceCard = 'group flex h-full flex-col rounded-3xl border bg-white p-7 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.025] hover:shadow-2xl';

  return (
    <main className="min-h-screen bg-white text-slate-950 selection:bg-emerald-200 selection:text-emerald-950">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
          <a href="/" className="flex items-center gap-3">
            <img src="/exaptation-logo.png" alt="Exaptation Studio by LGI" className="h-9 w-auto object-contain" />
          </a>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700"
            >
              <Globe2 size={14} /> {lang === 'en' ? 'FR' : 'EN'}
            </button>
            <a href={mailto} className="hidden rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white transition hover:bg-emerald-600 sm:inline-flex">
              {t.primaryCta}
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.25),transparent_30%),radial-gradient(circle_at_10%_80%,rgba(34,197,94,0.10),transparent_35%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:py-28">
          <div>
            <a href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/55 transition hover:text-white">
              <ArrowLeft size={16} /> {t.back}
            </a>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">{t.heroEyebrow}</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">{t.heroTitle}</h1>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-slate-300">{t.heroSubtitle}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={mailto} className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 py-3.5 font-bold text-slate-950 transition hover:bg-emerald-300">
                {t.primaryCta} <ArrowRight size={18} />
              </a>
              <a href="#offers" className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 font-bold text-white transition hover:border-white/30 hover:bg-white/5">
                {t.secondaryCta}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
              {t.reassurance.map((item) => (
                <span key={item} className="inline-flex items-center gap-2"><CheckCircle2 size={15} className="text-emerald-400" />{item}</span>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl">
            <img src="/green-claims-fix-card.svg" alt="Illustration of environmental claims screening, evidence checking and risk scoring" className="w-full rounded-2xl" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">{t.exampleEyebrow}</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">{t.exampleTitle}</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">{t.processSubtitle}</p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-xl shadow-slate-200/50">
            <div className="border-b border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-slate-500">{t.exampleClaimLabel}</div>
            <div className="space-y-6 p-6 md:p-8">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-xl font-bold md:text-2xl">{t.exampleClaim}</p>
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-800">{t.exampleStatus}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{t.exampleWhy}</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{t.missingLabel}</p>
                  <div className="mt-4 space-y-3">
                    {t.missingItems.map((item) => <div key={item} className="flex items-start gap-2 text-sm text-slate-700"><Search size={15} className="mt-0.5 shrink-0 text-amber-600" />{item}</div>)}
                  </div>
                </div>
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">{t.suggestedLabel}</p>
                  <p className="mt-4 text-lg font-bold text-emerald-950">{t.suggested}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-800"><FileCheck2 size={16} />Evidence attached ✓</div>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-slate-400">{t.exampleFootnote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">{t.processTitle}</h2>
            <p className="mt-4 text-lg text-slate-400">{t.processSubtitle}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              [FileSearch, t.findTitle, t.findText],
              [Link2, t.proveTitle, t.proveText],
              [CheckCircle2, t.fixTitle, t.fixText],
            ].map(([Icon, title, text]) => {
              const C = Icon as React.ElementType;
              return <article key={String(title)} className="rounded-3xl border border-white/10 bg-white/5 p-7"><C className="mb-5 text-emerald-400" /><h3 className="text-2xl font-bold">{title}</h3><p className="mt-3 leading-relaxed text-slate-400">{text}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section id="offers" className="bg-slate-100 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">{t.offersEyebrow}</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">{t.offersTitle}</h2>
            <p className="mt-5 text-lg text-slate-600">{t.offersSubtitle}</p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:items-stretch">
            <article className={`${priceCard} border-slate-200`}>
              <div className="mb-6 flex gap-1.5"><span className="h-2 flex-1 rounded-full bg-emerald-500" /><span className="h-2 flex-1 rounded-full bg-slate-100" /><span className="h-2 flex-1 rounded-full bg-slate-100" /></div>
              <h3 className="text-2xl font-bold">{t.bronzeName}</h3>
              <p className="mt-3 text-4xl font-bold">{t.bronzePrice}</p>
              <p className="mt-4 min-h-14 text-slate-600">{t.bronzeTagline}</p>
              <div className="my-7 h-px bg-slate-100" />
              <div className="space-y-3">{t.bronzeFeatures.map((item) => <p key={item} className="flex items-start gap-2 text-sm text-slate-700"><Check size={16} className="mt-0.5 shrink-0 text-emerald-600" />{item}</p>)}</div>
              <a href={mailto} className="mt-8 inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-bold transition group-hover:border-slate-950 group-hover:bg-slate-950 group-hover:text-white">{t.bronzeCta}</a>
            </article>

            <article className={`${priceCard} relative border-2 border-emerald-500 bg-slate-950 text-white lg:-translate-y-3`}>
              <span className="absolute right-6 top-6 rounded-full bg-emerald-400 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-950">{t.silverTag}</span>
              <div className="mb-6 flex gap-1.5 pr-28"><span className="h-2 flex-1 rounded-full bg-emerald-400" /><span className="h-2 flex-1 rounded-full bg-emerald-400" /><span className="h-2 flex-1 rounded-full bg-white/10" /></div>
              <h3 className="text-2xl font-bold">{t.silverName}</h3>
              <p className="mt-3 text-4xl font-bold">{t.silverPrice}</p>
              <p className="mt-4 min-h-14 text-slate-300">{t.silverTagline}</p>
              <div className="my-7 h-px bg-white/10" />
              <div className="space-y-3">{t.silverFeatures.map((item) => <p key={item} className="flex items-start gap-2 text-sm text-slate-200"><Check size={16} className="mt-0.5 shrink-0 text-emerald-400" />{item}</p>)}</div>
              <a href={mailto} className="mt-8 inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-300">{t.silverCta}</a>
            </article>

            <article className={`${priceCard} border-slate-200`}>
              <div className="mb-6 flex gap-1.5"><span className="h-2 flex-1 rounded-full bg-emerald-500" /><span className="h-2 flex-1 rounded-full bg-emerald-500" /><span className="h-2 flex-1 rounded-full bg-emerald-500" /></div>
              <h3 className="text-2xl font-bold">{t.goldName}</h3>
              <p className="mt-3 text-4xl font-bold">{t.goldPrice}</p>
              <p className="mt-4 min-h-14 text-slate-600">{t.goldTagline}</p>
              <div className="my-7 h-px bg-slate-100" />
              <div className="space-y-3">{t.goldFeatures.map((item) => <p key={item} className="flex items-start gap-2 text-sm text-slate-700"><Check size={16} className="mt-0.5 shrink-0 text-emerald-600" />{item}</p>)}</div>
              <a href={mailto} className="mt-8 inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-bold transition group-hover:border-slate-950 group-hover:bg-slate-950 group-hover:text-white">{t.goldCta}</a>
            </article>
          </div>
          <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-relaxed text-slate-500">{t.disclaimer}</p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div><h2 className="text-3xl font-bold tracking-tight md:text-5xl">{t.whoTitle}</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">{t.whoText}</p></div>
            <div className="flex flex-wrap gap-3 lg:justify-end">{t.channels.map((channel) => <span key={channel} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">{channel}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">{t.trustEyebrow}</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">{t.trustTitle}</h2>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">{t.trustText}</p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <div className="flex min-h-24 items-center rounded-2xl bg-white px-6 py-4">
                  <img src="/exaptation-logo.png" alt="Exaptation Studio by LGI" className="h-14 max-w-[300px] object-contain" />
                </div>
                <div className="flex min-h-24 items-center rounded-2xl bg-white px-6 py-4">
                  <img src="/lgi-20-years.jpg" alt="LGI Sustainable Innovation — 20 years of impact" className="h-16 max-w-[180px] object-contain mix-blend-multiply" />
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {t.stats.map(([value, label]) => <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-5"><p className="text-3xl font-bold text-emerald-400">{value}</p><p className="mt-1 text-sm leading-relaxed text-slate-400">{label}</p></div>)}
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 md:p-9">
            <div className="flex items-start gap-4"><ShieldCheck className="mt-1 shrink-0 text-emerald-400" /><div><h3 className="text-2xl font-bold">{t.methodTitle}</h3><p className="mt-3 max-w-4xl leading-relaxed text-slate-300">{t.methodText}</p></div></div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">{t.faqEyebrow}</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">{t.faqTitle}</h2>
          <div className="mt-10 divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white px-6 md:px-8">
            {t.faqs.map(([question, answer]) => (
              <details key={question} className="group py-2">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-bold text-slate-900">
                  <span>{question}</span><ChevronDown size={18} className="shrink-0 text-slate-400 transition group-open:rotate-180" />
                </summary>
                <p className="max-w-3xl pb-6 leading-relaxed text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-500 py-20 text-slate-950">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <UserCheck className="mx-auto mb-5" size={36} />
          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">{t.finalTitle}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-emerald-950/80">{t.finalText}</p>
          <a href={mailto} className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-4 font-bold text-white transition hover:bg-slate-800">{t.finalCta}<ArrowRight size={18} /></a>
          <div className="mt-5 text-sm font-semibold text-emerald-950/75">{t.contactLabel}: <a href={`mailto:${EMAIL}`} className="underline underline-offset-4">{EMAIL}</a></div>
        </div>
      </section>
    </main>
  );
};

export default GreenClaimsFix;
