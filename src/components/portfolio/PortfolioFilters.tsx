
import React from 'react';
import { Button } from '@/components/ui/button';

interface PortfolioFiltersProps {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

const PortfolioFilters = ({ currentFilter, onFilterChange }: PortfolioFiltersProps) => {
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'business', label: 'Business' },
    { id: 'e-commerce', label: 'E-commerce' },
    { id: 'health', label: 'Health' },
    { id: 'administrative', label: 'Administrative' },
    { id: 'landing-page', label: 'Landing Page' },
  ];

  return (
    <div className="flex flex-wrap justify-center mb-10 gap-2">
      {filters.map(filter => (
        <Button
          key={filter.id}
          variant={currentFilter === filter.id ? 'default' : 'outline'}
          className={currentFilter === filter.id ? 'bg-flutter-primary hover:bg-flutter-secondary' : ''}
          onClick={() => onFilterChange(filter.id)}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
};

export default PortfolioFilters;
