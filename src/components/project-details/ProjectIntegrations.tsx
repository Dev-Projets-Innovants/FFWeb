
import React from 'react';
import { Plug } from 'lucide-react';

interface ProjectIntegrationsProps {
  integrations: string[];
}

const ProjectIntegrations = ({ integrations }: ProjectIntegrationsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {integrations.map((integration, index) => (
        <div key={index} className="flex items-start gap-2 p-3 rounded-lg border bg-white/50">
          <Plug className="h-5 w-5 text-flutter-secondary mt-0.5" />
          <span>{integration}</span>
        </div>
      ))}
    </div>
  );
};

export default ProjectIntegrations;
