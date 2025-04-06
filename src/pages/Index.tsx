
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Portfolio from '@/components/Portfolio';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Integrations from '@/components/Integrations';

const Index = () => {
  useEffect(() => {
    // Set the document title
    document.title = 'FFWeb - Premium FlutterFlow Websites';
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Portfolio />
      <Integrations />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
