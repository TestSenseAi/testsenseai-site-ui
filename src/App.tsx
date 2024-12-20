import dotenv from 'dotenv';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import { Header } from './components/layout/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';

import * as Sentry from '@sentry/react';
import { Container, createRoot } from 'react-dom/client';

dotenv.config();
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ['localhost', /^https:\/\/testsense\.ai/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

const container = document.getElementById('app');
const root = createRoot(container as Container);
root.render(<App />);

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
        <Header />
        <main className="pt-16">
          <Hero />
          <Features />
        </main>
      </div>
    </MantineProvider>
  );
}

export default App;
