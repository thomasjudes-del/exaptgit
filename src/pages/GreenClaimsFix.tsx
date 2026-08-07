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
    venture: 'An Exaptation venture',
    pilot: 'Pilot pricing',
    heroEyebrow: 'Green Claims Fix',
    heroTitle: 'Turn environmental claims into evidence-ready claims.',
    heroSubtitle:
      'We identify the green claims that deserve attention, show what evidence is missing, and help you prepare clearer wording and a structured substantiation file.',
    primaryCta: 'Request a pilot',
    secondaryCta: 'See the offers',
    reassurance: ['EU + France first', 'One-off, no subscription required', 'Evidence-first, source-traceable'],
    exampleLabel: 'Example output',
    exampleClaimLabel: 'Claim detected',
    exampleClaim: '“Our packaging is eco-friendly.”',
    exampleStatus: 'Needs attention',
    exampleWhy: 'Broad environmental wording. The precise benefit and supporting evidence are not clear from the claim itself.',
    missingLabel: 'What we would ask for',
    missingItems: ['Packaging composition', 'Recycled-content evidence', 'Scope of the claim'],
    suggestedLabel: 'Evidence-aligned wording',
    suggested: '“Packaging made with 82% recycled fibre.”',
    exampleFootnote: 'Illustrative example only. Final wording depends on the evidence actually provided.',
    processTitle: 'Find. Prove. Fix.',
    processSubtitle: 'The product is not another dashboard to manage. It is a workflow that turns public claims into concrete actions and an evidence file.',
    findTitle: 'Find',
    findText: 'Identify environmental claims across website copy, product pages and other public marketing content.',
    proveTitle: 'Prove',
    proveText: 'Map each priority claim to the evidence it needs, then surface what is missing or too weak.',
    fixTitle: 'Fix',
    fixText: 'Clarify, substantiate or rewrite priority claims and prepare the corresponding evidence pack.',
    offersEyebrow: 'Choose the level of support',
    offersTitle: 'Three ways to use Green Claims Fix',
    offersSubtitle: 'Same evidence-first logic. Increasing depth, automation and human review.',
    bronzeName: 'Quick Fix',
    bronzePrice: '€39',
    bronzeTagline: 'Show me what needs attention.',
    bronzeFeatures: ['Up to 5 priority claims', 'Reason + source for each flag', 'Evidence checklist', 'Suggested next action'],
    bronzeCta: 'Start with Quick Fix',
    silverName: 'Green Claims Fix',
    silverPrice: '€249',
    silverTag: 'Core offer',
    silverTagline: 'Help me make my claims evidence-ready.',
    silverFeatures: ['Up to 25 priority claims', 'Evidence-gap analysis', 'Guided evidence collection', 'Evidence-aligned wording suggestions', 'Structured Green Claims Evidence Pack'],
    silverCta: 'Request the pilot',
    goldName: 'Expert Review',
    goldPrice: 'From €1,490',
    goldTagline: 'Have a human review the file.',
    goldFeatures: ['Everything in Green Claims Fix', 'Human review of priority claims', 'Review of supporting evidence', 'Final reviewed action file', 'Follow-up recheck after changes'],
    goldCta: 'Discuss Expert Review',
    disclaimer: 'Green Claims Fix supports compliance preparation and evidence readiness. It is not legal advice, certification or assurance.',
    forWhoTitle: 'Built for brands already making environmental claims',
    forWhoText:
      'Especially useful for consumer brands selling online and communicating on recycled content, sustainability, climate, circularity, materials, packaging or other environmental benefits.',
    channels: ['Website', 'Product pages', 'Packaging copy', 'Ads & campaigns', 'Marketplace listings'],
    credibilityEyebrow: 'Why Exaptation',
    credibilityTitle: 'European sustainability expertise, not a generic AI wrapper.',
    credibilityText:
      'Green Claims Fix is being developed by Exaptation, the venture studio of LGI Sustainable Innovation. It builds on more than 20 years of European innovation work and deep expertise across sustainability, circular value chains, decarbonisation and strategy.',
    credibilityStats: [
      ['20+', 'years of European innovation experience'],
      ['150+', 'European R&I projects'],
      ['EU', 'regulation and sustainability focus'],
    ],
    methodTitle: 'Evidence first. Sources visible.',
    methodText:
      'Each flag is intended to be tied to a traceable rule or official source. The system should not invent a legal conclusion from a word alone: it asks what the claim means, what it covers and what evidence supports it.',
    faqEyebrow: 'Questions people actually ask',
    faqTitle: 'Green claims FAQ',
    faqs: [
      ['What is a green claim?', 'A green claim is a statement or representation that suggests a product, service or business has an environmental benefit or a lower environmental impact. It can appear in text, labels, packaging, ads, product pages or other marketing content.'],
      ['How can I check whether my environmental claims are properly substantiated?', 'Green Claims Fix is designed to connect each priority claim to the evidence that supports it, identify missing evidence and show which claims need clarification, substantiation or rewriting.'],
      ['Does Green Claims Fix replace a lawyer or certification body?', 'No. It is a preparation and evidence-readiness workflow. It helps organise claims, evidence and next actions, but it does not provide legal advice, certification or assurance.'],
      ['Which EU green-claim rules does Green Claims Fix consider?', 'The pilot is designed around the EU consumer-law framework, including Directive (EU) 2024/825 (EmpCo), plus relevant national guidance starting with France. The exact jurisdictional scope should be stated in each assessment.'],
      ['Can Green Claims Fix analyse a whole website?', 'The core offer is designed to scan public website content and prioritise the claims that deserve attention. The exact crawl depth and channel coverage will be defined during the pilot phase.'],
      ['What evidence might I need for a claim?', 'It depends on the claim. Typical evidence can include supplier declarations, composition data, test results, certificates, lifecycle information or other documents that directly support the wording and scope of the claim.'],
    ],
    finalTitle: 'Your website is already making claims. Make sure you can stand behind them.',
    finalText: 'We are opening a limited number of Green Claims Fix pilots while we finalise the automated workflow.',
    finalCta: 'Request a pilot',
  },
  fr: {
    back: 'Exaptation Studio',
    venture: 'Une venture Exaptation',
    pilot: 'Tarifs pilote',
    heroEyebrow: 'Green Claims Fix',
    heroTitle: 'Transformez vos allégations environnementales en claims réellement documentés.',
    heroSubtitle:
      'Nous identifions les green claims qui méritent attention, montrons les preuves manquantes et vous aidons à préparer des formulations plus précises et un dossier de justification structuré.',
    primaryCta: 'Demander un pilote',
    secondaryCta: 'Voir les offres',
    reassurance: ['UE + France en priorité', 'One-shot, sans abonnement obligatoire', 'Evidence-first, sources traçables'],
    exampleLabel: 'Exemple de résultat',
    exampleClaimLabel: 'Claim détecté',
    exampleClaim: '« Notre emballage est éco-responsable. »',
    exampleStatus: 'À examiner',
    exampleWhy: 'Formulation environnementale large. Le bénéfice précis et les preuves associées ne sont pas explicites dans l’allégation.',
    missingLabel: 'Ce que nous demanderions',
    missingItems: ['Composition de l’emballage', 'Preuve du contenu recyclé', 'Périmètre exact du claim'],
    suggestedLabel: 'Formulation alignée sur la preuve',
    suggested: '« Emballage composé à 82 % de fibres recyclées. »',
    exampleFootnote: 'Exemple illustratif. La formulation finale dépend toujours des preuves réellement disponibles.',
    processTitle: 'Find. Prove. Fix.',
    processSubtitle: 'Ce n’est pas un dashboard de plus à gérer. C’est un workflow qui transforme vos claims publics en actions concrètes et en dossier de preuves.',
    findTitle: 'Find',
    findText: 'Identifier les allégations environnementales dans le site, les fiches produits et autres contenus marketing publics.',
    proveTitle: 'Prove',
    proveText: 'Relier chaque claim prioritaire aux preuves nécessaires et faire ressortir ce qui manque ou reste trop faible.',
    fixTitle: 'Fix',
    fixText: 'Préciser, documenter ou reformuler les claims prioritaires et préparer le dossier de preuves correspondant.',
    offersEyebrow: 'Choisissez le niveau d’accompagnement',
    offersTitle: 'Trois façons d’utiliser Green Claims Fix',
    offersSubtitle: 'Même logique evidence-first. Profondeur, automatisation et revue humaine croissantes.',
    bronzeName: 'Quick Fix',
    bronzePrice: '39 €',
    bronzeTagline: 'Montrez-moi ce qui mérite attention.',
    bronzeFeatures: ['Jusqu’à 5 claims prioritaires', 'Raison + source pour chaque flag', 'Checklist des preuves', 'Prochaine action recommandée'],
    bronzeCta: 'Commencer par Quick Fix',
    silverName: 'Green Claims Fix',
    silverPrice: '249 €',
    silverTag: 'Offre centrale',
    silverTagline: 'Aidez-moi à rendre mes claims evidence-ready.',
    silverFeatures: ['Jusqu’à 25 claims prioritaires', 'Analyse des preuves manquantes', 'Collecte guidée des justificatifs', 'Suggestions de formulations alignées sur les preuves', 'Green Claims Evidence Pack structuré'],
    silverCta: 'Demander le pilote',
    goldName: 'Expert Review',
    goldPrice: 'À partir de 1 490 €',
    goldTagline: 'Faites revoir le dossier par un humain.',
    goldFeatures: ['Tout Green Claims Fix', 'Revue humaine des claims prioritaires', 'Revue des justificatifs fournis', 'Dossier d’actions final revu', 'Recheck après modifications'],
    goldCta: 'Parler de l’Expert Review',
    disclaimer: 'Green Claims Fix aide à préparer la conformité et la documentation des preuves. Il ne constitue ni un avis juridique, ni une certification, ni une assurance de conformité.',
    forWhoTitle: 'Pour les marques qui utilisent déjà des allégations environnementales',
    forWhoText:
      'Particulièrement utile aux marques grand public qui vendent en ligne et communiquent sur le recyclé, la durabilité, le climat, la circularité, les matériaux, les emballages ou d’autres bénéfices environnementaux.',
    channels: ['Site web', 'Fiches produits', 'Packaging', 'Publicités & campagnes', 'Marketplaces'],
    credibilityEyebrow: 'Pourquoi Exaptation',
    credibilityTitle: 'Une expertise européenne en durabilité, pas un simple wrapper IA.',
    credibilityText:
      'Green Claims Fix est développé par Exaptation, le startup studio de LGI Sustainable Innovation. Il s’appuie sur plus de 20 ans de projets européens et sur des expertises fortes en durabilité, chaînes de valeur circulaires, décarbonation et stratégie.',
    credibilityStats: [
      ['20+', 'ans d’expérience européenne en innovation'],
      ['150+', 'projets européens R&I'],
      ['UE', 'focus réglementation et durabilité'],
    ],
    methodTitle: 'Les preuves d’abord. Les sources visibles.',
    methodText:
      'Chaque flag a vocation à être relié à une règle ou une source officielle traçable. Le système ne doit pas déduire une conclusion juridique d’un simple mot : il demande ce que le claim signifie, ce qu’il couvre et quelles preuves le soutiennent.',
    faqEyebrow: 'Les questions réellement posées',
    faqTitle: 'FAQ Green Claims',
    faqs: [
      ['Qu’est-ce qu’une allégation environnementale ou green claim ?', 'C’est une affirmation ou représentation suggérant qu’un produit, un service ou une entreprise présente un bénéfice environnemental ou un impact plus faible. Elle peut apparaître dans un texte, une étiquette, un packaging, une publicité ou une fiche produit.'],
      ['Comment vérifier si mes allégations environnementales sont suffisamment justifiées ?', 'Green Claims Fix est conçu pour relier chaque claim prioritaire aux éléments de preuve qui le soutiennent, identifier les manques et montrer ce qui doit être précisé, documenté ou reformulé.'],
      ['Green Claims Fix remplace-t-il un avocat ou un organisme certificateur ?', 'Non. C’est un workflow de préparation et d’evidence readiness. Il aide à organiser claims, preuves et actions, sans fournir d’avis juridique, de certification ou d’assurance.'],
      ['Quelles règles européennes Green Claims sont prises en compte ?', 'Le pilote est conçu autour du droit européen de la consommation, notamment la Directive (UE) 2024/825 dite EmpCo, ainsi que des orientations nationales pertinentes en commençant par la France. Le périmètre juridictionnel exact devra être indiqué dans chaque analyse.'],
      ['Green Claims Fix peut-il analyser tout mon site web ?', 'L’offre centrale est conçue pour analyser le contenu public du site et prioriser les claims qui méritent attention. La profondeur exacte du crawl et les canaux couverts seront précisés pendant la phase pilote.'],
      ['Quelles preuves peuvent être nécessaires pour justifier un claim ?', 'Cela dépend de l’allégation : déclarations fournisseurs, données de composition, résultats de tests, certificats, informations de cycle de vie ou tout autre document soutenant directement la formulation et son périmètre.'],
    ],
    finalTitle: 'Votre site fait déjà des promesses. Assurez-vous de pouvoir les documenter.',
    finalText: 'Nous ouvrons un nombre limité de pilotes Green Claims Fix pendant la finalisation du workflow automatisé.',
    finalCta: 'Demander un pilote',
  },
} as const;

const mailto = 'mailto:thomas@exaptation.studio?subject=Green%20Claims%20Fix%20pilot';

const GreenClaimsFix: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const t = copy[lang];

  useEffect(() => {
    document.title = `Green Claims Fix | Exaptation`;
    const description =
      lang === 'en'
        ? 'Green Claims Fix helps brands identify environmental claims, map missing evidence and prepare evidence-ready wording and substantiation files.'
        : 'Green Claims Fix aide les marques à identifier leurs allégations environnementales, les preuves manquantes et à préparer un dossier de justification structuré.';

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, [lang]);

  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-emerald-300 selection:text-slate-950">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white">
            <ArrowLeft size={16} />
            {t.back}
          </a>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white/70 transition hover:border-white/30 hover:text-white"
              aria-label={lang === 'en' ? 'Passer en français' : 'Switch to English'}
            >
              <Globe2 size={14} />
              {lang === 'en' ? 'FR' : 'EN'}
            </button>
            <a href={mailto} className="hidden rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-emerald-300 sm:inline-flex">
              {t.primaryCta}
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(16,185,129,0.16),transparent_30%),radial-gradient(circle_at_20%_70%,rgba(59,130,246,0.12),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="max-w-5xl">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-300">
                {t.venture}
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white/50">
                {t.pilot}
              </span>
            </div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-emerald-400">{t.heroEyebrow}</p>
            <h1 className="max-w-5xl text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">{t.heroTitle}</h1>
            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-slate-300 md:text-2xl">{t.heroSubtitle}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={mailto} className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 py-3.5 font-bold text-slate-950 transition hover:bg-emerald-300">
                {t.primaryCta}
                <ArrowRight size={18} />
              </a>
              <a href="#offers" className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 font-bold text-white transition hover:border-white/30 hover:bg-white/5">
                {t.secondaryCta}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/55">
              {t.reassurance.map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-400" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-slate-950 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">{t.exampleLabel}</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">{t.processTitle}</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">{t.processSubtitle}</p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-xl shadow-slate-200/40">
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
                    {t.missingItems.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm text-slate-700">
                        <Search size={15} className="mt-0.5 shrink-0 text-amber-600" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">{t.suggestedLabel}</p>
                  <p className="mt-4 text-lg font-bold text-emerald-950">{t.suggested}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-800">
                    <FileCheck2 size={16} />
                    Evidence attached ✓
                  </div>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-slate-400">{t.exampleFootnote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <FileSearch className="mb-5 text-emerald-400" />
              <h2 className="text-2xl font-bold">{t.findTitle}</h2>
              <p className="mt-3 leading-relaxed text-slate-400">{t.findText}</p>
            </article>
            <article className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <Link2 className="mb-5 text-emerald-400" />
              <h2 className="text-2xl font-bold">{t.proveTitle}</h2>
              <p className="mt-3 leading-relaxed text-slate-400">{t.proveText}</p>
            </article>
            <article className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <CheckCircle2 className="mb-5 text-emerald-400" />
              <h2 className="text-2xl font-bold">{t.fixTitle}</h2>
              <p className="mt-3 leading-relaxed text-slate-400">{t.fixText}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="offers" className="bg-slate-100 py-20 text-slate-950 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">{t.offersEyebrow}</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">{t.offersTitle}</h2>
            <p className="mt-5 text-lg text-slate-600">{t.offersSubtitle}</p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-6 flex gap-1.5" aria-label="Level 1 of 3">
                <span className="h-2 flex-1 rounded-full bg-emerald-500" />
                <span className="h-2 flex-1 rounded-full bg-slate-100" />
                <span className="h-2 flex-1 rounded-full bg-slate-100" />
              </div>
              <h3 className="text-2xl font-bold">{t.bronzeName}</h3>
              <p className="mt-3 text-4xl font-bold">{t.bronzePrice}</p>
              <p className="mt-4 min-h-14 text-slate-600">{t.bronzeTagline}</p>
              <div className="my-7 h-px bg-slate-100" />
              <div className="space-y-3">
                {t.bronzeFeatures.map((item) => (
                  <p key={item} className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-600" />{item}</p>
                ))}
              </div>
              <a href={mailto} className="mt-8 inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-bold transition hover:border-slate-950 hover:bg-slate-950 hover:text-white">{t.bronzeCta}</a>
            </article>

            <article className="relative flex flex-col rounded-3xl border-2 border-emerald-500 bg-slate-950 p-7 text-white shadow-2xl shadow-emerald-900/15 lg:-translate-y-3">
              <span className="absolute right-6 top-6 rounded-full bg-emerald-400 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-950">{t.silverTag}</span>
              <div className="mb-6 flex gap-1.5 pr-28" aria-label="Level 2 of 3">
                <span className="h-2 flex-1 rounded-full bg-emerald-400" />
                <span className="h-2 flex-1 rounded-full bg-emerald-400" />
                <span className="h-2 flex-1 rounded-full bg-white/10" />
              </div>
              <h3 className="text-2xl font-bold">{t.silverName}</h3>
              <p className="mt-3 text-4xl font-bold">{t.silverPrice}</p>
              <p className="mt-4 min-h-14 text-slate-300">{t.silverTagline}</p>
              <div className="my-7 h-px bg-white/10" />
              <div className="space-y-3">
                {t.silverFeatures.map((item) => (
                  <p key={item} className="flex items-start gap-2 text-sm text-slate-200"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" />{item}</p>
                ))}
              </div>
              <a href={mailto} className="mt-8 inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-300">{t.silverCta}</a>
            </article>

            <article className="flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-6 flex gap-1.5" aria-label="Level 3 of 3">
                <span className="h-2 flex-1 rounded-full bg-emerald-500" />
                <span className="h-2 flex-1 rounded-full bg-emerald-500" />
                <span className="h-2 flex-1 rounded-full bg-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold">{t.goldName}</h3>
              <p className="mt-3 text-4xl font-bold">{t.goldPrice}</p>
              <p className="mt-4 min-h-14 text-slate-600">{t.goldTagline}</p>
              <div className="my-7 h-px bg-slate-100" />
              <div className="space-y-3">
                {t.goldFeatures.map((item) => (
                  <p key={item} className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-600" />{item}</p>
                ))}
              </div>
              <a href={mailto} className="mt-8 inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-bold transition hover:border-slate-950 hover:bg-slate-950 hover:text-white">{t.goldCta}</a>
            </article>
          </div>

          <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-relaxed text-slate-500">{t.disclaimer}</p>
        </div>
      </section>

      <section className="bg-white py-20 text-slate-950 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">{t.forWhoTitle}</h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">{t.forWhoText}</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {t.channels.map((channel) => (
                <span key={channel} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">{channel}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">{t.credibilityEyebrow}</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">{t.credibilityTitle}</h2>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">{t.credibilityText}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {t.credibilityStats.map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-3xl font-bold text-emerald-400">{value}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 md:p-9">
            <div className="flex items-start gap-4">
              <ShieldCheck className="mt-1 shrink-0 text-emerald-400" />
              <div>
                <h3 className="text-2xl font-bold">{t.methodTitle}</h3>
                <p className="mt-3 max-w-4xl leading-relaxed text-slate-300">{t.methodText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20 text-slate-950 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">{t.faqEyebrow}</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">{t.faqTitle}</h2>
          <div className="mt-10 divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white px-6 md:px-8">
            {t.faqs.map(([question, answer]) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                  <span>{question}</span>
                  <ChevronDown size={18} className="shrink-0 text-slate-400 transition group-open:rotate-180" />
                </summary>
                <p className="max-w-3xl pt-4 leading-relaxed text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.16),transparent_40%)]" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <UserCheck className="mx-auto text-emerald-400" size={36} />
          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">{t.finalTitle}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">{t.finalText}</p>
          <a href={mailto} className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-emerald-300">
            {t.finalCta}
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>Green Claims Fix · Exaptation Studio</p>
          <a href="https://lgi.earth" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">LGI Sustainable Innovation</a>
        </div>
      </footer>
    </main>
  );
};

export default GreenClaimsFix;
