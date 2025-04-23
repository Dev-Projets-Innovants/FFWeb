
import React from 'react';
import { Code } from 'lucide-react';

interface ProjectTechnologiesProps {
  technologies: string[];
}

const ProjectTechnologies = ({ technologies }: ProjectTechnologiesProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {technologies.map((tech, index) => (
        <div key={index} className="flex items-start gap-2 p-3 rounded-lg border bg-white/50">
          <Code className="h-5 w-5 text-flutter-primary mt-0.5" />
          <span>{tech}</span>
        </div>
      ))}
    </div>
  );
};

export default ProjectTechnologies;
