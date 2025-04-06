import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Menu, Puzzle, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

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
      console.log(`Scrolling to element with id: ${id}`);
      element.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      console.log(`Element with id: ${id} not found`);
    }
  };

  const navigationItems = [
    { id: 'about-me', label: 'About Me' },
    { id: 'features', label: 'Features' },
    { id: 'how-it-works', label: 'Process' },
    { id: 'portfolio', label: 'Portfolio' },
    { 
      id: 'integrations', 
      label: 'Integrations',
      icon: <Puzzle className="mr-1 h-4 w-4" />
    },
    { id: 'faq', label: 'FAQ' },
  ];

  const NavLinks = ({ onClick = undefined }) => (
    <>
      {navigationItems.map((item) => (
        <button 
          key={item.id}
          onClick={() => {
            scrollToSection(item.id);
            if (onClick) onClick();
          }} 
          className={`font-medium hover:text-flutter-primary transition-colors text-base ${scrolled ? 'text-zinc-800' : 'text-white'} ${isMobile ? 'flex items-center py-4 px-2 w-full justify-start text-zinc-800' : ''}`}
        >
          <span className="flex items-center">
            {item.icon}
            {item.label}
          </span>
        </button>
      ))}
    </>
  );

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-white/80 backdrop-blur-md shadow-sm' : 'py-4 bg-black/20 backdrop-blur-sm'}`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <span className="text-flutter-primary font-bold text-2xl">
            FF<span className={`${scrolled ? 'text-zinc-950' : 'text-white'}`}>Web</span>
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </div>

        <div className="flex items-center space-x-4">
          <Button className="bg-flutter-primary hover:bg-flutter-secondary" onClick={() => scrollToSection('contact')}>
            <Mail className="mr-2 h-4 w-4" />
            Contact Us
          </Button>
          
          {/* Mobile Navigation - Moved after Contact Us button */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="p-2">
                  <Menu className={`h-6 w-6 ${scrolled ? 'text-black' : 'text-white'}`} />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[80%] sm:w-[350px]">
                <div className="py-8">
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-flutter-primary font-bold text-2xl">
                      FFWeb
                    </span>
                  </div>
                  <nav className="flex flex-col gap-1">
                    <NavLinks onClick={() => document.querySelector('[data-state="open"]')?.setAttribute('data-state', 'closed')} />
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
