import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/index.css';
import App from '@/App.tsx';
import { ChampionProvider } from '@/providers/champions-provider';

import './i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChampionProvider>
      <App />
    </ChampionProvider>
  </StrictMode>,
);
