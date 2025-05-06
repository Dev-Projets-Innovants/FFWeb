
import React from 'react';
import IntegrationCard from './integrations/IntegrationCard';
import IntegrationDialog from './integrations/IntegrationDialog';
import { integrationsList } from './integrations/integration-data';
import { Code, Database, LayoutDashboard } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import IntegrationScrollStyles from './integrations/IntegrationScrollStyles';

const Integrations = () => {
  return (
    <section id="integrations" className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container">
        <h2 className="section-heading text-center">Powerful Integrations with Your Website or Web App</h2>
        <p className="section-subheading text-center">
          Connect your FlutterFlow app to virtually any service or platform with our extensive integration options, which can be done via APIs or natively within FlutterFlow
        </p>
        
        <div className="relative mt-12">
          <div className="integration-scroll-container">
            <div className="integration-scroll">
              {integrationsList.map((integration, index) => (
                <div key={`first-${index}`} className="flex-shrink-0">
                  <IntegrationCard {...integration} />
                </div>
              ))}
              {integrationsList.map((integration, index) => (
                <div key={`second-${index}`} className="flex-shrink-0">
                  <IntegrationCard {...integration} />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <IntegrationScrollStyles />
        
        <div className="flex justify-center">
          <IntegrationDialog integrations={integrationsList} />
        </div>

        <Separator className="my-16" />

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            Why I Use FlutterFlow for your Website, Web App, and Landing Page ?
          </h3>
          <p className="text-center text-muted-foreground mb-12">
            FlutterFlow enables robust application lifecycle management through multiple environments, allowing you to develop, test, and deploy with confidence. What makes FlutterFlow more efficient for your projects is its visual development approach combined with powerful code generation capabilities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all text-center">
              <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                <LayoutDashboard className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Development Environment</h4>
              <p className="text-sm text-muted-foreground">Safe space for building and testing new features without affecting production users</p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all text-center">
              <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                <Database className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Environment-Specific Config</h4>
              <p className="text-sm text-muted-foreground">Each environment can have its own database and environment variables</p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all text-center">
              <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Custom Workflows</h4>
              <p className="text-sm text-muted-foreground">Create environments tailored to your team's specific development process</p>
            </div>
          </div>
          
          <div className="mt-10 p-6 rounded-xl border border-border bg-card/50">
            <h4 className="font-semibold mb-3 text-center">When to Use Different Environments</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span><span className="font-medium">Development:</span> Build and test new features without affecting your production app.</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span><span className="font-medium">Staging:</span> Replicate production conditions before launching to ensure everything works as expected.</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span><span className="font-medium">Production:</span> Your live environment that users interact with - every new FlutterFlow project starts with this by default.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
