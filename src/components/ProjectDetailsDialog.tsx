
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

  if (features.length === 0) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-flutter-dark">
            {title}
          </DialogTitle>
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
