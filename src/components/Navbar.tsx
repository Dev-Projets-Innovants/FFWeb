import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    document.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-white/80 backdrop-blur-md shadow-sm' : 'py-4 bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <span className="text-flutter-primary font-bold text-2xl">
            FF<span className="text-flutter-dark">Web</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('features')} className="text-flutter-dark hover:text-flutter-primary transition-colors text-base text-zinc-950">
            Features
          </button>
          <button onClick={() => scrollToSection('how-it-works')} className="text-flutter-dark hover:text-flutter-primary transition-colors">
            Process
          </button>
          <button onClick={() => scrollToSection('portfolio')} className="text-flutter-dark hover:text-flutter-primary transition-colors">
            Portfolio
          </button>
          <button onClick={() => scrollToSection('pricing')} className="text-flutter-dark hover:text-flutter-primary transition-colors">
            Pricing
          </button>
          <button onClick={() => scrollToSection('faq')} className="text-flutter-dark hover:text-flutter-primary transition-colors">
            FAQ
          </button>
        </div>

        <Button className="bg-flutter-primary hover:bg-flutter-secondary" onClick={() => scrollToSection('contact')}>
          <Mail className="mr-2 h-4 w-4" />
          Contact Us
        </Button>
      </div>
    </nav>;
};
export default Navbar;