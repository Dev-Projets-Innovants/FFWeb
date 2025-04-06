
import React from 'react';

export interface IntegrationProps {
  name: string;
  icon: React.ReactNode;
  description: string;
  connection: string;
  benefit: string;
}

const IntegrationCard: React.FC<IntegrationProps> = ({ name, icon, description }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 m-2 rounded-xl bg-card border border-border 
      hover:shadow-lg hover:shadow-flutter-primary/20 hover:-translate-y-1 
      transition-all duration-300 cursor-pointer 
      w-[180px] h-[180px] group">
      <div className="flex flex-col items-center text-center gap-2 
        group-hover:scale-105 transition-transform duration-300">
        {React.cloneElement(icon as React.ReactElement, {
          className: "h-10 w-10 text-primary group-hover:text-primary/80 transition-colors"
        })}
        <h3 className="text-lg font-semibold mt-2 truncate max-w-full">{name}</h3>
        <p className="text-sm text-muted-foreground truncate max-w-full">{description}</p>
      </div>
    </div>
  );
};

export default IntegrationCard;
