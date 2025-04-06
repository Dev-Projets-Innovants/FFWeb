
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { IntegrationProps } from './IntegrationCard';

interface IntegrationDialogProps {
  integrations: IntegrationProps[];
}

const IntegrationDialog: React.FC<IntegrationDialogProps> = ({ integrations }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className="mt-8 hover:bg-secondary/90 transition-colors">
          See All Integrations
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">All Available Integrations</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {integrations.map((integration, index) => (
            <div key={index} className="p-4 rounded-lg border border-border bg-card 
              hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-2">
                {integration.icon}
                <h3 className="text-lg font-semibold truncate">{integration.name}</h3>
              </div>
              <p className="text-muted-foreground mb-2 truncate">{integration.description}</p>
              <p className="text-sm mb-1 truncate">
                <span className="font-semibold">Connection:</span> {integration.connection}
              </p>
              <p className="text-sm truncate">
                <span className="font-semibold">Benefit:</span> {integration.benefit}
              </p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default IntegrationDialog;
