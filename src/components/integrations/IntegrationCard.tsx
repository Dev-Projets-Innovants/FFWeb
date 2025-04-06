
import React from 'react';
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent
} from '@/components/ui/hover-card';
import { useIsMobile } from '@/hooks/use-mobile';

export interface IntegrationProps {
  name: string;
  icon: React.ReactNode;
  description: string;
  connection: string;
  benefit: string;
}

const IntegrationCard: React.FC<IntegrationProps> = ({ name, icon, description, connection, benefit }) => {
  const isMobile = useIsMobile();
  
  return (
    <HoverCard openDelay={300} closeDelay={200}>
      <HoverCardTrigger asChild>
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
      </HoverCardTrigger>
      {!isMobile && (
        <HoverCardContent side="bottom" align="center" className="w-80 p-4 z-50">
          <div className="space-y-2">
            <h4 className="font-medium text-foreground">{name}</h4>
            <p className="text-sm">{description}</p>
            <div className="pt-2">
              <p className="text-sm"><span className="font-semibold">Connection:</span> {connection}</p>
              <p className="text-sm"><span className="font-semibold">Benefit:</span> {benefit}</p>
            </div>
          </div>
        </HoverCardContent>
      )}
    </HoverCard>
  );
};

export default IntegrationCard;
