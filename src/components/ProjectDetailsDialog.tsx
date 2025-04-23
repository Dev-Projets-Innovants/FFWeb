
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Server, Code, Globe } from 'lucide-react';

interface ProjectDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
}

const ProjectDetailsDialog = ({ open, onOpenChange, title }: ProjectDetailsDialogProps) => {
  if (title !== "Visa and Passport Management System") return null;

  const features = [
    "Online appointment scheduling for passport and visa services",
    "Real-time availability tracking",
    "Document upload and verification system",
    "Automated email notifications",
    "User dashboard for application status tracking",
    "Admin panel for managing appointments and applications",
    "Digital form submission and processing",
    "Multiple authentication levels",
    "Secure payment integration",
    "Document validation and verification"
  ];

  const technologies = [
    "React.js for frontend development",
    "Node.js and Express.js backend",
    "MongoDB for database management",
    "JWT for authentication",
    "Redux for state management",
    "Tailwind CSS for styling",
    "RESTful API architecture",
    "AWS for cloud hosting",
    "Socket.io for real-time updates",
    "Docker for containerization"
  ];

  const services = [
    "Passport Application Processing",
    "Visa Application Management",
    "Document Verification",
    "Appointment Scheduling",
    "Status Tracking",
    "Payment Processing",
    "Email Notifications",
    "Support Ticketing",
    "Digital Document Storage",
    "Identity Verification"
  ];

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2 p-3 rounded-lg border bg-white/50">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="technologies" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-start gap-2 p-3 rounded-lg border bg-white/50">
                  <Code className="h-5 w-5 text-flutter-primary mt-0.5" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="services" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-2 p-3 rounded-lg border bg-white/50">
                  <Server className="h-5 w-5 text-flutter-secondary mt-0.5" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailsDialog;
