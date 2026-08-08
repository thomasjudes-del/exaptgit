import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const dist = path.resolve('dist');
const templatePath = path.join(dist, 'index.html');
const template = await readFile(templatePath, 'utf8');

const gcfFr = {
  route: 'fr/green-claims-fix',
  lang: 'fr',
  canonical: 'https://exaptation.studio/fr/green-claims-fix/',
  title: 'Green Claims Fix | Revue des allégations environnementales France & UE',
  description: 'Identifiez les allégations environnementales à revoir, les preuves à réunir et les actions à mener pour vos communications en France et dans l’Union européenne.',
  alternates: true,
};

const guides = [
  {
    route: 'fr/green-claims-fix/guides',
    canonical: 'https://exaptation.studio/fr/green-claims-fix/guides/',
    title: 'Guides Green Claims 2026 | Green Claims Fix',
    description: '8 guides pratiques et sourcés pour comprendre les allégations environnementales en France et dans l’UE : claims génériques, carbone, recyclable, biosourcé, labels et plus.',
  },
  {
    route: 'fr/green-claims-fix/guides/eco-responsable-ecologique-green-durable',
    canonical: 'https://exaptation.studio/fr/green-claims-fix/guides/eco-responsable-ecologique-green-durable/',
    title: 'Éco-responsable, écologique, green, durable : règles 2026 | Green Claims Fix',
    description: 'Quand les claims éco-responsable, écologique, green ou durable deviennent-ils problématiques ? Règles France et UE, preuves, exemples et checklist 2026.',
  },
  {
    route: 'fr/green-claims-fix/guides/neutre-carbone-zero-carbone',
    canonical: 'https://exaptation.studio/fr/green-claims-fix/guides/neutre-carbone-zero-carbone/',
    title: 'Neutre en carbone et zéro carbone : règles 2026 | Green Claims Fix',
    description: 'Neutralité carbone, zéro carbone et compensation : ce qui est autorisé aujourd’hui en France et ce qui change dans l’UE le 27 septembre 2026.',
  },
  {
    route: 'fr/green-claims-fix/guides/recyclable',
    canonical: 'https://exaptation.studio/fr/green-claims-fix/guides/recyclable/',
    title: 'Claim « recyclable » : règles, preuves et emballages | Green Claims Fix',
    description: 'Comment utiliser le claim recyclable en France : périmètre, preuves, conditions de recyclabilité, emballages, anneau de Möbius et règles européennes 2026.',
  },
  {
    route: 'fr/green-claims-fix/guides/biodegradable-compostable',
    canonical: 'https://exaptation.studio/fr/green-claims-fix/guides/biodegradable-compostable/',
    title: 'Biodégradable et compostable : règles France/UE 2026 | Green Claims Fix',
    description: 'Biodégradable, compostable à domicile ou industriel : règles françaises, emballages plastiques, preuves et évolution européenne au 27 septembre 2026.',
  },
  {
    route: 'fr/green-claims-fix/guides/biosource-biobased-preuves',
    canonical: 'https://exaptation.studio/fr/green-claims-fix/guides/biosource-biobased-preuves/',
    title: 'Biosourcé / biobased : définition, preuves et règles 2026 | Green Claims Fix',
    description: 'Un produit biosourcé n’est pas automatiquement bio, biodégradable ou écologique. Découvrez quoi préciser, mesurer et prouver pour un claim biosourcé.',
  },
  {
    route: 'fr/green-claims-fix/guides/labels-environnementaux',
    canonical: 'https://exaptation.studio/fr/green-claims-fix/guides/labels-environnementaux/',
    title: 'Labels environnementaux : certification obligatoire en 2026 ? | Green Claims Fix',
    description: 'Nouvelles règles UE sur les labels de durabilité : certification, tiers indépendant, badges maison, autorités publiques et anciens stocks.',
  },
  {
    route: 'fr/green-claims-fix/guides/promesses-environnementales-futures',
    canonical: 'https://exaptation.studio/fr/green-claims-fix/guides/promesses-environnementales-futures/',
    title: 'Net zero 2030 et promesses environnementales futures : règles 2026 | Green Claims Fix',
    description: 'Objectifs net zero, recyclabilité future et engagements climat : plan, cibles mesurables, ressources, vérification indépendante et règles UE 2026.',
  },
  {
    route: 'fr/green-claims-fix/guides/produit-emballage-portee-claim',
    canonical: 'https://exaptation.studio/fr/green-claims-fix/guides/produit-emballage-portee-claim/',
    title: 'Produit, emballage, marque : jusqu’où peut porter un green claim ? | Green Claims Fix',
    description: 'Comment éviter la généralisation abusive d’un bénéfice environnemental : produit, emballage, composant, gamme ou entreprise et nouvelles règles UE 2026.',
  },
].map((item) => ({ ...item, lang: 'fr', alternates: false }));

const routes = [
  {
    ...gcfFr,
    route: 'green-claims-fix',
  },
  gcfFr,
  {
    route: 'en/green-claims-fix',
    lang: 'en',
    canonical: 'https://exaptation.studio/en/green-claims-fix/',
    title: 'Green Claims Fix | Environmental claims review for France & the EU',
    description: 'Identify environmental claims to review, the evidence to collect and the actions to take for communications in France and the European Union.',
    alternates: true,
  },
  ...guides,
];

const escapeHtml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

for (const item of routes) {
  let html = template;
  html = html.replace(/<html lang="[^"]*">/, `<html lang="${item.lang}">`);
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(item.title)}</title>`);
  html = html.replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${escapeHtml(item.description)}" />`);
  html = html.replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${escapeHtml(item.title)}" />`);
  html = html.replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${escapeHtml(item.description)}" />`);
  html = html.replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${item.canonical}" />`);
  html = html.replace(/<meta name="twitter:card"[^>]*>/, '<meta name="twitter:card" content="summary_large_image" />');
  html = html.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${item.canonical}" />`);

  let socialAndLanguage = `
    <meta property="og:image" content="https://exaptation.studio/green-claims-fix-card.jpg" />
    <meta name="twitter:title" content="${escapeHtml(item.title)}" />
    <meta name="twitter:description" content="${escapeHtml(item.description)}" />
    <meta name="twitter:image" content="https://exaptation.studio/green-claims-fix-card.jpg" />`;

  if (item.alternates) {
    socialAndLanguage += `
    <link rel="alternate" hreflang="fr" href="https://exaptation.studio/fr/green-claims-fix/" />
    <link rel="alternate" hreflang="en" href="https://exaptation.studio/en/green-claims-fix/" />
    <link rel="alternate" hreflang="x-default" href="https://exaptation.studio/fr/green-claims-fix/" />`;
  }

  html = html.replace('</head>', `${socialAndLanguage}\n</head>`);

  const routeDir = path.join(dist, item.route);
  await mkdir(routeDir, { recursive: true });
  await writeFile(path.join(routeDir, 'index.html'), html, 'utf8');
}
