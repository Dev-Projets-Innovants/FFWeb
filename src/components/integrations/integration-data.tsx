
import React from 'react';
import { 
  Database, CalendarClock, CreditCard, FileSpreadsheet, Notebook, 
  Zap, Search, MessageSquareCode, Shield, Mail, Package, Slack, Cloud
} from 'lucide-react';
import { IntegrationProps } from './IntegrationCard';

export const integrationsList: IntegrationProps[] = [
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
  {
    name: "Slack",
    icon: <Slack className="h-10 w-10 text-primary" />,
    description: "Team communication platform",
    connection: "Webhooks and API integration",
    benefit: "Streamline team communications and notifications"
  },
  {
    name: "Cloud Services",
    icon: <Cloud className="h-10 w-10 text-primary" />,
    description: "Cloud deployment platforms",
    connection: "Various cloud provider APIs",
    benefit: "Scalable infrastructure and hosting solutions"
  }
];
