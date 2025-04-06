
import React, { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { 
  Database, CalendarClock, CreditCard, FileSpreadsheet, Notebook, 
  Zap, Search, MessageSquareCode, Shield, Mail, Package
} from 'lucide-react';

interface IntegrationProps {
  name: string;
  icon: React.ReactNode;
  description: string;
  connection: string;
  benefit: string;
}

const integrationsList: IntegrationProps[] = [
  {
    name: "Supabase",
    icon: <Database className="h-10 w-10 text-primary" />,
    description: "Backend-as-a-Service platform",
    connection: "Direct API integration with your FlutterFlow app",
    benefit: "Secure database, auth, and storage with minimal setup"
  },
  {
    name: "Firebase",
    icon: <Database className="h-10 w-10 text-primary" />,
    description: "Google's mobile platform",
    connection: "Native packages and API integration",
    benefit: "Real-time database, auth, and hosting in one place"
  },
  {
    name: "Xano",
    icon: <Database className="h-10 w-10 text-primary" />,
    description: "No-code backend platform",
    connection: "REST API endpoints",
    benefit: "Custom backend without writing server code"
  },
  {
    name: "BuildShip",
    icon: <Package className="h-10 w-10 text-primary" />,
    description: "App deployment platform",
    connection: "Direct publishing from FlutterFlow",
    benefit: "Simplifies the app release process"
  },
  {
    name: "Airtable",
    icon: <Database className="h-10 w-10 text-primary" />,
    description: "Spreadsheet-database hybrid",
    connection: "REST API or custom webhooks",
    benefit: "Flexible data management and collaboration"
  },
  {
    name: "Calendly",
    icon: <CalendarClock className="h-10 w-10 text-primary" />,
    description: "Scheduling automation",
    connection: "Embed or API integration",
    benefit: "Smooth appointment booking within your app"
  },
  {
    name: "Stripe",
    icon: <CreditCard className="h-10 w-10 text-primary" />,
    description: "Payment processing platform",
    connection: "SDK and API integration",
    benefit: "Secure payment processing for your services"
  },
  {
    name: "Google Sheets",
    icon: <FileSpreadsheet className="h-10 w-10 text-primary" />,
    description: "Cloud-based spreadsheets",
    connection: "Google Sheets API",
    benefit: "Use spreadsheets as simple databases or report generators"
  },
  {
    name: "Notion",
    icon: <Notebook className="h-10 w-10 text-primary" />,
    description: "All-in-one workspace",
    connection: "Notion API",
    benefit: "Connect your app to your team's knowledge base"
  },
  {
    name: "Zapier",
    icon: <Zap className="h-10 w-10 text-primary" />,
    description: "Workflow automation tool",
    connection: "Webhooks and APIs",
    benefit: "Connect to 3000+ apps without custom code"
  },
  {
    name: "Make (Integromat)",
    icon: <Zap className="h-10 w-10 text-primary" />,
    description: "Visual automation platform",
    connection: "Webhooks and custom scenarios",
    benefit: "Create complex workflows with visual tools"
  },
  {
    name: "Algolia",
    icon: <Search className="h-10 w-10 text-primary" />,
    description: "Search API",
    connection: "Direct API integration",
    benefit: "Add powerful search to your app in minutes"
  },
  {
    name: "PayPal",
    icon: <CreditCard className="h-10 w-10 text-primary" />,
    description: "Payment service",
    connection: "PayPal SDK and API",
    benefit: "Trusted payment solution with global reach"
  },
  {
    name: "REST APIs",
    icon: <MessageSquareCode className="h-10 w-10 text-primary" />,
    description: "API standard",
    connection: "HTTP requests in your app",
    benefit: "Connect to virtually any web service"
  },
  {
    name: "GraphQL APIs",
    icon: <MessageSquareCode className="h-10 w-10 text-primary" />,
    description: "Query language for APIs",
    connection: "GraphQL client integration",
    benefit: "Fetch exactly the data you need, nothing more"
  },
  {
    name: "Auth Providers",
    icon: <Shield className="h-10 w-10 text-primary" />,
    description: "Social login options",
    connection: "OAuth and SDK integrations",
    benefit: "Let users sign in with accounts they already have"
  },
  {
    name: "Mailchimp",
    icon: <Mail className="h-10 w-10 text-primary" />,
    description: "Email marketing platform",
    connection: "API integration",
    benefit: "Automate email campaigns from your app"
  },
  {
    name: "SendGrid",
    icon: <Mail className="h-10 w-10 text-primary" />,
    description: "Email delivery service",
    connection: "API integration",
    benefit: "Reliable email delivery for notifications and marketing"
  },
  {
    name: "Webhooks",
    icon: <MessageSquareCode className="h-10 w-10 text-primary" />,
    description: "HTTP callbacks",
    connection: "HTTP endpoints in your backend",
    benefit: "Receive real-time data from external services"
  },
  {
    name: "HubSpot",
    icon: <Mail className="h-10 w-10 text-primary" />,
    description: "CRM platform",
    connection: "API integration",
    benefit: "Sync customer data between your app and CRM"
  },
  {
    name: "Resend",
    icon: <Mail className="h-10 w-10 text-primary" />,
    description: "Email API",
    connection: "Direct API integration",
    benefit: "Developer-friendly email sending"
  },
  {
    name: "Twilio",
    icon: <MessageSquareCode className="h-10 w-10 text-primary" />,
    description: "Communication APIs",
    connection: "Twilio SDK and API",
    benefit: "Add SMS, voice, and video to your app"
  },
  {
    name: "Discord",
    icon: <MessageSquareCode className="h-10 w-10 text-primary" />,
    description: "Communication platform",
    connection: "Discord API and webhooks",
    benefit: "Connect your community through Discord"
  },
];

const IntegrationCard: React.FC<IntegrationProps> = ({ name, icon, description, connection, benefit }) => {
  const isMobile = useIsMobile();
  
  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <div className="flex flex-col items-center justify-center p-6 m-2 rounded-xl bg-card border border-border hover:shadow-lg hover:shadow-flutter-primary/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer w-[160px] h-[160px]">
            <div className="flex flex-col items-center text-center gap-2">
              {icon}
              <h3 className="text-lg font-semibold mt-2">{name}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
        </TooltipTrigger>
        {!isMobile && (
          <TooltipContent side="bottom" className="max-w-[300px]">
            <div className="p-2">
              <p><span className="font-semibold">Connection:</span> {connection}</p>
              <p><span className="font-semibold">Benefit:</span> {benefit}</p>
            </div>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};

const IntegrationDialog: React.FC<{ integrations: IntegrationProps[] }> = ({ integrations }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className="mt-8">
          See All Integrations
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">All Available Integrations</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {integrations.map((integration, index) => (
            <div key={index} className="p-4 rounded-lg border border-border bg-card">
              <div className="flex items-center gap-3 mb-2">
                {integration.icon}
                <h3 className="text-lg font-semibold">{integration.name}</h3>
              </div>
              <p className="text-muted-foreground mb-2">{integration.description}</p>
              <p className="text-sm mb-1"><span className="font-semibold">Connection:</span> {integration.connection}</p>
              <p className="text-sm"><span className="font-semibold">Benefit:</span> {integration.benefit}</p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Integrations = () => {
  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container">
        <h2 className="section-heading text-center">Powerful Integration with Your Website or Web App</h2>
        <p className="section-subheading text-center">
          Connect your FlutterFlow app to virtually any service or platform with our extensive integration options
        </p>
        
        <div className="relative mt-12">
          {/* Infinite scroll container */}
          <div className="overflow-hidden w-full">
            <div className="flex integration-scroll">
              {/* First set of items */}
              {integrationsList.map((integration, index) => (
                <div key={`first-${index}`} className="flex-shrink-0">
                  <IntegrationCard {...integration} />
                </div>
              ))}
              {/* Duplicate for infinite scroll effect */}
              {integrationsList.map((integration, index) => (
                <div key={`second-${index}`} className="flex-shrink-0">
                  <IntegrationCard {...integration} />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <IntegrationDialog integrations={integrationsList} />
        </div>
      </div>
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .integration-scroll {
            animation: scroll 60s linear infinite;
            width: fit-content;
            display: flex;
          }
          
          .integration-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
};

export default Integrations;
