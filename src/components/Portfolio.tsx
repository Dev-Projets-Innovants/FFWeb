
import React, { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PortfolioItemProps {
  title: string;
  category: string;
  imageUrl: string;
  projectUrl: string;
  delay: number;
}

const PortfolioItem = ({ title, category, imageUrl, projectUrl, delay }: PortfolioItemProps) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-xl opacity-0"
      style={{ animationDelay: `${delay}ms` }}
      data-animate="true"
    >
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-white text-xl font-semibold">{title}</h3>
        <p className="text-white/80 mb-4">{category}</p>
        <a href={projectUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-flutter-dark">
            View Project <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('[data-animate="true"]');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const portfolioItems = [
    {
      title: "Modern E-commerce Store",
      category: "e-commerce",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      projectUrl: "https://flutterflow.io",
      delay: 100
    },
    {
      title: "Corporate Business Site",
      category: "business",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      projectUrl: "https://flutterflow.io",
      delay: 200
    },
    {
      title: "Health and Wellness Portal",
      category: "health",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      projectUrl: "https://flutterflow.io",
      delay: 300
    },
    {
      title: "Administrative Dashboard",
      category: "administrative",
      imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      projectUrl: "https://flutterflow.io",
      delay: 400
    },
    {
      title: "Restaurant Booking System",
      category: "business",
      imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
      projectUrl: "https://flutterflow.io",
      delay: 500
    },
    {
      title: "Professional Landing Page",
      category: "landing-page",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      projectUrl: "https://flutterflow.io",
      delay: 600
    }
  ];

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">
          Portfolio <span className="text-flutter-primary">Showcase</span>
        </h2>
        
        <p className="section-subheading text-center">
          Explore our collection of high-performance websites built with FlutterFlow.
          Each project highlights different capabilities and use cases.
        </p>
        
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            className={filter === 'all' ? 'bg-flutter-primary hover:bg-flutter-secondary' : ''}
            onClick={() => setFilter('all')}
          >
            All Projects
          </Button>
          <Button
            variant={filter === 'business' ? 'default' : 'outline'}
            className={filter === 'business' ? 'bg-flutter-primary hover:bg-flutter-secondary' : ''}
            onClick={() => setFilter('business')}
          >
            Business
          </Button>
          <Button
            variant={filter === 'e-commerce' ? 'default' : 'outline'}
            className={filter === 'e-commerce' ? 'bg-flutter-primary hover:bg-flutter-secondary' : ''}
            onClick={() => setFilter('e-commerce')}
          >
            E-commerce
          </Button>
          <Button
            variant={filter === 'health' ? 'default' : 'outline'}
            className={filter === 'health' ? 'bg-flutter-primary hover:bg-flutter-secondary' : ''}
            onClick={() => setFilter('health')}
          >
            Health
          </Button>
          <Button
            variant={filter === 'administrative' ? 'default' : 'outline'}
            className={filter === 'administrative' ? 'bg-flutter-primary hover:bg-flutter-secondary' : ''}
            onClick={() => setFilter('administrative')}
          >
            Administrative
          </Button>
          <Button
            variant={filter === 'landing-page' ? 'default' : 'outline'}
            className={filter === 'landing-page' ? 'bg-flutter-primary hover:bg-flutter-secondary' : ''}
            onClick={() => setFilter('landing-page')}
          >
            Landing Page
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <PortfolioItem
              key={index}
              title={item.title}
              category={item.category}
              imageUrl={item.imageUrl}
              projectUrl={item.projectUrl}
              delay={item.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
