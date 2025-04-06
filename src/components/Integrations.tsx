
import React from 'react';
import IntegrationCard from './integrations/IntegrationCard';
import IntegrationDialog from './integrations/IntegrationDialog';
import IntegrationScrollStyles from './integrations/IntegrationScrollStyles';
import { integrationsList } from './integrations/integration-data';

const Integrations = () => {
  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container">
        <h2 className="section-heading text-center">Powerful Integrations with Your Website or Web App</h2>
        <p className="section-subheading text-center">
          Connect your FlutterFlow app to virtually any service or platform with our extensive integration options
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
      </div>
      <IntegrationScrollStyles />
    </section>
  );
};

export default Integrations;
