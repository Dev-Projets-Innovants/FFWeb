
import React from 'react';
import { Database, CalendarClock, Cloud, Package, Code, Zap, Cog } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Integration {
  name: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  longDescription: string;
}

const integrations: Integration[] = [
  {
    name: "Supabase",
    icon: <Database className="h-10 w-10" />,
    color: "#3ECF8E",
    description: "Open source Firebase alternative",
    longDescription: "Supabase is an open source Firebase alternative providing all the backend services you need. It offers authentication, edge functions, realtime subscriptions, and storage solutions, perfectly complementing your FlutterFlow websites.",
  },
  {
    name: "Appointment Services",
    icon: <CalendarClock className="h-10 w-10" />,
    color: "#6C5CE7",
    description: "Seamless scheduling integrations",
    longDescription: "Integrate with popular scheduling platforms like Calendly, Acuity, and more. Allow your users to book appointments directly through your FlutterFlow website with real-time availability and automatic confirmations.",
  },
  {
    name: "Firebase",
    icon: <Cloud className="h-10 w-10" />,
    color: "#FFCA28",
    description: "Google's app development platform",
    longDescription: "Firebase provides tools to help you build, grow and monetize your app. Our websites seamlessly integrate with Firebase Authentication, Realtime Database, Cloud Firestore, Storage, and more to create powerful, scalable applications.",
  },
  {
    name: "Buildship",
    icon: <Package className="h-10 w-10" />,
    color: "#3498DB",
    description: "Streamlined deployment solutions",
    longDescription: "Buildship simplifies the process of deploying your FlutterFlow projects. Our integration allows for seamless deployment pipelines, automatic updates, and version control to keep your website synchronized with your FlutterFlow app.",
  },
  {
    name: "Xano",
    icon: <Code className="h-10 w-10" />,
    color: "#9B59B6",
    description: "No-code backend development",
    longDescription: "Xano is the fastest way to build a scalable backend API. Our integration lets your FlutterFlow website connect to custom APIs without writing backend code, enabling complex functionalities like user management, payments, and data processing.",
  },
  {
    name: "Zapier",
    icon: <Zap className="h-10 w-10" />,
    color: "#FF4F00",
    description: "Connect your apps and automate workflows",
    longDescription: "Connect your FlutterFlow website to thousands of the most popular apps. Our Zapier integration enables you to automate workflows, sync data across platforms, and create powerful automations without any coding required.",
  },
  {
    name: "API Integrations",
    icon: <Cog className="h-10 w-10" />,
    color: "#2ECC71",
    description: "Connect to any third-party service",
    longDescription: "Our websites can integrate with virtually any API. Whether you need payment processing with Stripe, email marketing with Mailchimp, or CRM integration with Salesforce, we can build custom connections to enhance your FlutterFlow website.",
  },
];

const Integrations = () => {
  return (
    <section id="integrations" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Powerful <span className="text-flutter-primary">Integrations</span>
        </h2>
        
        <p className="text-xl opacity-80 mb-10 max-w-2xl mx-auto">
          Connect your website to the tools and services you already use
        </p>
        
        <div className="relative overflow-hidden py-10">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <div className="flex items-center space-x-16 overflow-hidden">
            <div className="flex space-x-16 animate-scroll">
              {integrations.map((integration, index) => (
                <TooltipProvider key={index}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex flex-col items-center hover-scale cursor-pointer">
                        <Dialog>
                          <DialogTrigger asChild>
                            <div 
                              className="p-6 rounded-xl bg-white shadow-lg mb-4"
                              style={{ color: integration.color }}
                            >
                              {integration.icon}
                            </div>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle className="flex items-center gap-2">
                                <span style={{ color: integration.color }}>
                                  {React.cloneElement(integration.icon as React.ReactElement, { className: "h-6 w-6" })}
                                </span>
                                {integration.name} Integration
                              </DialogTitle>
                              <DialogDescription className="pt-4 text-left">
                                {integration.longDescription}
                              </DialogDescription>
                            </DialogHeader>
                          </DialogContent>
                        </Dialog>
                        <h3 className="font-semibold">{integration.name}</h3>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{integration.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
              {/* Duplicate items for infinite scroll effect */}
              {integrations.map((integration, index) => (
                <TooltipProvider key={`dup-${index}`}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex flex-col items-center hover-scale cursor-pointer">
                        <Dialog>
                          <DialogTrigger asChild>
                            <div 
                              className="p-6 rounded-xl bg-white shadow-lg mb-4"
                              style={{ color: integration.color }}
                            >
                              {integration.icon}
                            </div>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle className="flex items-center gap-2">
                                <span style={{ color: integration.color }}>
                                  {React.cloneElement(integration.icon as React.ReactElement, { className: "h-6 w-6" })}
                                </span>
                                {integration.name} Integration
                              </DialogTitle>
                              <DialogDescription className="pt-4 text-left">
                                {integration.longDescription}
                              </DialogDescription>
                            </DialogHeader>
                          </DialogContent>
                        </Dialog>
                        <h3 className="font-semibold">{integration.name}</h3>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{integration.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
