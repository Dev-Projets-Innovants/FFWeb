
import React from 'react';
import { Check } from 'lucide-react';

interface ProjectFeaturesProps {
  features: string[];
}

const ProjectFeatures = ({ features }: ProjectFeaturesProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start gap-2 p-3 rounded-lg border bg-white/50">
          <Check className="h-5 w-5 text-green-500 mt-0.5" />
          <span>{feature}</span>
        </div>
      ))}
    </div>
  );
};

export default ProjectFeatures;
