import { createRoot } from 'react-dom/client';

import { App } from './App.tsx';

import './index.css';
import { LanguageProvider } from './context/language-context.tsx';

createRoot(document.getElementById('root')!).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
