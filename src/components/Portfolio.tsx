
import React, { useEffect, useRef } from 'react';
import PortfolioItem from './portfolio/PortfolioItem';
import PortfolioFilters from './portfolio/PortfolioFilters';
import { portfolioItems } from './portfolio/portfolioData';

const Portfolio = () => {
  const [filter, setFilter] = React.useState('all');
  const portfolioRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Set up the intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, { threshold: 0.1 });
    
    // Select all portfolio items
    const portfolioSection = portfolioRef.current;
    if (portfolioSection) {
      const elements = portfolioSection.querySelectorAll('[data-animate="true"]');
      elements.forEach(el => observer.observe(el));
    }
    
    return () => {
      if (portfolioSection) {
        const elements = portfolioSection.querySelectorAll('[data-animate="true"]');
        elements.forEach(el => observer.unobserve(el));
      }
    };
  }, [filter]); // Re-run when filter changes to animate new items

  // Log the current filter and items to help debug
  console.log('Current filter:', filter);
  console.log('All items:', portfolioItems);
  
  // Check if portfolioItems is defined and not empty
  if (!portfolioItems || portfolioItems.length === 0) {
    console.warn('Portfolio items array is empty or undefined');
  }
  
  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => {
        console.log(`Comparing item category "${item.category}" with filter "${filter}"`);
        return item.category === filter;
      });
  
  // Log the filtered items to check what's being returned
  console.log('Filtered items:', filteredItems);

  return (
    <section id="portfolio" className="py-20 px-4 bg-white">
      <div className="container mx-auto" ref={portfolioRef}>
        <h2 className="section-heading text-center">
          Portfolio <span className="text-flutter-primary">Showcase</span>
        </h2>
        
        <p className="section-subheading text-center">
          Explore our collection of high-performance websites built with FlutterFlow.
          Each project highlights different capabilities and use cases.
        </p>
        
        <PortfolioFilters 
          currentFilter={filter}
          onFilterChange={setFilter}
        />
        
        {filteredItems && filteredItems.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <PortfolioItem
                key={index}
                {...item}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">No projects available in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
