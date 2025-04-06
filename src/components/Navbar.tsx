
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Puzzle } from "lucide-react";

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

  return <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-white/80 backdrop-blur-md shadow-sm' : 'py-4 bg-black/20 backdrop-blur-sm'}`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <span className="text-flutter-primary font-bold text-2xl">
            FF<span className={`${scrolled ? 'text-zinc-950' : 'text-white'}`}>Web</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('features')} className={`font-medium hover:text-flutter-primary transition-colors text-base ${scrolled ? 'text-zinc-800' : 'text-white'}`}>
            Features
          </button>
          <button onClick={() => scrollToSection('how-it-works')} className={`font-medium hover:text-flutter-primary transition-colors ${scrolled ? 'text-zinc-800' : 'text-white'}`}>
            Process
          </button>
          <button onClick={() => scrollToSection('portfolio')} className={`font-medium hover:text-flutter-primary transition-colors ${scrolled ? 'text-zinc-800' : 'text-white'}`}>
            Portfolio
          </button>
          <button onClick={() => scrollToSection('integrations')} className={`font-medium hover:text-flutter-primary transition-colors ${scrolled ? 'text-zinc-800' : 'text-white'}`}>
            <span className="flex items-center">
              <Puzzle className="mr-1 h-4 w-4" />
              Integrations
            </span>
          </button>
          <button onClick={() => scrollToSection('pricing')} className={`font-medium hover:text-flutter-primary transition-colors ${scrolled ? 'text-zinc-800' : 'text-white'}`}>
            Pricing
          </button>
          <button onClick={() => scrollToSection('faq')} className={`font-medium hover:text-flutter-primary transition-colors ${scrolled ? 'text-zinc-800' : 'text-white'}`}>
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
