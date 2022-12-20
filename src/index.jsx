import { MetricsProvider, StoreProvider } from '@mirai/data-sources';
import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

if (module.hot) module.hot.accept(); // ? is it working?

createRoot(document.getElementById('app')).render(
  <MetricsProvider token={process.env.METRICS}>
    <StoreProvider storage="MRO:WORKSHIFTS">
      <App />
    </StoreProvider>
  </MetricsProvider>,
);
