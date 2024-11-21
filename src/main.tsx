import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/index.css';
import App from '@/App.tsx';
import { ChampionProvider } from './providers/champions-provider';

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <ChampionProvider>
//       <App />
//     </ChampionProvider>
//   </StrictMode>,
// );

createRoot(document.getElementById('root')!).render(
  <ChampionProvider>
    <App />
  </ChampionProvider>,
);
