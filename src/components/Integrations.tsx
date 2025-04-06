
import React from 'react';
import { Database, CalendarClock, Cloud, Package, Code, Zap, Cog, CreditCard, LineChart, Mail, Globe, Shield, Smartphone, PenTool } from 'lucide-react';
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
import { useIsMobile } from "@/hooks/use-mobile";

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
  {
    name: "Stripe",
    icon: <CreditCard className="h-10 w-10" />,
    color: "#6772E5",
    description: "Online payment processing",
    longDescription: "Stripe integration allows you to accept payments directly on your FlutterFlow website. Implement subscription models, one-time purchases, or donation systems with ease, all while maintaining top-level security standards.",
  },
  {
    name: "Analytics",
    icon: <LineChart className="h-10 w-10" />,
    color: "#E67E22",
    description: "Track user behavior and conversions",
    longDescription: "Integrate powerful analytics tools like Google Analytics, Mixpanel, or Amplitude to gain insights about your users. Track page views, event interactions, conversion funnels, and user journeys to optimize your FlutterFlow website performance.",
  },
  {
    name: "Email Marketing",
    icon: <Mail className="h-10 w-10" />,
    color: "#27AE60",
    description: "Grow your audience and engage customers",
    longDescription: "Connect your FlutterFlow website to email marketing platforms like Mailchimp, ConvertKit, or SendGrid. Automate email campaigns, create sign-up forms, and segment your audience for targeted communication to boost conversions.",
  },
  {
    name: "Domain & Hosting",
    icon: <Globe className="h-10 w-10" />,
    color: "#1ABC9C",
    description: "Professional web presence solutions",
    longDescription: "Our FlutterFlow websites can be deployed with custom domain names and reliable hosting solutions. We ensure fast loading times, high availability, and seamless domain management for a professional online presence.",
  },
  {
    name: "Security Solutions",
    icon: <Shield className="h-10 w-10" />,
    color: "#E74C3C",
    description: "Protect your website and user data",
    longDescription: "Implement industry-standard security measures including SSL certificates, data encryption, secure authentication flows, and GDPR compliance. We prioritize protecting your website and your users' sensitive information.",
  },
  {
    name: "Mobile Integration",
    icon: <Smartphone className="h-10 w-10" />,
    color: "#8E44AD",
    description: "Seamless native app connections",
    longDescription: "Create perfect synergy between your FlutterFlow mobile app and website. Share authentication states, data, and user preferences across platforms for a unified product experience that works seamlessly on all devices.",
  },
  {
    name: "Design Tools",
    icon: <PenTool className="h-10 w-10" />,
    color: "#F39C12",
    description: "Creative asset integrations",
    longDescription: "Connect your FlutterFlow website with design platforms like Figma, Adobe Creative Suite, or Canva. Streamline your design workflow and ensure consistency between design assets and your live website.",
  },
];

const Integrations = () => {
  const isMobile = useIsMobile();
  const scrollSpeed = 40; // Lower is faster
  
  return (
    <section id="integrations" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Powerful <span className="text-flutter-primary">Integrations</span>
        </h2>
        
        <p className="text-xl opacity-80 mb-10 max-w-2xl mx-auto">
          Connect your website to the tools and services you already use
        </p>
        
        <div className="relative overflow-hidden py-10">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          <div className="flex items-center overflow-hidden">
            <div 
              className="flex space-x-16 animate-none" 
              style={{ 
                animation: `scroll ${scrollSpeed * integrations.length}s linear infinite`,
                width: "auto"
              }}
            >
              {integrations.map((integration, index) => (
                <IntegrationItem key={index} integration={integration} />
              ))}
              {/* Duplicate items for seamless infinite scroll */}
              {integrations.map((integration, index) => (
                <IntegrationItem key={`dup-${index}`} integration={integration} />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${integrations.length * 100}%);
          }
        }
      `}</style>
    </section>
  );
};

const IntegrationItem = ({ integration }: { integration: Integration }) => {
  return (
    <TooltipProvider>
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
  );
};

export default Integrations;
