
import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectDetailsDialog from '../ProjectDetailsDialog';

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

  return (
    <>
      <div 
        className="group relative overflow-hidden rounded-xl transform transition-all duration-500 opacity-0"
        data-animate="true"
      >
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <h3 className="text-white text-xl font-semibold">{title}</h3>
          <p className="text-white/80 mb-4">{category}</p>
          <div className="flex gap-2">
            {showDetails && (
              <Button 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-flutter-dark"
                onClick={() => setIsDialogOpen(true)}
              >
                View Details
              </Button>
            )}
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-flutter-dark">
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
