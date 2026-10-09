import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AtlasRouter } from './AtlasRouter';
import './styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AtlasRouter />
  </StrictMode>,
);
