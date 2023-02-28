import React from 'react';
import { createRoot } from 'react-dom/client';

// Import root app
import { App } from 'app';

import { HelmetProvider } from 'react-helmet-async';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);

root.render(
  <HelmetProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HelmetProvider>,
);
