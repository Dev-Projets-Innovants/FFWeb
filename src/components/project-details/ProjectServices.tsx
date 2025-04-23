
import React from 'react';
import { Server } from 'lucide-react';

interface ProjectServicesProps {
  services: string[];
}

const ProjectServices = ({ services }: ProjectServicesProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {services.map((service, index) => (
        <div key={index} className="flex items-start gap-2 p-3 rounded-lg border bg-white/50">
          <Server className="h-5 w-5 text-flutter-secondary mt-0.5" />
          <span>{service}</span>
        </div>
      ))}
    </div>
  );
};

export default ProjectServices;
