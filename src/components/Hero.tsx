
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
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

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-purple-50 to-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-flutter-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-flutter-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-flutter-light/20 rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 
          ref={titleRef} 
          className="opacity-0 text-4xl md:text-6xl font-bold mb-4 text-flutter-dark leading-tight"
        >
          Fast, Beautiful, Powerful <br />
          <span className="text-flutter-primary">Websites Crafted with FlutterFlow</span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="opacity-0 text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
        >
          Elevate your online presence with stunning, high-performance websites
          built using the power and flexibility of FlutterFlow.
        </p>
        
        <div ref={ctaRef} className="opacity-0 flex flex-col md:flex-row gap-4 justify-center mb-16">
          <Button 
            className="bg-flutter-primary hover:bg-flutter-secondary text-white text-lg px-8 py-6"
            onClick={scrollToContact}
          >
            <Mail className="mr-2 h-5 w-5" />
            Get Started – Let's Build Your Perfect Website
          </Button>
          
          <Button 
            variant="outline" 
            className="text-flutter-dark border-flutter-dark hover:bg-flutter-dark hover:text-white text-lg px-8 py-6"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Demo Websites
          </Button>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            className="rounded-full p-2"
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flutter-dark">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
