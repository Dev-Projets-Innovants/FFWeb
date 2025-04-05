
import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
  highlighted?: boolean;
  delay: number;
}

const PricingTier = ({
  name,
  price,
  description,
  features,
  notIncluded = [],
  ctaText,
  highlighted = false,
  delay
}: PricingTierProps) => {
  return (
    <div 
      className={`rounded-xl p-8 transition-all duration-300 border ${
        highlighted 
          ? 'border-flutter-primary shadow-xl shadow-flutter-primary/10 relative' 
          : 'border-border hover:border-flutter-primary/50'
      } opacity-0`}
      style={{ animationDelay: `${delay}ms` }}
      data-animate="true"
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-flutter-primary text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <h3 className="text-xl font-semibold mb-2 flex items-center">
        {name === "Starter" && <span className="mr-2">💡</span>}
        {name === "Professional" && <span className="mr-2">💎</span>}
        {name === "Enterprise Custom" && <span className="mr-2">🚀</span>}
        {name}
      </h3>
      
      <div className="mb-4">
        <span className="text-3xl font-bold">{price}</span>
        <span className="text-muted-foreground ml-1">€</span>
      </div>
      
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-flutter-primary mt-0.5 mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
        
        {notIncluded.map((feature, i) => (
          <li key={i} className="flex items-start text-muted-foreground">
            <X className="h-5 w-5 text-muted-foreground/70 mt-0.5 mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        className={`w-full ${
          highlighted 
            ? 'bg-flutter-primary hover:bg-flutter-secondary' 
            : 'bg-flutter-dark hover:bg-flutter-secondary'
        }`}
      >
        {ctaText}
      </Button>
    </div>
  );
};

const Pricing = () => {
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
    <section id="pricing" className="py-20 px-4 bg-muted">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">
          Pricing & <span className="text-flutter-primary">Packages</span>
        </h2>
        
        <p className="section-subheading text-center">
          Choose the perfect package for your needs. All our websites are built with FlutterFlow, 
          ensuring top-notch quality and performance.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingTier 
            name="Starter"
            price="799"
            description="Perfect for individuals and small businesses needing a simple online presence."
            features={[
              "Single page website",
              "Mobile responsive design",
              "Basic SEO optimization",
              "Contact form integration",
              "1 round of revisions"
            ]}
            notIncluded={[
              "Multi-page structure",
              "Advanced features"
            ]}
            ctaText="Get Started"
            delay={100}
          />
          
          <PricingTier 
            name="Professional"
            price="1499"
            description="Ideal for growing businesses that need more features and functionality."
            features={[
              "Up to 5 pages",
              "Mobile responsive design",
              "Advanced SEO optimization",
              "Contact form & newsletter",
              "Social media integration",
              "Basic animation effects",
              "2 rounds of revisions"
            ]}
            ctaText="Most Popular Choice"
            highlighted={true}
            delay={200}
          />
          
          <PricingTier 
            name="Enterprise Custom"
            price="2999"
            description="For businesses needing complex solutions with advanced functionality."
            features={[
              "Custom multi-page website",
              "Mobile responsive design",
              "Premium SEO optimization",
              "Advanced animations",
              "Custom API integrations",
              "E-commerce functionality",
              "User authentication",
              "3 rounds of revisions",
              "Priority support"
            ]}
            ctaText="Contact For Details"
            delay={300}
          />
        </div>
        
        <p className="text-center mt-10 text-muted-foreground">
          Need something specific? <a 
            href="mailto:dev.projets.innovants@gmail.com" 
            className="text-flutter-primary hover:underline"
          >
            Contact us
          </a> for a custom quote.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
