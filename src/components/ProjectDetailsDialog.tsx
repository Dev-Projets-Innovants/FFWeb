
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
import { Badge } from "@/components/ui/badge";
import ProjectFeatures from './project-details/ProjectFeatures';
import ProjectIntegrations from './project-details/ProjectIntegrations';
import { getProjectDetails } from './project-details/getProjectDetails';

interface ProjectDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
}

const ProjectDetailsDialog = ({ open, onOpenChange, title }: ProjectDetailsDialogProps) => {
  const { features, integrations, tags } = getProjectDetails(title);
  const isAvailableForSale = title === "Consulting landing page";
  const marketplaceUrl = "https://marketplace.flutterflow.io/creator/a133be95dc6a2c59a0453dc15ac8dce90080c3d8";

  if (features.length === 0) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-2xl font-bold text-flutter-dark">
                {title}
              </DialogTitle>
              {isAvailableForSale && (
                <a href={marketplaceUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="default" className="bg-[#4CAF50] hover:bg-[#45a049] text-white">
                    View in Marketplace
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              )}
            </div>
            <div className="flex gap-2">
              {tags.map((tag, index) => (
                <Badge 
                  key={index} 
                  variant="secondary"
                  className="bg-flutter-primary/10 text-flutter-primary hover:bg-flutter-primary/20"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </DialogHeader>

        <Tabs defaultValue="features" className="w-full mt-6">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="mt-6">
            <ProjectFeatures features={features} />
          </TabsContent>

          <TabsContent value="integrations" className="mt-6">
            <ProjectIntegrations integrations={integrations} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailsDialog;
