
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();

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
  const imageRef = useRef<HTMLDivElement>(null);
  
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

    setTimeout(() => {
      if (imageRef.current) {
        imageRef.current.classList.add('animate-fade-in');
      }
    }, 600);
  }, []);

  return (
    <div className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-flutter-primary/10 via-white to-flutter-light/10 overflow-hidden py-16 px-4">
      {/* Modern overlay design elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-64 h-64 bg-flutter-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-flutter-light/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-flutter-secondary/10 rounded-full blur-xl"></div>
        </div>
      </div>
      
      <div className="container mx-auto max-w-7xl z-10">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-8 lg:gap-12">
          {/* Content Side - Left */}
          <div className="w-full md:w-1/2 md:pr-6 lg:pr-12">
            <h1 
              ref={titleRef} 
              className="opacity-0 text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-6 text-flutter-dark leading-tight"
            >
              Fast, Beautiful, <span className="text-flutter-primary block mt-2">FlutterFlow Websites</span>
            </h1>
            
            <p 
              ref={subtitleRef}
              className="opacity-0 text-lg md:text-xl text-muted-foreground mb-8"
            >
              Elevate your online presence with stunning, high-performance websites
              built using the power and flexibility of FlutterFlow.
            </p>
            
            <div ref={ctaRef} className="opacity-0 flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                className="bg-flutter-primary hover:bg-flutter-secondary text-white text-base px-8 py-6"
                onClick={scrollToContact}
                size="lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get Started
              </Button>
              
              <Button 
                variant="outline" 
                className="text-flutter-dark border-flutter-dark hover:bg-flutter-dark hover:text-white text-base px-8 py-6"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
              >
                Explore Projects
              </Button>
            </div>
          </div>
          
          {/* Image Side - Right */}
          <div ref={imageRef} className="w-full md:w-1/2 opacity-0">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <AspectRatio ratio={16/10} className="bg-muted">
                <div className="absolute inset-0 bg-flutter-primary/20 rounded-xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" 
                  alt="FlutterFlow Web Development" 
                  className="object-cover w-full h-full rounded-xl"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
