import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GreenClaimsFixV2 from './src/pages/GreenClaimsFixV2';
import { GreenClaimsGuidePage, GreenClaimsLibraryHub } from './src/pages/GreenClaimsLibrary';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element to mount to');
}

const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
const pathname = window.location.pathname.replace(/\/$/, '') || '/';
const appPath = basePath && pathname.startsWith(basePath)
  ? pathname.slice(basePath.length) || '/'
  : pathname;

const legacyGcf = appPath === '/green-claims-fix';
const frGcf = appPath === '/fr/green-claims-fix';
const enGcf = appPath === '/en/green-claims-fix';
const guideHub = appPath === '/fr/green-claims-fix/guides';
const guidePrefix = '/fr/green-claims-fix/guides/';
const guideSlug = appPath.startsWith(guidePrefix) ? appPath.slice(guidePrefix.length) : null;

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    {guideHub ? (
      <GreenClaimsLibraryHub />
    ) : guideSlug ? (
      <GreenClaimsGuidePage slug={guideSlug} />
    ) : legacyGcf || frGcf ? (
      <GreenClaimsFixV2 initialLang="fr" />
    ) : enGcf ? (
      <GreenClaimsFixV2 initialLang="en" />
    ) : (
      <App />
    )}
  </React.StrictMode>
);
