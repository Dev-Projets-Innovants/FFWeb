
import React from 'react';
import IntegrationCard from './integrations/IntegrationCard';
import IntegrationDialog from './integrations/IntegrationDialog';
import IntegrationScrollStyles from './integrations/IntegrationScrollStyles';
import { integrationsList } from './integrations/integration-data';
import { Code, Database, LayoutDashboard } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Integrations = () => {
  return (
    <section id="integrations" className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container">
        <h2 className="section-heading text-center">Powerful Integrations with Your Website or Web App</h2>
        <p className="section-subheading text-center">
          Connect your FlutterFlow app to virtually any service or platform with our extensive integration options, which can be done via APIs or natively within FlutterFlow
        </p>
        
        <div className="relative mt-12">
          <div className="overflow-hidden w-full">
            <div className="flex integration-scroll">
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
        
        <div className="flex justify-center">
          <IntegrationDialog integrations={integrationsList} />
        </div>

        <Separator className="my-16" />

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            Seamless Platform Connectivity
          </h3>
          <p className="text-center text-muted-foreground mb-12">
            FlutterFlow web apps and websites can connect to external platforms and applications, sharing resources and data for a unified experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all text-center">
              <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                <LayoutDashboard className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">FlutterFlow Client App</h4>
              <p className="text-sm text-muted-foreground">Beautiful, responsive client-facing applications</p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all text-center">
              <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                <Database className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Supabase Backend</h4>
              <p className="text-sm text-muted-foreground">Secure database and authentication services</p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all text-center">
              <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Custom Admin Panel</h4>
              <p className="text-sm text-muted-foreground">Powerful admin interfaces with React or Vue.js</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
