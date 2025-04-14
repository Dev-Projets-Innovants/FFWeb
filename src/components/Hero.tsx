
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  // Refs for animated elements
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Stagger animations for a more dynamic entrance
    if (titleRef.current) {
      titleRef.current.classList.add('animate-fade-in');
    }
    setTimeout(() => {
      if (subtitleRef.current) {
        subtitleRef.current.classList.add('animate-fade-in');
      }
    }, 200);
    setTimeout(() => {
      if (ctaRef.current) {
        ctaRef.current.classList.add('animate-fade-in');
      }
    }, 400);
  }, []);

  return <div className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center py-16 px-4" style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')",
    backgroundPosition: "center",
    backgroundSize: "cover"
  }}>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-flutter-dark/70"></div>
      
      {/* Content container */}
      <div className="container mx-auto max-w-3xl z-10 text-center px-4">
        <h1 ref={titleRef} className="opacity-0 text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
          Build Fast, Beautiful <span className="text-flutter-primary block mt-2">Websites, Landing Pages & Web Apps</span>
        </h1>
        
        <p ref={subtitleRef} className="opacity-0 text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Transform your ideas into stunning digital experiences — 
          Websites, Landing Pages, and Web Applications built with FlutterFlow's powerful low-code platform
        </p>
        
        <div ref={ctaRef} className="opacity-0 flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <Button className="bg-flutter-primary hover:bg-flutter-secondary text-white text-base px-8 py-6" onClick={scrollToContact} size="lg">
            <Mail className="mr-2 h-5 w-5" />
            Get Started
          </Button>
          
          <Button variant="outline" onClick={() => document.getElementById('portfolio')?.scrollIntoView({
          behavior: 'smooth'
        })} size="lg" className="border-white hover:bg-white/20 text-base px-8 py-6 text-slate-900">
            Explore Projects
          </Button>
        </div>
      </div>
    </div>;
};

export default Hero;
