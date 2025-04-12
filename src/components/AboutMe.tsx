
import React, { useEffect, useRef } from 'react';
import { Progress } from '@/components/ui/progress';
import { Code, Database, Layout, Server, CloudLightning } from 'lucide-react';

interface SkillProps {
  name: string;
  percentage: number;
  icon: React.ReactNode;
  delay: number;
}

const Skill = ({ name, percentage, icon, delay }: SkillProps) => {
  const [progress, setProgress] = React.useState(0);
  const progressRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setTimeout(() => {
          setProgress(percentage);
        }, delay);
      }
    }, { threshold: 0.1 });
    
    if (progressRef.current) {
      observer.observe(progressRef.current);
    }
    
    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, [percentage, delay]);
  
  return (
    <div ref={progressRef} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <span className="mr-2 text-flutter-primary">{icon}</span>
          <span className="font-medium">{name}</span>
        </div>
        <span className="text-flutter-primary font-bold">{progress}%</span>
      </div>
      <Progress value={progress} className="h-2 bg-muted" />
    </div>
  );
};

const AboutMe = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = containerRef.current?.querySelectorAll('[data-animate="true"]');
    elements?.forEach(el => observer.observe(el));
    
    return () => {
      elements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  const skills = [
    { 
      name: "Low-code Development (FlutterFlow)", 
      percentage: 90, 
      icon: <Code className="h-5 w-5" />,
      delay: 300
    },
    { 
      name: "Backend as a Service (Supabase & Firebase)", 
      percentage: 90, 
      icon: <CloudLightning className="h-5 w-5" />,
      delay: 500
    },
    { 
      name: "Backend Development", 
      percentage: 75, 
      icon: <Server className="h-5 w-5" />,
      delay: 700 
    },
    { 
      name: "Database Management", 
      percentage: 80, 
      icon: <Database className="h-5 w-5" />,
      delay: 900
    },
    { 
      name: "Frontend Development", 
      percentage: 70, 
      icon: <Layout className="h-5 w-5" />,
      delay: 1100
    }
  ];

  return (
    <section id="about-me" className="py-20 px-4 bg-white" ref={containerRef}>
      <div className="container mx-auto">
        <h2 className="section-heading text-center opacity-0" data-animate="true">
          About <span className="text-flutter-primary">Me</span>
        </h2>
        
        <p className="section-subheading text-center opacity-0 max-w-3xl mx-auto" data-animate="true" style={{ animationDelay: '200ms' }}>
          I'm a young student based in France, currently studying Computer Engineering. 
          I'm deeply passionate about low-code development, and I'm actively building 
          my online presence through creative digital projects and modern web apps.
        </p>
        
        <div className="max-w-2xl mx-auto mt-12">
          {skills.map((skill, index) => (
            <Skill
              key={index}
              name={skill.name}
              percentage={skill.percentage}
              icon={skill.icon}
              delay={skill.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
