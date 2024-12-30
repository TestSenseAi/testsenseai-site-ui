import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/NavBar';
import ComingSoonBanner from './components/common/ComingSoonBanner';
import Hero from './components/Hero';
import FeatureHighlight from './components/features/FeatureHighlight';
import Features from './components/features/Features';
import Testimonials from './components/social/Testimonials';
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
      <FeatureHighlight />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </ChakraProvider>
  );
}

export default App;