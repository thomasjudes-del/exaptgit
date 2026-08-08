import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const dist = path.resolve('dist');
const templatePath = path.join(dist, 'index.html');
const template = await readFile(templatePath, 'utf8');

const routes = [
  {
    route: 'green-claims-fix',
    lang: 'fr',
    canonical: 'https://exaptation.studio/fr/green-claims-fix/',
    title: 'Green Claims Fix | Revue des allégations environnementales France & UE',
    description: 'Identifiez les allégations environnementales à revoir, les preuves à réunir et les actions à mener pour vos communications en France et dans l’Union européenne.',
  },
  {
    route: 'fr/green-claims-fix',
    lang: 'fr',
    canonical: 'https://exaptation.studio/fr/green-claims-fix/',
    title: 'Green Claims Fix | Revue des allégations environnementales France & UE',
    description: 'Identifiez les allégations environnementales à revoir, les preuves à réunir et les actions à mener pour vos communications en France et dans l’Union européenne.',
  },
  {
    route: 'en/green-claims-fix',
    lang: 'en',
    canonical: 'https://exaptation.studio/en/green-claims-fix/',
    title: 'Green Claims Fix | Environmental claims review for France & the EU',
    description: 'Identify environmental claims to review, the evidence to collect and the actions to take for communications in France and the European Union.',
  },
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

  const socialAndLanguage = `
    <meta property="og:image" content="https://exaptation.studio/green-claims-fix-card.jpg" />
    <meta name="twitter:title" content="${escapeHtml(item.title)}" />
    <meta name="twitter:description" content="${escapeHtml(item.description)}" />
    <meta name="twitter:image" content="https://exaptation.studio/green-claims-fix-card.jpg" />
    <link rel="alternate" hreflang="fr" href="https://exaptation.studio/fr/green-claims-fix/" />
    <link rel="alternate" hreflang="en" href="https://exaptation.studio/en/green-claims-fix/" />
    <link rel="alternate" hreflang="x-default" href="https://exaptation.studio/fr/green-claims-fix/" />`;
  html = html.replace('</head>', `${socialAndLanguage}\n</head>`);

  const routeDir = path.join(dist, item.route);
  await mkdir(routeDir, { recursive: true });
  await writeFile(path.join(routeDir, 'index.html'), html, 'utf8');
}
