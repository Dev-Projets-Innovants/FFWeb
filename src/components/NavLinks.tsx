
import React from 'react';

interface NavLinksProps {
  scrollToSection: (id: string) => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ scrollToSection }) => {
  const navItems = ['Features', 'Process', 'Portfolio', 'Pricing', 'FAQ'];
  
  return (
    <div className="hidden md:flex items-center space-x-8">
      {navItems.map((section) => (
        <button 
          key={section}
          onClick={() => scrollToSection(section.toLowerCase())}
          className="text-white font-semibold hover:text-flutter-primary transition-colors px-3 py-2 rounded-md bg-flutter-primary/20 hover:bg-flutter-primary/30"
        >
          {section}
        </button>
      ))}
    </div>
  );
};

export default NavLinks;
