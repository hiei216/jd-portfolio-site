import { createRoot } from 'react-dom/client';

import { App } from './App.tsx';
import { LanguageProvider } from './context/language-context.tsx';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
