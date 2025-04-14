
import React, { useEffect } from 'react';
import { CheckCircle, Zap, Palette, PieChart, Link2, Smartphone } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => {
  return (
    <div 
      className="feature-card opacity-0" 
      style={{ animationDelay: `${delay}ms` }}
      data-animate="true"
    >
      <div className="inline-flex items-center justify-center p-2 mb-4 text-flutter-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Features = () => {
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
    <section id="features" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">
          Why Choose <span className="text-flutter-primary">FlutterFlow</span> for Your Project?
        </h2>
        
        <p className="section-subheading text-center">
          From stunning websites to powerful web applications, we deliver exceptional digital experiences 
          that drive results and keep your visitors engaged.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Zap className="h-10 w-10" />}
            title="Speed"
            description="Rapid development without compromising on quality - get your website up and running in record time."
            delay={100}
          />
          
          <FeatureCard 
            icon={<Palette className="h-10 w-10" />}
            title="Beautiful UI"
            description="Sleek, modern designs tailored for different industries that make your brand stand out."
            delay={200}
          />
          
          <FeatureCard 
            icon={<PieChart className="h-10 w-10" />}
            title="Powerful Performance"
            description="Scalable and optimized websites for a seamless user experience and improved conversion rates."
            delay={300}
          />
          
          <FeatureCard 
            icon={<Link2 className="h-10 w-10" />}
            title="Custom Integrations"
            description="Seamless API connections, automation flows, and database integrations to power your business processes."
            delay={400}
          />
          
          <FeatureCard 
            icon={<Smartphone className="h-10 w-10" />}
            title="Mobile-Optimized"
            description="Fully responsive websites that work flawlessly across all devices, from desktops to mobile phones."
            delay={500}
          />
          
          <FeatureCard 
            icon={<CheckCircle className="h-10 w-10" />}
            title="Easy Maintenance"
            description="Built with FlutterFlow's intuitive platform, making future updates and expansions simple and cost-effective."
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
