import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import { Header } from './components/layout/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';

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