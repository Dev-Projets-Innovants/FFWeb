
import React, { useEffect } from 'react';
import { MessageSquare, Code2, Rocket } from 'lucide-react';

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
      className="relative p-6 rounded-xl border border-border bg-card opacity-0"
      style={{ animationDelay: `${delay}ms` }}
      data-animate="true"
    >
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-flutter-primary flex items-center justify-center text-white font-bold">
        {step}
      </div>
      <div className="mt-6">
        <div className="flex justify-center text-flutter-primary mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
        <p className="text-muted-foreground text-center">{description}</p>
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
    <section id="how-it-works" className="py-20 px-4 bg-muted">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">
          How It <span className="text-flutter-primary">Works</span>
        </h2>
        
        <p className="section-subheading text-center">
          From concept to launch, my streamlined process makes building your website, landing page,
          or web application with FlutterFlow quick and efficient - without compromising on quality.
        </p>
        
        <div className="grid md:grid-cols-3 gap-16 mt-16 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/3 left-0 h-0.5 w-full bg-flutter-primary/20 -z-10"></div>
          
          <ProcessStep 
            icon={<MessageSquare className="h-10 w-10" />}
            step="1"
            title="Share Your Vision"
            description="We start with understanding your goals, audience, and requirements to craft the perfect website strategy."
            delay={100}
          />
          
          <ProcessStep 
            icon={<Code2 className="h-10 w-10" />}
            step="2"
            title="Design & Development"
            description="Our team creates a tailored FlutterFlow solution with your branding, content, and functionality built in."
            delay={300}
          />
          
          <ProcessStep 
            icon={<Rocket className="h-10 w-10" />}
            step="3"
            title="Launch Instantly"
            description="Deploy your website in record time and start attracting visitors with your new high-performance online presence."
            delay={500}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
