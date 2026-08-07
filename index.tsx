import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GreenClaimsFix from './src/pages/GreenClaimsFix';
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
const Page = appPath === '/green-claims-fix' ? GreenClaimsFix : App;

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);
