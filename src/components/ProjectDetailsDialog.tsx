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
  let features = [];
  let technologies = [];
  let services = [];

  if (title === "Visa and Passport Management System") {
    features = [
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

    technologies = [
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

    services = [
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
  } else if (title === "African Health Organization") {
    features = [
      "Patient Management System",
      "Telemedicine Integration",
      "Medical Records Database",
      "Appointment Scheduling",
      "Prescription Management",
      "Health Analytics Dashboard",
      "Emergency Response System",
      "Medical Inventory Management",
      "Healthcare Provider Network",
      "Patient Portal Access"
    ];

    technologies = [
      "React.js for frontend",
      "Node.js and Express backend",
      "MongoDB for patient records",
      "WebRTC for telemedicine",
      "AWS for cloud infrastructure",
      "Socket.io for real-time updates",
      "Redux for state management",
      "TailwindCSS for styling",
      "Jest for testing",
      "Docker deployment"
    ];

    services = [
      "Online Consultations",
      "Medical Record Management",
      "Emergency Services",
      "Healthcare Analytics",
      "Prescription Services",
      "Provider Network Access",
      "Patient Education Portal",
      "Inventory Management",
      "Appointment Management",
      "Health Monitoring"
    ];
  } else if (title === "Administrative Dashboard") {
    features = [
      "User management and role-based access control",
      "Real-time data visualization and analytics",
      "Comprehensive reporting tools",
      "Task management and workflow automation",
      "Resource allocation and tracking",
      "System health monitoring",
      "Notification and alert system",
      "Activity logs and audit trails",
      "Data import/export functionality",
      "Custom dashboard configuration"
    ];

    technologies = [
      "React.js for frontend development",
      "TypeScript for type safety",
      "Node.js backend with Express",
      "PostgreSQL database",
      "Chart.js for data visualization",
      "Material UI component library",
      "Redux for state management",
      "Axios for API requests",
      "Jest for testing",
      "CI/CD pipeline integration"
    ];

    services = [
      "User Administration",
      "Analytics Dashboard",
      "Report Generation",
      "Workflow Management",
      "System Configuration",
      "Performance Monitoring",
      "Data Management",
      "Authentication Services",
      "API Integration",
      "File Management"
    ];
  } else if (title === "ExpertConnect") {
    features = [
      "Expert consultant matching system",
      "Advanced search and filtering",
      "Real-time availability calendar",
      "Secure messaging platform",
      "Video consultation integration",
      "Client portfolio management",
      "Consultant profiles and ratings",
      "Booking management system",
      "Payment processing integration",
      "Analytics dashboard"
    ];

    technologies = [
      "React.js for frontend",
      "Node.js backend",
      "MongoDB database",
      "WebRTC for video calls",
      "Stripe payment integration",
      "Redux for state management",
      "TailwindCSS for styling",
      "JWT authentication",
      "Socket.io for real-time features",
      "AWS hosting infrastructure"
    ];

    services = [
      "Expert Consultant Matching",
      "Business Strategy Consulting",
      "Operational Improvement",
      "Market Analysis",
      "Financial Advisory",
      "Technology Consulting",
      "Project Management",
      "Risk Assessment",
      "Performance Optimization",
      "Industry Research"
    ];
  }

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
