import React, { useState, useEffect } from 'react';
import { ExternalLink, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectDetailsDialog from '../ProjectDetailsDialog';
import { Badge } from '@/components/ui/badge';

export interface PortfolioItemProps {
  title: string;
  category: string;
  imageUrl: string;
  projectUrl: string;
  showDetails?: boolean;
}

const PortfolioItem = ({ title, category, imageUrl, projectUrl, showDetails }: PortfolioItemProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [imageLoadError, setImageLoadError] = useState(false);

  useEffect(() => {
    console.log(`Image URL for ${title}:`, imageUrl);
    console.log(`Category for ${title}:`, category);
  }, [imageUrl, title, category]);

  const handleImageError = () => {
    console.error(`Failed to load image for ${title}:`, imageUrl);
    setImageLoadError(true);
  };

  const isExpertConnect = title === "ExpertConnect";
  const isAvailableForSale = !["Visa and Passport Management System", "African Health Organization"].includes(title);

  return (
    <>
      <div 
        className="group relative overflow-hidden rounded-xl transform transition-all duration-500 opacity-0"
        data-animate="true"
      >
        <div className="absolute top-4 right-4 z-10">
          <Badge 
            variant={isExpertConnect ? "default" : "destructive"}
            className={`
              flex items-center gap-1 px-3 py-1 
              ${isExpertConnect 
                ? 'bg-[#4CAF50] text-white' 
                : 'bg-destructive text-destructive-foreground'}
            `}
          >
            <Tag className="h-3.5 w-3.5" />
            {isExpertConnect ? "Available for Sale" : "Already Owned"}
          </Badge>
        </div>
        
        <div className="aspect-video w-full overflow-hidden">
          {!imageLoadError ? (
            <img 
              src={imageUrl} 
              alt={title} 
              onError={handleImageError}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
              Image Not Available
            </div>
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <h3 className="text-white text-xl font-semibold drop-shadow-lg">{title}</h3>
          <p className="text-white/90 mb-4 drop-shadow-md">{category}</p>
          <div className="flex gap-2">
            {showDetails && (
              <Button 
                variant="outline" 
                className="text-white border-white/80 backdrop-blur-sm bg-black/20 hover:bg-white hover:text-flutter-dark"
                onClick={() => setIsDialogOpen(true)}
              >
                View Details
              </Button>
            )}
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="text-white border-white/80 backdrop-blur-sm bg-black/20 hover:bg-white hover:text-flutter-dark">
                View Project <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
      {showDetails && (
        <ProjectDetailsDialog 
          open={isDialogOpen} 
          onOpenChange={setIsDialogOpen}
          title={title}
        />
      )}
    </>
  );
};

export default PortfolioItem;
