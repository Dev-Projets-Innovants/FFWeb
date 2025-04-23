
import React, { useEffect } from 'react';
import { MessageSquare, Code2, Rocket, Code } from 'lucide-react';

interface ProcessStepProps {
  icon: React.ReactNode;
  step: string;
  title: string;
  description: string;
  delay: number;
}

const ProcessStep = ({ icon, step, title, description, delay }: ProcessStepProps) => {
  return (
    <div 
      className="relative p-4 rounded-xl border border-border bg-card opacity-0"
      style={{ animationDelay: `${delay}ms` }}
      data-animate="true"
    >
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-flutter-primary flex items-center justify-center text-white font-bold text-sm">
        {step}
      </div>
      <div className="mt-5">
        <div className="flex justify-center text-flutter-primary mb-3">
          {React.cloneElement(icon as React.ReactElement, {
            className: 'h-8 w-8'
          })}
        </div>
        <h3 className="text-lg font-semibold text-center mb-2">{title}</h3>
        <p className="text-muted-foreground text-center text-sm">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('[data-animate="true"]');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="how-it-works" className="py-16 px-4 bg-muted">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">
          How It <span className="text-flutter-primary">Works</span>
        </h2>
        
        <p className="section-subheading text-center mb-12">
          From concept to launch, my streamlined process makes building your website, landing page,
          or web application with FlutterFlow quick and efficient - without compromising on quality.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/3 left-0 h-0.5 w-full bg-flutter-primary/20 -z-10"></div>
          
          <ProcessStep 
            icon={<MessageSquare />}
            step="1"
            title="Share Your Vision"
            description="I start with understanding your goals, audience, and requirements."
            delay={100}
          />
          
          <ProcessStep 
            icon={<Code2 />}
            step="2"
            title="Design & Development"
            description="Building a scalable solution with your branding and functionalities."
            delay={300}
          />
          
          <ProcessStep 
            icon={<Rocket />}
            step="3"
            title="Launch Instantly"
            description="Deploy your website in record time and start attracting visitors."
            delay={500}
          />
          
          <ProcessStep 
            icon={<Code />}
            step="4"
            title="Full Source Code"
            description="Get complete source code access or project ownership for future scalability."
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
