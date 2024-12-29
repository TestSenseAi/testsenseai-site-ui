import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/NavBar';
import ComingSoonBanner from './components/common/ComingSoonBanner';
import Hero from './components/Hero';
import Features from './components/features/Features';
import Pricing from './components/pricing/Pricing';
import FAQ from './components/faq/FAQ';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ComingSoonBanner />
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </ChakraProvider>
  );
}

export default App;