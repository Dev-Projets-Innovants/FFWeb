
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectFeatures from './project-details/ProjectFeatures';
import ProjectTechnologies from './project-details/ProjectTechnologies';
import ProjectServices from './project-details/ProjectServices';
import { getProjectDetails } from './project-details/getProjectDetails';

interface ProjectDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
}

const ProjectDetailsDialog = ({ open, onOpenChange, title }: ProjectDetailsDialogProps) => {
  const { features, technologies, services } = getProjectDetails(title);
  const isAvailableForSale = title === "Consulting landing page";
  const marketplaceUrl = "https://marketplace.flutterflow.io/creator/a133be95dc6a2c59a0453dc15ac8dce90080c3d8";

  if (features.length === 0) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between w-full">
            <DialogTitle className="text-2xl font-bold text-flutter-dark flex-grow">
              {title}
            </DialogTitle>
            {isAvailableForSale && (
              <div className="ml-4">
                <a href={marketplaceUrl} target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="default" 
                    className="bg-[#4CAF50] hover:bg-[#45a049] text-white"
                    size="sm"
                  >
                    View in Marketplace
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            )}
          </div>
        </DialogHeader>

        <Tabs defaultValue="features" className="w-full mt-6">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="technologies">Technologies</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="mt-6">
            <ProjectFeatures features={features} />
          </TabsContent>

          <TabsContent value="technologies" className="mt-6">
            <ProjectTechnologies technologies={technologies} />
          </TabsContent>

          <TabsContent value="services" className="mt-6">
            <ProjectServices services={services} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailsDialog;

